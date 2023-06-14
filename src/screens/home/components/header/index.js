import { Text, TouchableOpacity, Image, View } from "react-native";
import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

import newtinProfile from "../../../../../assets/newtinProfile.png";

const header = ({ onPress }) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={newtinProfile} />
        <Text style={styles.textButton}>Newtin</Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <AntDesign name="ellipsis1" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default header;
