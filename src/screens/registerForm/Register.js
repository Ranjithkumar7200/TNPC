import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Formik } from "formik";
import { RegisterSchema } from "./RegisterSchema";

const Register = () => {
  const [email, setEmail] = useState("");
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

  const handleRegister = () => {
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={RegisterSchema}
      onSubmit={handleRegister}
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
            <Text style={styles.header}>Register</Text>
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
                  <Text numberOfLines={2} ellipsizeMode="middle" style={styles.Passwordvalidation}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <View style={styles.formGroup}>
                <View>
                  <Text style={styles.labelText}>Confirm Password</Text>
                </View>
                <View style={styles.labelInput}>
                  <TextInput
                    secureTextEntry={!showConfirmPassword}
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={(text) => {
                      handleChange("confirmPassword")(text);
                      setConfirmPassword(text);
                    }}
                    onBlur={handleBlur("confirmPassword")}
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
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.Passwordvalidation}>
                    {errors.confirmPassword}
                  </Text>
                )}
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={
                  email === "" ||
                  password === "" ||
                  confirmPassword===""||
                  (touched.email && errors.email) ||
                  (touched.password && errors.password)||
                  (touched.confirmPassword && errors.confirmPassword)
                    ? handleSubmit
                    : handleRegister
                }>
                <Text style={styles.buttonLabel}>Create an account</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.orText}>or</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.googleContainer}>
              <View style={styles.googleImage}>
                <Image source={require("../../assets/images/google.png")} />
              </View>
              <Text style={styles.googleText}>Register with Google</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.loginText}>
              Already have an account?
              <Text
                onPress={() => navigation.navigate("Login")}
                style={{ color: "#8A2BE2" }}
              >
                {" "}
                Go to Login
              </Text>
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Register;
