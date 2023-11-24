import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    form: {
      display: "flex",
      justifyContent: "space-between",
      borderRadius: 11,
      borderWidth: 2, // Stroke (border)
      borderColor: "#E6E6FA", // Stroke color
      backgroundColor: "#FFFFFF", // Fill color
      padding: 16,
    },
    input: {
      width: 264,
      height: 35,
      paddingHorizontal: 15,
      backgroundColor: "#E6E6FA",
      borderRadius: 6,
    },
    labelInput: {
      alignItems: "center",
    },
    formGroup: {
      margin: 10,
    },
    labelText: {
      alignItems: "center",
      fontFamily: "Petrona-Regular",
      fontSize: 12,
    },
    button: {
      width: 264,
      height: 35,
      backgroundColor: "#8A2BE2",
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      margin: 10,
    },
    buttonLabel: {
      color: "#FFFFFF",
      fontSize: 14,
      fontFamily: "Petrona-Medium",
    },
    headerContainer: {
      marginVertical: 20,
    },
    header: {
      fontSize: 26,
      fontFamily: "Petrona-Bold",
      color: "#000000",
    },
    registerText: {
      fontFamily: "Petrona-Regular",
      fontSize: 12,
      marginVertical: 10,
    },
    forget: {
      alignItems: "flex-end",
      marginTop: -10,
      marginBottom: 10,
      marginHorizontal: 10,
    },
    forgetText: {
      color: "#8A2BE2",
      fontSize: 10,
      fontFamily: "Petrona-Regular",
    },
    toggleButton: {
      position: "relative",
      bottom: 24,
      left: 100,
    },
  });

  export default styles;