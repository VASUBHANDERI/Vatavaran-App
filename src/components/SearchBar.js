import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { scale, verticalScale } from "react-native-size-matters";

TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: false,
};

const SearchBar = ({ city, onSubmitCity, onChangeCity, onSubmitLocation }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.input}>
        <TouchableOpacity onPress={onSubmitCity}>
          <EvilIcons
            name="search"
            size={scale(24)}
            color="white"
            style={{ paddingRight: scale(5) }}
          />
        </TouchableOpacity>

        <TextInput
          value={city}
          placeholder="Enter city name"
          onChangeText={onChangeCity}
          style={{
            flex: 1,
            color: "white",
            allowFontScaling: false,
          }}
          onEndEditing={onSubmitCity}
          placeholderTextColor="#ffffff95"
        />
      </View>
      <TouchableOpacity onPress={onSubmitLocation}>
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-pin" size={scale(24)} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    borderWidth: scale(2),
    borderColor: "white",
    borderRadius: scale(20),
    width: Dimensions.get("screen").width * 0.9,
    paddingLeft: scale(5),
    paddingVertical: verticalScale(5),
    marginLeft: scale(10),
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  locationContainer: {
    borderColor: "white",
    borderWidth: scale(2),
    justifyContent: "center",
    marginHorizontal: scale(5),
    padding: scale(5),
    borderRadius: scale(20),
    height: verticalScale(40),
    width: scale(40),
    alignItems: "center",
  },
});
