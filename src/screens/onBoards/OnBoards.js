import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { MaterialIcons } from "@expo/vector-icons";
import { slider } from "./Slider";
import { useEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

const OnBoards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  const sliderRef = useRef(null);
  const [fontsLoaded] = useFonts({
    "IbarraRealNova-Regular": require("../../assets/fonts/IbarraRealNova-Regular.ttf"),
    "Petrona-Regular": require("../../assets/fonts/Petrona-Regular.ttf"),
  });

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

  const handleNext = (title) => (
    <View style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );

  const handleSkip = (title) => (
    <View style={styles.skipContainer}>
      <Text style={styles.skipText}>{title}</Text>
    </View>
  );

  const handleBack = () => {
    if (sliderRef.current && activeIndex > 0) {
      sliderRef.current.goToSlide(activeIndex - 1);
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleGetStart = (title) => (
    <View style={styles.button}>
      <Text onPress={() => navigation.navigate('Login')} style={styles.text}>{title}</Text>
    </View>
  );

  const formatFirstLetter = (text) => (
    <Text style={styles.firstLetter}>{text.charAt(0)}</Text>
  );

  return (
    <View style={styles.container}>
      <AppIntroSlider
        ref={sliderRef}
        data={slider}
        renderItem={({ item }) => (
          <View style={styles.slideContainer}>
            {item.subTitle && <Text style={styles.subTitle}>{item.subTitle}</Text>}
            {!item.title1 ? (
              <View style={styles.titleContainer}>
                <MaterialIcons
                  name="arrow-back"
                  size={35}
                  style={styles.arrowIcon}
                  onPress={handleBack}
                />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            ) : (
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title1}</Text>
              </View>
            )}
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
            <View>
              <Text style={styles.description}>
                {formatFirstLetter(item.description)}
                {item.description.slice(1)}
              </Text>
            </View>
          </View>
        )}
        activeDotStyle={{
          backgroundColor: "#8A2BE2",
          width: 30,
          borderRadius: 50,
        }}
        showSkipButton
        renderNextButton={() => handleNext("Next")}
        renderSkipButton={() => handleSkip("Skip")}
        renderDoneButton={() => handleGetStart("Get Start")}
        onSlideChange={(index) => setActiveIndex(index)}
      />

      {/* ... (commented out code) */}
      <StatusBar style="auto" />
    </View>
  );
};

export default OnBoards;