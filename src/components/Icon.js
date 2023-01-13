import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather, Ionicons,Fontisto } from "@expo/vector-icons";

const Icon = ({ icon }) => {
  if (icon == "01d") {
    return (
      <View>
        <Ionicons name="sunny" size={100} color="white" />
      </View>
    );
  } else if (icon == "01n") {
    return (
      <View>
        <MaterialCommunityIcons name="weather-night" size={100} color="white" />
      </View>
    );
  } else if (icon == "02d") {
    return (
      <View>
        <Ionicons name="partly-sunny-sharp" size={100} color="white" />
      </View>
    );
  } else if (icon == "02n") {
    return (
      <View>
        <Ionicons name="cloudy-night" size={100} color="white" />
      </View>
    );
  } else if (icon == "03d" || icon == "03n" || icon == "04d" || icon == "04n") {
    return (
      <View>
        <MaterialCommunityIcons
          name="weather-cloudy"
          size={100}
          color="white"
        />
      </View>
    );
  } else if (icon == "09d" || icon == "09n") {
    return (
      <View>
        <MaterialCommunityIcons
          name="weather-pouring"
          size={100}
          color="white"
        />
      </View>
    );
  } else if (icon == "10d" || icon == "10n") {
    return (
      <View>
        <MaterialCommunityIcons
          name="weather-rainy"
          size={100}
          color="white"
        />
      </View>
    );
  } else if (icon == "11d" || icon == "11n") {
    return (
      <View>
        <MaterialCommunityIcons
          name="weather-lightning"
          size={100}
          color="white"
        />
      </View>
    );
  } else if (icon == "13d" || icon == "13n") {
    return (
      <View>
        <MaterialCommunityIcons name="weather-snowy" size={100} color="white" />
      </View>
    );
  } else if (icon == "50d" || icon == "50n") {
    return (
      <View>
        <Fontisto name="day-haze" size={100} color="white" />
      </View>
    );
  }
};

export default Icon;
