import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  ScrollView,
  FlatList,
  View,
  Button,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import newtinProfile from "../../../assets/newtinProfile.png";
import queryString from "query-string";

import sendMessageToChatGPT from "../../services/conectToGPTApi";
import Header from "./components/header/index";

import StatusBar from "../../components/statusBar";
import styles from "./styles";

export default function Login({ navigation, route }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [profile, setProfile] = useState(null);

  const token = route.params.token;

  useEffect(() => {
    const loadProfile = async () => {
      const uniqueParam = Date.now();

      const url = `https://www.googleapis.com/oauth2/v2/userinfo?${queryString.stringify(
        { uniqueParam }
      )}`;

      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      setProfile(data);
    };

    loadProfile();
  }, []);

  const handleSend = async () => {
    try {
      setLoading(true);
      setMessage("");
      Keyboard.dismiss;

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: message },
      ]);

      const response = await sendMessageToChatGPT(message);

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", content: response },
      ]);
      setMessage("");
    } catch (error) {
      console.error("Erro ao enviar mensagem para o ChatGPT", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = ({ item }) => {
    const isUserMessage = item.role === "user";
    return (
      <View
        style={[
          styles.messageContainer,
          isUserMessage
            ? styles.userMessageContainer
            : styles.botMessageContainer,
        ]}
      >
        {!isUserMessage && (
          <View style={styles.profileBotContainer}>
            <Image source={newtinProfile} style={styles.profileBotImage} />
          </View>
        )}
        <View
          style={[
            styles.messageBubble,
            isUserMessage ? styles.userMessageBubble : styles.botMessageBubble,
          ]}
        >
          <Text
            style={[
              styles.messageText,
              isUserMessage ? styles.userMessageText : styles.botMessageText,
            ]}
          >
            {item.content}
          </Text>
        </View>
        {isUserMessage && (
          <View style={styles.profileUserContainer}>
            <Image
              source={{ uri: `${profile.picture}` }}
              style={styles.profileUserImage}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#08050C" barStyle="light-content" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 55 : 60}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {token ? (
            <>
              <Header />
              <View style={styles.container}>
                <ScrollView
                  style={styles.messagesContainer}
                  contentContainerStyle={styles.scrollView}
                >
                  <FlatList
                    data={messages}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderMessage}
                  />
                  {loading && (
                    <View style={styles.loadingContainer}>
                      <ActivityIndicator size="small" color="#000000" />
                    </View>
                  )}
                </ScrollView>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Digite sua mensagem"
                    value={message}
                    onChangeText={setMessage}
                  />
                  <Button title="Enviar" onPress={handleSend} />
                </View>
              </View>
            </>
          ) : (
            <Text>Loading...</Text>
          )}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}
