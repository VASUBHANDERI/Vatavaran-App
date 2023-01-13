import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

const SearchBar = ({ city, onSubmitCity, onChangeCity, onSubmitLocation }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.input}>
        <TouchableOpacity onPress={onSubmitCity}>
          <EvilIcons
            name="search"
            size={24}
            color="white"
            style={{ paddingRight: 5 }}
          />
        </TouchableOpacity>

        <TextInput
          value={city}
          placeholder="Enter city name"
          onChangeText={onChangeCity}
          style={{
            flex: 1,
            color: "white",
          }}
          onEndEditing={onSubmitCity}
          placeholderTextColor="#ffffff95"
        />
      </View>
      <TouchableOpacity onPress={onSubmitLocation}>
        <View style={styles.locationContainer}>
          <MaterialIcons
            name="location-pin"
            size={24}
            color="white"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    width: Dimensions.get("screen").width * 0.9,
    paddingLeft: 5,
    paddingVertical: 5,
    marginLeft: 10,
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  locationContainer: {
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems: "center",
  },
});
