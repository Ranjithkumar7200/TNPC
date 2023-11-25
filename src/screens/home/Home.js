import { Foundation, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { data } from "./data";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.notesContainer}>
          <Foundation name="clipboard-pencil" size={24} color="#8A2BE2" />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            TNPSC <Text style={styles.masterText}>Master</Text>
          </Text>
        </View>
        <View>
          <MaterialIcons
            name="notifications-active"
            size={24}
            color="#8A2BE2"
          />
        </View>
      </View>
      <View>
        <View style={styles.carousel}>
          <Carousel
            loop
            width={374}
            height={129}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={1000}
            renderInterval={3000} // Adjust the interval between transitions
            renderItem={({ item, index }) => (
              <View key={index}>
                <Image style={styles.image} source={item.image} />
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.toggleGroupContainer}>
        <View style={styles.toggleContainer}>
          <View style={styles.backgroundColor}>
            <View style={styles.touchable}>
              <Text style={styles.materialText}>Study Materials</Text>
            </View>
          </View>
          <View>
            <Text style={styles.mockText}>Mock Test</Text>
          </View>
        </View>
        <View style={styles.importantDateContainer}>
          <Text style={styles.datesText}>TNPSC Important Dates</Text>
        </View>
      </View>
      <View style={styles.featureContainer}>
        <TouchableOpacity>
          <View style={styles.pastContainer}>
            <Text style={styles.pastText}>Past Year Questions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.pastContainer}>
            <Text style={styles.pastText}>Model Questions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.pastContainer}>
            <Text style={styles.pastText}>Current Affairs</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.pastContainer}>
            <Text style={styles.pastText}>Aptitude</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.pastContainer}>
            <Text style={styles.pastText}>New School Books</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.pastContainer}>
            <Text style={styles.pastText}>Old School Books</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
        <View style={styles.book}>
        <Text style={styles.bookText}>
          Past Book Store
        </Text>
      </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    // fontFamily:'Petrona-Medium'
    justifyContent:'space-around',
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
    borderColor: "#E6E6FA",
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
    backgroundColor: "#E6E6FA",
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
    backgroundColor: "#8A2BE2",
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
    borderColor: "#E6E6FA",
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
    borderColor:'#E6E6FA',
    borderWidth:1,
    borderRadius:15
  },
  bookText:{
    fontSize: 12,
    fontFamily: "Petrona-Medium",
  }
});

export default Home;
