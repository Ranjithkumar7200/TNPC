import { StyleSheet } from "react-native";
import { color, fonts } from "../../constants/Constants";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      display: "flex",
      flexDirection: "column",
      fontFamily:fonts.Petrona.medium,
      marginTop:50
    },
    headerContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerText: {
      fontFamily: fonts.IbarraRealNova.bold,
      color: "#000000",
      fontSize: 26,
    },
    masterText: {
      color: "#8A2BE2",
    },
    carousel: {
      overflow: "hidden",
      borderRadius: 16,
      borderColor: color.secondary,
      borderWidth: 1,
      marginVertical:20
    },
  
    toggleGroupContainer: {
      display: "flex",
      flexDirection: "row",
      fontFamily: fonts.Petrona.semiBold,
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical:10,
    },
    toggleContainer: {
      display: "flex",
      flexDirection: "row",
      fontFamily:fonts.Petrona.semiBold,
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor:color.secondary,
      width: 160,
      height: 32,
      borderRadius: 15,
    },
    materialText: {
      fontFamily: fonts.Petrona.semiBold,
      fontSize: 8,
      
    },
 
    mockText: {
      fontFamily: fonts.Petrona.semiBold,
      fontSize: 8,
      
    },
    datesText: {
      fontFamily: fonts.Petrona.semiBold,
      fontSize: 8,
      color: "#FFFFFF",
    },
    importantDateContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color.primary,
      width: 160,
      height: 32,
      borderRadius: 15,
      marginHorizontal: 5,
    },
    featureContainer: {
      display: "flex",
      flexDirection: "row",
      fontFamily: fonts.Petrona.semiBold,
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
    },
    pastContainer: {
      width:150,
      height: 50,
      borderColor: color.secondary,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      marginHorizontal:4,
      marginVertical:20
    },
    pastText: {
      backgroundColor: "#FFFFFF",
      fontSize: 12,
      fontFamily:fonts.Petrona.medium,
    },
    book:{
      justifyContent:'center',
      alignItems:'center',
      height:50,
      borderColor:color.secondary,
      borderWidth:1,
      borderRadius:15,
      marginVertical:20
    },
    bookText:{
      fontSize: 12,
      fontFamily: fonts.Petrona.medium,
    },
    button: {
      width:80,
      height:32,
      borderRadius: 15,
      alignItems:'center',
      justifyContent:'center'
    },
    preliminary:{
      alignItems:'center',
      justifyContent:'space-evenly',
      borderColor:color.secondary,
      borderWidth:2,
      height:132,
      borderRadius:15
    },
    preliminaryText:{
      fontFamily:fonts.Petrona.semiBold,
      fontSize:14
    },
    btnGroup:{
      flexDirection:'row',
      alignItems:'center'
    },
    btn:{
      marginHorizontal:20,
      width:80,
      height:30,
      backgroundColor:color.secondary,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:8,

    },
    btnText:{
      fontFamily:fonts.Petrona.medium,
      fontSize:10,
      color:color.primary
    }
  });
  