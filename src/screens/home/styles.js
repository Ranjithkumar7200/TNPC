import { StyleSheet } from "react-native";
import { color } from "../../constants/Constants";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      display: "flex",
      flexDirection: "column",
      fontFamily:'Petrona-Medium',
      justifyContent:'space-around',
      marginTop:50
    },
    headerContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerText: {
      fontFamily: "IbarraRealNova-Bold",
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
    },
  
    toggleGroupContainer: {
      display: "flex",
      flexDirection: "row",
      fontFamily: "Petrona-SemiBold",
      justifyContent: "space-between",
      alignItems: "center",
    },
    toggleContainer: {
      display: "flex",
      flexDirection: "row",
      fontFamily: "Petrona-SemiBold",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor:color.primary,
      width: 160,
      height: 32,
      borderRadius: 15,
    },
    materialText: {
      fontFamily: "Petrona-SemiBold",
      fontSize: 8,
    },
    mockText: {
      fontFamily: "Petrona-SemiBold",
      fontSize: 8,
    },
    datesText: {
      fontFamily: "Petrona-SemiBold",
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
      fontFamily: "Petrona-SemiBold",
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
      fontFamily: "Petrona-Medium",
    },
    book:{
      justifyContent:'center',
      alignItems:'center',
      height:50,
      borderColor:color.secondary,
      borderWidth:1,
      borderRadius:15
    },
    bookText:{
      fontSize: 12,
      fontFamily: "Petrona-Medium",
    }
  });
  