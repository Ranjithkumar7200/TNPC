import {  StyleSheet } from "react-native";
import { color, screenWidth } from "../../constants/Constants";

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
      backgroundColor: color.secondary,
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