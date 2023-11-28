import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import {Text, TouchableOpacity, View } from "react-native";
import ProfilePhoto from "../../components/EditProfile";
import { styles } from "./styles";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View>
          <ProfilePhoto source={require("../../assets/images/onBoard1.png")} />
        </View>
        <View>
          <Text style={styles.mainText}>Richard</Text>
        </View>
        <View style={styles.contact}>
          <View>
            <Text style={styles.contactText}>richard@gmail.com</Text>
          </View>
          <View>
            <Text style={styles.contactText}>|</Text>
          </View>
          <View>
            <Text style={styles.contactText}>123-456-7890</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileDetailes}>
        <TouchableOpacity>
          <View style={styles.language}>
            <View style={styles.icon}>
              <Text style={{ color: "#8A2BE2" }}>அ</Text>
            </View>
            <View>
              <Text style={styles.mainText}>Language</Text>
            </View>
            <View style={styles.textIcon}>
              <Text style={styles.secondText}>Tamil</Text>
              <View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.language}>
            <View style={styles.icon}>
              <Feather name="settings" size={18} color="#8A2BE2" />
            </View>
            <View>
              <Text style={styles.mainText}>Theme</Text>
            </View>
            <View style={styles.textIcon}>
              <Text style={styles.secondText}>Light</Text>
              <View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.language}>
            <View style={styles.icon}>
              <FontAwesome name="rupee" size={18} color="#8A2BE2" />
            </View>
            <View>
              <Text style={styles.mainText}>Withdraw</Text>
            </View>
            <View style={styles.textIcon}>
              <View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.language}>
            <View style={styles.icon}>
              <AntDesign name="customerservice" size={18} color="#8A2BE2" />
            </View>
            <View>
              <Text style={styles.mainText}>Contact US</Text>
            </View>
            <View style={styles.textIcon}>
              <View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.rateShare}>
          <TouchableOpacity>
            <View style={styles.share}>
              <View style={styles.icon}>
                <MaterialIcons name="star-border" size={18} color="#8A2BE2" />
              </View>
              <View>
                <Text style={styles.mainText}>Rate us</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.share}>
              <View style={styles.icon}>
                <Ionicons
                  name="md-share-social-outline"
                  size={18}
                  color="#8A2BE2"
                />
              </View>
              <View>
                <Text style={styles.mainText}>Share</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
