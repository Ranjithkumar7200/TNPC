import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollContainer: {
      flex: 1,
    },
    container: {
      alignItems: "center",
    },
    notes: {
      width: 374,
      height: 108,
      borderRadius: 15,
      justifyContent: "space-around",
      marginVertical: 10,
    },
    notesContainer: {
      justifyContent: "space-evenly",
      margin: 10,
    },
    notesText: {
      fontFamily: "Petrona-Medium",
      fontSize: 10,
    },
    iconContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      margin: 10,
    },
    icon: {
      marginHorizontal: 5,
    },
  });
  