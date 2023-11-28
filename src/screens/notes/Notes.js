import { Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { styles } from "./styles";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { notesData } from "./notesData";
const Notes = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {notesData.map((items, outerIndex) => {
          const isEvenIndex = outerIndex % 2 === 0;
          const backgroundColor = isEvenIndex ? "#E6E6FA" : "#8A2BE2";
          const color = isEvenIndex ? "#8A2BE2" : "#E6E6FA";
          return (
            <>
              <View style={[styles.notes, { backgroundColor }]}>
                <View style={styles.notesContainer}>
                  {items.note.map((notes, index) => {
                    return (
                      <>
                        <Text style={[styles.notesText, { color }]}>
                          {index + 1 + " . " + notes}
                        </Text>
                      </>
                    );
                  })}
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity>
                    <View style={styles.icon}>
                      <Feather name="edit" size={15} color="green" />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.icon}>
                      <FontAwesome name="trash-o" size={15} color="red" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Notes;
