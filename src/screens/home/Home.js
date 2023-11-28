import { Foundation, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { styles } from "./styles";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { data } from "./data";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigate = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigate.navigate("Notes")}>
        <View style={styles.notesContainer}>
          <Foundation name="clipboard-pencil" size={24} color="#8A2BE2" />
        </View>
        </TouchableOpacity>
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
            <Text style={styles.bookText}>Past Book Store</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
