import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const BasicButton = ({ title, onPressIn, onPress, onPressOut, onLongPress }) => {

  return (
    <View >
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onLongPress={onLongPress}
      >
        <Text style={styles.primaryButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 
  primaryButton: {
    backgroundColor: "#8A2BE2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BasicButton;
