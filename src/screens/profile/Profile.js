import { AntDesign, Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, ViewBase } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileDetailes}>
      <View style={styles.language}>
          <View style={styles.icon}>
            <Text style={{color:'#8A2BE2'}}>அ</Text>
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
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 20,
  },
  profileDetailes: {
   
  },
  language: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical:10,
    width:315,
    height:50,
    borderRadius:11,
    borderColor:'#E6E6FA',
    borderWidth:2,
    textAlign:'center',
  },
  mainText:{
    fontFamily:'Petrona-Regular',
    fontSize:14,
  },
  secondText:{
    fontFamily:'Petrona-Regular',
    fontSize:14,
    color:'rgba(0, 0, 0, 0.56)'
  },
  textIcon:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
  },
  icon:{
    backgroundColor:'#E6E6FA',
    width:30,
    height:25.862,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    textAlign:'center',
  }
});
export default Profile;
