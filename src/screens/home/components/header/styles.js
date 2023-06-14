import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    width:'100%',
    position:'absolute',
    height:61,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#08050C',
    paddingLeft:20,
    paddingRight:20
  },
  button: {
    left:-1,
  },
  textButton: {
    fontSize: 20,
    right: '150%',
    color: "#FFFFFF",
  },
});
