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
    loginText: {
      fontFamily: "Petrona-Regular",
      fontSize: 12,
      marginVertical: 30,
    },
    toggleButton: {
      position: "relative",
      bottom: 24,
      left: 100,
    },
    googleContainer: {
      display:'flex',
      flexDirection:'row',
      width: 264,
      height: 35,
      borderRadius:6,
      borderWidth: 2,
      borderColor: "#8A2BE2",
      alignItems:"center",
      justifyContent:'center'
    },
    googleText:{
      fontFamily:'Petrona-Regular',
      fontSize:12,
      alignItems:'center',
    },
    orText:{
      fontFamily:'Petrona-Regular',
      marginVertical:10,
      fontSize:12,
  
    },
    googleImage:{
      width:20,
      height:20,
      marginHorizontal:10
    },
    emailValidation:{
      color: "red",
      fontSize: 12,
      marginTop:4
    },
    Passwordvalidation: {
      color: "red",
      fontSize: 12,
      marginTop:-10,
      
    },
  });

  export default styles;