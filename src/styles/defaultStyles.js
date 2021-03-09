import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  divider: {
    borderBottomColor: "#707070",
    borderBottomWidth: 1,
    width: "80%",
    paddingVertical: 5,
    alignSelf: "center",
    opacity: 0.08,
  },
  boldOrangeText: {
    fontSize: 24,
    fontFamily: "FuturaPTHeavy",
    color: "#FF4713",
  },
  normalOrangeText: {
    fontSize: 24,
    fontFamily: "FuturaPTBook",
    color: "#FF4713",
  },
  normalText: {
    fontSize: 18,
    fontFamily: "FuturaPTBook",
    color: "#707070",
  },
  buttonText: { fontSize: 24, fontFamily: "FuturaPTBook", color: "#fff" },
});
