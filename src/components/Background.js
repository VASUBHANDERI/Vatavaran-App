import {
  cloudy,
  sunny,
  thunderstrom,
  hazy,
  rainy,
  snow,
} from "../../assets/images/index";

import React from "react";
import Constants from "expo-constants";

import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  View,
} from "react-native";

const Background = ({ icon, children }) => {
  if (icon == "01d" || icon == "01n") {
    return (
      <ImageBackground style={styles.container} source={sunny}>
        {children}
      </ImageBackground>
    );
  } else if (
    icon == "02d" ||
    icon == "02n" ||
    icon == "03d" ||
    icon == "03n" ||
    icon == "04d" ||
    icon == "04n"
  ) {
    return (
      <ImageBackground style={styles.container} source={cloudy}>
        {children}
      </ImageBackground>
    );
  } else if (icon == "09d" || icon == "09n" || icon == "10d" || icon == "10n") {
    return (
      <ImageBackground style={styles.container} source={rainy}>
        {children}
      </ImageBackground>
    );
  } else if (icon == "11d" || icon == "11n") {
    return (
      <ImageBackground style={styles.container} source={thunderstrom}>
        {children}
      </ImageBackground>
    );
  } else if (icon == "13d" || icon == "13n") {
    return (
      <ImageBackground style={styles.container} source={snow}>
        {children}
      </ImageBackground>
    );
  } else if (icon == "50d" || icon == "50n") {
    return (
      <ImageBackground style={styles.container} source={hazy}>
        {children}
      </ImageBackground>
    );
  } else {
    return (
      <View
        style={{
          height: Dimensions.get("screen").height,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={70} color="#00C4CD" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    alignItems: "center",
    paddingTop: Constants.statusBarHeight * 2,
  },
});

export default Background;
