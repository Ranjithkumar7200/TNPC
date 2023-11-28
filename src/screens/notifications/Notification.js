import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { styles } from "./styles";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Notification = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.notification}>
          <View>
            <Text style={styles.notificationText}>
              New App update is available
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <FontAwesome name="trash-o" size={15} color="red" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.notification}>
          <View>
            <Text style={styles.notificationText}>
              New App update is available
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <FontAwesome name="trash-o" size={15} color="red" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.notification}>
          <View>
            <Text style={styles.notificationText}>
              New App update is available
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <FontAwesome name="trash-o" size={15} color="red" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.notification}>
          <View>
            <Text style={styles.notificationText}>
              New App update is available
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <FontAwesome name="trash-o" size={15} color="red" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.notification}>
          <View>
            <Text style={styles.notificationText}>
              New App update is available
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <FontAwesome name="trash-o" size={15} color="red" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.notification}>
          <View>
            <Text style={styles.notificationText}>
              New App update is available
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <FontAwesome name="trash-o" size={15} color="red" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.notification}>
          <View>
            <Text style={styles.notificationText}>
              New App update is available
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <FontAwesome name="trash-o" size={15} color="red" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.notification}>
          <View>
            <Text style={styles.notificationText}>
              New App update is available
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <FontAwesome name="trash-o" size={15} color="red" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.notification}>
          <View>
            <Text style={styles.notificationText}>
              New App update is available
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <FontAwesome name="trash-o" size={15} color="red" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.notification}>
          <View>
            <Text style={styles.notificationText}>
              New App update is available
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <FontAwesome name="trash-o" size={15} color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Notification;
