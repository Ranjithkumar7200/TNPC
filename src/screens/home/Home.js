import { Foundation, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { styles } from "./styles";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { data } from "./data";
import { useNavigation } from "@react-navigation/native";
import { color } from "../../constants/Constants";
import PastyearModel from "../models/PastyearModel";

const Home = () => {
  const navigate = useNavigation();
  const [toggle, setToggle] = useState(false);
  const [backgroundColor1, setBackgroundColor1] = useState(color.primary);
  const [backgroundColor2, setBackgroundColor2] = useState(color.secondary);
  const [color1, setColor1] = useState(color.secondary);
  const [color2, setColor2] = useState(color.primary);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };

  const handlePress1 = () => {
    setToggle(false);
    setBackgroundColor1(color.primary);
    setBackgroundColor2(color.secondary);
    setColor1(color.secondary);
    setColor2(color.primary);
  };
  const handlePress2 = () => {
    setToggle(true);
    setBackgroundColor2(color.primary);
    setBackgroundColor1(color.secondary);
    setColor1(color.primary);
    setColor2(color.secondary);
  };
  return (
    <>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigate.navigate("Notes")}>
          <View style={styles.notesContainer}>
            <Foundation name="clipboard-pencil" size={24} color="#8A2BE2" />
          </View>
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            TNPSC <Text style={styles.masterText}>Master</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigate.navigate("Notifications")}>
          <View>
            <MaterialIcons
              name="notifications-active"
              size={24}
              color="#8A2BE2"
            />
          </View>
        </TouchableOpacity>
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
          <TouchableOpacity
            onPress={handlePress1}
            style={[styles.button, { backgroundColor: backgroundColor1 }]}
          >
            <View style={styles.touchable}>
              <Text style={[styles.materialText, { color: color1 }]}>
                Study Materials
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handlePress2}
            style={[styles.button, { backgroundColor: backgroundColor2 }]}
          >
            <View>
              <Text style={[styles.mockText, { color: color2 }]}>
                Mock Test
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigate.navigate("Important Dates")}>
          <View style={styles.importantDateContainer}>
            <Text style={styles.datesText}>TNPSC Important Dates</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        {!toggle ? (
          <>
            <View style={styles.featureContainer}>
              <TouchableOpacity onPress={showModal}>
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
          </>
        ) : (
          <>
            <View>
              <View style={styles.mock}>
                <TouchableOpacity>
                  <View style={styles.book}>
                    <Text style={styles.bookText}>Topic Wise Test</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.mock}>
                <TouchableOpacity>
                  <View style={styles.book}>
                    <Text style={styles.bookText}>Custom Test</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.preliminary}>
                <View>
                  <Text style={styles.preliminaryText}>
                    Preliminary Full Tests
                  </Text>
                </View>
                <View style={styles.btnGroup}>
                  <TouchableOpacity>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>Group1</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>Group4</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
    <PastyearModel visible={visible} hideModal={hideModal}/>
    </>
  );
};

export default Home;
