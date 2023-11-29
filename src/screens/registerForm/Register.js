import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Formik } from "formik";
import { RegisterSchema } from "./RegisterSchema";
import { color } from "../../constants/Constants";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
                    cursorColor={color.primary}
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
                    cursorColor={color.primary}
                  />
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    <View style={styles.toggleButton}>
                      <Text>
                        {!showPassword ? (
                          <MaterialIcons
                            size={13}
                            color={color.primary}
                            name="visibility"
                          />
                        ) : (
                          <MaterialIcons
                            color={color.primary}
                            size={13}
                            name="visibility-off"
                          />
                        )}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="middle"
                    style={styles.Passwordvalidation}
                  >
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
                    cursorColor={color.primary}
                  />
                  <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                    <View style={styles.toggleButton}>
                      <Text>
                        {!showConfirmPassword ? (
                          <MaterialIcons
                            size={13}
                            color={color.primary}
                            name="visibility"
                          />
                        ) : (
                          <MaterialIcons
                            color={color.primary}
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
              <TouchableOpacity
                style={styles.button}
                onPress={
                  email === "" ||
                  password === "" ||
                  confirmPassword === "" ||
                  (touched.email && errors.email) ||
                  (touched.password && errors.password) ||
                  (touched.confirmPassword && errors.confirmPassword)
                    ? handleSubmit
                    : handleRegister
                }
              >
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
                style={{ color: color.primary }}
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
