// ProfilePhoto.js
import React from "react";
import { Image, TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ProfilePhoto = ({ source, onEditPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onEditPress}>
      <Image source={source} style={styles.image} />
      <View style={styles.editIcon}>
        <MaterialIcons name="edit" size={15} color="#000000" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderColor: "#E6E6FA",
    borderWidth: 2,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 2,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderColor: "#8A2BE2",
    borderWidth: 1,
    alignItems: "center",
  },
});

export default ProfilePhoto;
