import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    scrollContainer: {
      flex: 1,
    },
    container: {
      marginHorizontal: 20,
      alignItems: "center",
    },
    notification: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#E6E6FA",
      width: screenWidth * 0.9,
      padding: 10,
      borderRadius: 12,
      marginVertical:10
    },
    notificationText: {
      fontFamily: "Petrona-Medium",
      fontSize: 10,
    },
  });