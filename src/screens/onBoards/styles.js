import { StyleSheet } from "react-native";
import { color, fonts } from "../../constants/Constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
  },
  slideContainer: {
    margin: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: color.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30, // Adjusted margin for responsiveness
  },
  skipContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  skipText: {
    fontSize: 16,
    color: color.primary,
    fontWeight: "bold",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  arrowIcon: {
    marginRight: 5,
  },
  title: {
    fontSize: 30,
    color: color.primary,
    fontWeight: "bold",
    fontFamily:fonts.IbarraRealNova.regular,
    marginRight: 30,
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 25,
    fontFamily: fonts.IbarraRealNova.regular,
  },
  description: {
    fontSize: 16,
    fontFamily: fonts.Petrona.regular,
    letterSpacing: 0.5,
    lineHeight: 30,
  },
  firstLetter: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default styles;