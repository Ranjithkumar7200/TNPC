import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";


const Login = () => {
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [fontsLoaded] = useFonts({
    "Petrona-Bold": require("../../assets/fonts/Petrona-Bold.ttf"),
    "Petrona-Regular": require("../../assets/fonts/Petrona-Regular.ttf"),
    "Petrona-Medium": require("../../assets/fonts/Petrona-Medium.ttf"),
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
        <Text style={styles.header}>Login</Text>
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
          <View style={styles.forget}>
            <TouchableOpacity>
              <Text style={styles.forgetText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.registerText}>
          Don’t have an account?
          <Text onPress={()=>navigation.navigate('Register')} style={{ color: "#8A2BE2" }}> Register here</Text>
        </Text>
      </View>
    </View>
  );
};


export default Login;
