import { StyleSheet } from "react-native";
import { color, screenWidth } from "../../constants/Constants";

export const styles = StyleSheet.create({
    scrollviewContainer: {
      flex: 1,
    },
    container: {
      alignItems: "center",
      justifyContent: "space-around",
    },
    imporatantDates:{
      marginVertical:10
    },
    textRegular: {
      fontFamily: "Petrona-Regular",
      fontSize: 10,
      marginVertical: 5,
    },
    textMedium: {
      fontFamily: "Petrona-Medium",
      fontSize: 10,
      marginVertical: 5,
    },
    textMixed: {
      fontFamily: "Petrona-Mixed",
      fontSize: 10,
    },
    textBold: {
      fontFamily: "Petrona-Bold",
      fontSize: 18,
      color: "#fff",
    },
  
    header: {
      backgroundColor: color.primary,
      width: screenWidth * 0.9,
      alignItems: "center",
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15, // Adjust the radius as needed
      padding: 10,
    },
    dates: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: screenWidth * 0.9,
      backgroundColor: color.secondary,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      padding: 5,
    },
    details: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    detailsHeader: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    vacancies: {
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
    vacanciesNO: {
      alignItems: "flex-end",
    },
    number: {
      fontFamily: "Petrona-SemiBold",
      fontSize: 10,
      color: color.primary,
    },
    moreContainer: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    more: {
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color.primary,
      borderRadius: 6,
    },
    moreText: {
      fontFamily: "Petrona-Medium",
      fontSize: 6,
      color: "#fff",
      padding: 5,
    },
  });