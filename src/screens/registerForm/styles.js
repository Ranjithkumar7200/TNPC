import { StyleSheet } from "react-native";
import { color, fonts } from "../../constants/Constants";

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
      borderColor: color.primary, // Stroke color
      backgroundColor: "#FFFFFF", // Fill color
      padding: 16,
    },
    input: {
      width: 264,
      height: 35,
      paddingHorizontal: 15,
      backgroundColor:color.secondary,
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
      fontFamily: fonts.Petrona.regular,
      fontSize: 12,
    },
    button: {
      width: 264,
      height: 35,
      backgroundColor: color.primary,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      margin: 10,
    },
    buttonLabel: {
      color: "#FFFFFF",
      fontSize: 14,
      fontFamily: fonts.Petrona.medium,
    },
    headerContainer: {
      marginVertical: 20,
    },
    header: {
      fontSize: 26,
      fontFamily: fonts.Petrona.bold,
      color: "#000000",
    },
    loginText: {
      fontFamily: fonts.Petrona.regular,
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
      borderColor: color.primary,
      alignItems:"center",
      justifyContent:'center'
    },
    googleText:{
      fontFamily:fonts.Petrona.regular,
      fontSize:12,
      alignItems:'center',
    },
    orText:{
      fontFamily:fonts.Petrona.regular,
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