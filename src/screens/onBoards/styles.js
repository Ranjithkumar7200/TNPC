import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    margin: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#8A2BE2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 60,
  },
  skipContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  skipText: {
    fontSize: 16,
    color: "#8A2BE2",
    fontWeight: "bold",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10, // Optional: Add margin bottom for spacing
  },
  arrowIcon: {
    marginRight: 5,
  },
  title: {
    fontSize: 30,
    color: "#8A2BE2",
    fontWeight: "bold",
    fontFamily: "IbarraRealNova-Bold",
    marginRight: 30,
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 25,
    fontFamily: "IbarraRealNova-Bold",
  },
  description: {
    fontSize: 16,
    fontFamily: "Petrona-Regular",
    letterSpacing: 0.5,
    lineHeight: 30,
  },
  firstLetter: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: "bold",
    color: "#000000", // Adjust the color as needed
  },
});
export default styles;
