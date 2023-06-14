import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    marginTop: 60,
    position: "relative",
    borderWidth: 1,
    zIndex: 1,
    backgroundColor: "#f8f8ff",
  },
  messagesContainer: {
    flex: 1,
    padding: 20,
  },
  boxMessage: {
    flexDirection: "row",
    flex: 1,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  scrollView: {
    paddingBottom:'35%',
  },
  userMessageContainer: {
    justifyContent: "flex-end", 
    flexDirection: "row",
  },
  botMessageContainer: {
    justifyContent: "flex-start", 
    flexDirection: "row",
  },
  messageBubble: {
    backgroundColor: "#CDCDCD",
    flex: 1,
    padding: 8,
    borderRadius: 8,
  },
  messageText: {
    fontSize: 16,
  },
  userMessageBubble: {
    backgroundColor: "#32cd32",
    marginRight: 5, 
  },
  userMessageText: {
    fontSize: 16,
    color: "#fff",
  },
  botMessageBubble: {
    backgroundColor: "#CDCDCD",
    marginLeft: 5, // Adicionar margem à esquerda para separar o balão de mensagem da imagem do bot
  },
  botMessageText: {
    fontSize: 16,
  },
  inputContainer: {
    zIndex: 0,
    top: "87%",
    backgroundColor: "#f8f8ff",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 60,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    backgroundColor: "#f8f8ff",
    borderColor: "#ccc",
    borderRadius: 8,
  },
  profileUserImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 8,
  },
  profileBotImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});