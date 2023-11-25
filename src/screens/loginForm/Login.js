import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { LoginSchema } from "./LoginSchema";
import { Formik } from "formik";

const Login = () => {
  const [email, setEmail] = useState("");
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

  const handleLogin = () => {
    console.log(email);
    console.log(password);
    navigation.navigate('BottomTabs')
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Login</Text>
          </View>
          <View style={styles.form}>
            <View>
              <View style={styles.formGroup}>
                <View>
                  <Text style={styles.labelText}>Email/Mobile no.</Text>
                </View>
                <View style={styles.labelInput}>
                  <TextInput
                    style={styles.input}
                    cursorColor={"#8A2BE2"}
                    onChangeText={(text) => {
                      handleChange("email")(text);
                      setEmail(text);
                    }}
                    onBlur={handleBlur("email")}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.emailValidation}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.formGroup}>
                <View>
                  <Text style={styles.labelText}>Password</Text>
                </View>
                <View style={styles.labelInput}>
                  <TextInput
                    secureTextEntry={!showPassword}
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => {
                      handleChange("password")(text);
                      setPassword(text);
                    }}
                    onBlur={handleBlur("password")}
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
                {touched.password && errors.password && (
                  <Text style={styles.Passwordvalidation}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <View style={styles.forget}>
                <TouchableOpacity>
                  <Text style={styles.forgetText}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={
                  email === "" ||
                  password === "" ||
                  (touched.email && errors.email) ||
                  (touched.password && errors.password)
                    ? handleSubmit
                    : handleLogin
                }
              >
                <Text style={styles.buttonLabel}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.registerText}>
              Don’t have an account?
              <Text
                onPress={() => navigation.navigate("Register")}
                style={{ color: "#8A2BE2" }}
              >
                {" "}
                Register here
              </Text>
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;
