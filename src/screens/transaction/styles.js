import { StyleSheet } from "react-native";
import { fonts } from "../../constants/Constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      display: "flex",
      flexDirection: "column",
    },
    filter: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    filterText: {
      fontSize: 12,
      fontFamily: fonts.Petrona.medium,
      marginRight: 10,
    },
    dayText: {
      fontSize: 12,
      fontFamily: fonts.Petrona.bold,
    },
    history: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    withdrawContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    withdraw: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 8,
    },
    withdrawText: {
      fontSize: 10,
      fontFamily: fonts.Petrona.regular,
    },
    transationDetails: {
      marginVertical: 10,
      display: "flex",
      justifyContent: "space-around",
    },
  });