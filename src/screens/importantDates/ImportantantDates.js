import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {  ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
const ImportantantDates = () => {
  return (
    <ScrollView style={styles.scrollviewContainer}>
      <View style={styles.container}>
        <View style={styles.imporatantDates}>
          <View style={styles.header}>
            <Text style={styles.textBold}>Group1</Text>
          </View>
          <View style={styles.dates}>
            <View style={styles.detailsHeader}>
              <Text style={styles.textRegular}>Exam conducted on :</Text>
              <Text style={styles.textRegular}>Last date to apply :</Text>
              <Text style={styles.textRegular}>Registration Fee :</Text>
              <Text style={styles.textRegular}>For registration :</Text>
            </View>
            <View style={styles.detailsValues}>
              <Text style={styles.textMedium}>5 & 6 February 2024</Text>
              <Text style={styles.textMedium}>8 December 2023</Text>
              <Text style={styles.textMedium}>₹ 160</Text>
              <Text style={styles.textMedium}>tnpsc.gov.in</Text>
            </View>

            <View style={styles.vacancies}>
              <View style={styles.vacanciesNO}>
                <View>
                  <Text style={styles.textMedium}>No of vacancies</Text>
                </View>
                <View>
                  <Text style={styles.number}>52</Text>
                </View>
              </View>
              <TouchableOpacity>
                <View style={styles.moreContainer}>
                  <View style={styles.more}>
                    <Text style={styles.moreText}>More</Text>
                    <Ionicons
                      name="information-circle-outline"
                      size={6}
                      color="#fff"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.imporatantDates}>
          <View style={styles.header}>
            <Text style={styles.textBold}>Group1</Text>
          </View>
          <View style={styles.dates}>
            <View style={styles.detailsHeader}>
              <Text style={styles.textRegular}>Exam conducted on :</Text>
              <Text style={styles.textRegular}>Last date to apply :</Text>
              <Text style={styles.textRegular}>Registration Fee :</Text>
              <Text style={styles.textRegular}>For registration :</Text>
            </View>
            <View style={styles.detailsValues}>
              <Text style={styles.textMedium}>5 & 6 February 2024</Text>
              <Text style={styles.textMedium}>8 December 2023</Text>
              <Text style={styles.textMedium}>₹ 160</Text>
              <Text style={styles.textMedium}>tnpsc.gov.in</Text>
            </View>

            <View style={styles.vacancies}>
              <View style={styles.vacanciesNO}>
                <View>
                  <Text style={styles.textMedium}>No of vacancies</Text>
                </View>
                <View>
                  <Text style={styles.number}>52</Text>
                </View>
              </View>
              <TouchableOpacity>
                <View style={styles.moreContainer}>
                  <View style={styles.more}>
                    <Text style={styles.moreText}>More</Text>
                    <Ionicons
                      name="information-circle-outline"
                      size={6}
                      color="#fff"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.imporatantDates}>
          <View style={styles.header}>
            <Text style={styles.textBold}>Group1</Text>
          </View>
          <View style={styles.dates}>
            <View style={styles.detailsHeader}>
              <Text style={styles.textRegular}>Exam conducted on :</Text>
              <Text style={styles.textRegular}>Last date to apply :</Text>
              <Text style={styles.textRegular}>Registration Fee :</Text>
              <Text style={styles.textRegular}>For registration :</Text>
            </View>
            <View style={styles.detailsValues}>
              <Text style={styles.textMedium}>5 & 6 February 2024</Text>
              <Text style={styles.textMedium}>8 December 2023</Text>
              <Text style={styles.textMedium}>₹ 160</Text>
              <Text style={styles.textMedium}>tnpsc.gov.in</Text>
            </View>

            <View style={styles.vacancies}>
              <View style={styles.vacanciesNO}>
                <View>
                  <Text style={styles.textMedium}>No of vacancies</Text>
                </View>
                <View>
                  <Text style={styles.number}>52</Text>
                </View>
              </View>
              <TouchableOpacity>
                <View style={styles.moreContainer}>
                  <View style={styles.more}>
                    <Text style={styles.moreText}>More</Text>
                    <Ionicons
                      name="information-circle-outline"
                      size={6}
                      color="#fff"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};



export default ImportantantDates;
