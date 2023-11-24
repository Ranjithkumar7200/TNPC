import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from '@react-navigation/native';


const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Petrona-Bold": require("../../assets/fonts/Petrona-Bold.ttf"),
    "Petrona-Regular": require("../../assets/fonts/Petrona-Regular.ttf"),
    "Petrona-Medium": require("../../assets/fonts/Petrona-Medium.ttf"),
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Register</Text>
      </View>
      <View style={styles.form}>
        <View>
          <View style={styles.formGroup}>
            <Text style={styles.labelText}>Email/Mobile no.</Text>
          </View>
          <View style={styles.labelInput}>
            <TextInput style={styles.input} cursorColor={"#8A2BE2"} />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.labelText}>Password</Text>
          </View>
          <View style={styles.labelInput}>
            <TextInput
              secureTextEntry={!showPassword}
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              cursorColor={"#8A2BE2"}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <View style={styles.toggleButton}>
                <Text>
                  {!showPassword ? (
                    <MaterialIcons
                      size={13}
                      color={"#8A2BE2"}
                      name="visibility"
                    />
                  ) : (
                    <MaterialIcons
                      color={"#8A2BE2"}
                      size={13}
                      name="visibility-off"
                    />
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.labelText}>Confirm Password</Text>
          </View>
          <View style={styles.labelInput}>
            <TextInput
              secureTextEntry={!showConfirmPassword}
              style={styles.input}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              cursorColor={"#8A2BE2"}
            />
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
              <View style={styles.toggleButton}>
                <Text>
                  {!showConfirmPassword ? (
                    <MaterialIcons
                      size={13}
                      color={"#8A2BE2"}
                      name="visibility"
                    />
                  ) : (
                    <MaterialIcons
                      color={"#8A2BE2"}
                      size={13}
                      name="visibility-off"
                    />
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.registerText}>
        Already have an account?
          <Text onPress={()=>navigation.navigate('Login')} style={{ color: "#8A2BE2" }}> Go to Login</Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 11,
    borderWidth: 2, // Stroke (border)
    borderColor: "#E6E6FA", // Stroke color
    backgroundColor: "#FFFFFF", // Fill color
    padding: 16,
  },
  input: {
    width: 264,
    height: 35,
    paddingHorizontal: 15,
    backgroundColor: "#E6E6FA",
    borderRadius: 6,
  },
  labelInput: {
    alignItems: "center",
  },
  formGroup: {
    margin: 10,
  },
  labelText: {
    alignItems: "center",
    fontFamily: "Petrona-Regular",
    fontSize: 12,
  },
  button: {
    width: 264,
    height: 35,
    backgroundColor: "#8A2BE2",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: 10,
  },
  buttonLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Petrona-Medium",
  },
  headerContainer: {
    marginVertical: 20,
  },
  header: {
    fontSize: 26,
    fontFamily: "Petrona-Bold",
    color: "#000000",
  },
  registerText: {
    fontFamily: "Petrona-Regular",
    fontSize: 12,
    marginVertical: 10,
  },
  toggleButton: {
    position: "relative",
    bottom: 24,
    left: 100,
  },
});

export default Register;
