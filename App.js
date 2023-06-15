import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";

import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import { Entypo, AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";
import { scale, verticalScale } from "react-native-size-matters";

import Background from "./src/components/Background";
import SearchBar from "./src/components/SearchBar";
import Icon from "./src/components/Icon";
import {
  Provider,
  Context as WeatherContext,
} from "./src/context/WeatherContext";

Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
};

const Vatavaran = () => {
  // const API_KEY = "f98bcb294244678f3748deb6f9bd951d";
  // const API_KEY = "667833dedd7c38659a53be1ab5dcf93b";
  // const API_KEY = "a9f648abefea53e223d31f6f5170121e";   Don't Use this key
  const API_KEY = "6800e2ae4361a025446d893a00235885";

  const [city, setCity] = useState("");
  const [permission, setPermission] = useState(false);

  //sending request to access the location
  const requestPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setPermission(false);
    } else {
      setPermission(true);
    }
  };

  //importing information from WeatherContext
  const {
    state: { result, main, clouds, weather, loaded, wind },
    getDataByCity,
    getDataByLocation,
  } = useContext(WeatherContext);

  //Getting Location and using to getDataByLocation
  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync({});
    getDataByLocation(location.coords.latitude, location.coords.longitude);
    setCity("");
  };

  const fetchdata = async () => {
    await requestPermission();
    getLocation();
  };

  //useEffect for first render only
  useEffect(() => {
    fetchdata();
  }, []);

  if (loaded && permission) {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Background icon={weather.icon}>
            <StatusBar style="light" />
            <SearchBar
              city={city}
              onChangeCity={(value) => setCity(value)}
              onSubmitCity={() => {
                getDataByCity(city);
                setCity("");
              }}
              onSubmitLocation={() => {
                getLocation();
              }}
            />
            <Text style={styles.name}>{result.name}</Text>

            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-around",
                alignItems: "center",
                alignSelf: "stretch",
                marginHorizontal: scale(50),
                padding: scale(20),
              }}
            >
              <Icon icon={weather.icon} />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.temp}>{Math.round(main.temp)}°C</Text>
                <Text style={styles.head2}>{weather.description}</Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: Constants.statusBarHeight,
                marginBottom: Constants.statusBarHeight * 2,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: verticalScale(5),
                }}
              >
                <View style={styles.infocontainer}>
                  <View style={styles.infoheadcontainer}>
                    <Entypo name="drop" size={scale(22)} color="white" />
                    <Text style={styles.infohead}>Humidity</Text>
                  </View>
                  <Text style={styles.head2}>{main.humidity} %</Text>
                </View>
                <View style={styles.infocontainer}>
                  <View style={styles.infoheadcontainer}>
                    <FontAwesome5
                      name="cloudscale"
                      size={scale(22)}
                      color="white"
                    />
                    <Text style={styles.infohead}>Pressure</Text>
                  </View>
                  <Text style={styles.head2}>{main.pressure} hPa</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: verticalScale(5),
                }}
              >
                <View style={styles.infocontainer}>
                  <View style={styles.infoheadcontainer}>
                    <Entypo name="eye" size={scale(22)} color="white" />
                    <Text style={styles.infohead}>Visibility</Text>
                  </View>
                  <Text style={styles.head2}>{result.visibility} m</Text>
                </View>
                <View style={styles.infocontainer}>
                  <View style={styles.infoheadcontainer}>
                    <AntDesign name="cloud" size={scale(22)} color="white" />
                    <Text style={styles.infohead}>Cloud</Text>
                  </View>
                  <Text style={styles.head2}>{clouds.all} %</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: verticalScale(5),
                }}
              >
                <View style={styles.infocontainer}>
                  <View style={styles.infoheadcontainer}>
                    <Feather name="wind" size={scale(22)} color="white" />
                    <Text style={styles.infohead}>Wind Speed</Text>
                  </View>
                  <Text style={styles.head2}>{wind.speed} m/s</Text>
                </View>
                <View style={styles.infocontainer}>
                  <View style={styles.infoheadcontainer}>
                    <Entypo name="direction" size={scale(22)} color="white" />
                    <Text style={styles.infohead}>Wind Direction</Text>
                  </View>
                  <Text style={styles.head2}>{wind.deg}°</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: verticalScale(5),
                }}
              >
                <View style={styles.infocontainer}>
                  <View style={styles.infoheadcontainer}>
                    <FontAwesome5
                      name="temperature-high"
                      size={scale(22)}
                      color="white"
                    />
                    <Text style={styles.infohead}>Maximum</Text>
                  </View>
                  <Text style={styles.head2}>
                    {Math.round(main.temp_max + 1)}°C
                  </Text>
                </View>
                <View style={styles.infocontainer}>
                  <View style={styles.infoheadcontainer}>
                    <FontAwesome5
                      name="temperature-low"
                      size={scale(22)}
                      color="white"
                    />

                    <Text style={styles.infohead}>Minimum</Text>
                  </View>
                  <Text style={styles.head2}>
                    {Math.floor(main.temp_min)}°C
                  </Text>
                </View>
              </View>
            </View>
          </Background>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else if (!loaded && permission) {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Background icon={weather.icon}>
            <StatusBar style="light" />
            <SearchBar
              city={city}
              onChangeCity={(value) => setCity(value)}
              onSubmitCity={() => {
                getDataByCity(city);
                setCity("");
              }}
              onSubmitLocation={() => getLocation()}
            />
            <View
              style={{
                marginTop: Dimensions.get("screen").height * 0.3,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffff50",
                  alignSelf: "center",
                  fontSize: scale(20),
                }}
              >
                City not Found!
              </Text>
            </View>
          </Background>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else if (loaded && !permission) {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Background icon={weather.icon}>
            <StatusBar style="light" />
            <SearchBar
              city={city}
              onChangeCity={(value) => setCity(value)}
              onSubmitCity={() => {
                getDataByCity(city);
                setCity("");
              }}
              onSubmitLocation={() => getLocation()}
            />
            <View
              style={{
                marginTop: Dimensions.get("screen").height * 0.3,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffff50",
                  alignSelf: "center",
                  fontSize: scale(20),
                }}
              >
                Location Access Denied!
              </Text>
            </View>
          </Background>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Background icon={weather.icon}>
            <StatusBar style="light" />
            <SearchBar
              city={city}
              onChangeCity={(value) => setCity(value)}
              onSubmitCity={() => {
                getDataByCity(city);
                setCity("");
              }}
              onSubmitLocation={() => getLocation()}
            />
            <View
              style={{
                marginTop: Dimensions.get("screen").height * 0.3,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffff50",
                  alignSelf: "center",
                  fontSize: scale(20),
                }}
              >
                Something went wrong!
              </Text>
            </View>
          </Background>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    alignItems: "center",
    paddingTop: Constants.statusBarHeight * 2,
  },
  name: {
    color: "white",
    fontSize: scale(45),
    marginTop: verticalScale(10),
  },
  temp: {
    color: "white",
    fontSize: scale(45),
  },
  head2: {
    color: "white",
    paddingTop: verticalScale(2),
    fontSize: scale(17),
  },
  infohead: {
    color: "white",
    fontSize: scale(17),
    marginLeft: scale(3),
  },
  infocontainer: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    marginHorizontal: scale(5),
    padding: scale(10),
    borderRadius: scale(15),
    borderColor: "white",
    borderWidth: scale(1),
  },
  infoheadcontainer: {
    flexDirection: "row",
    marginBottom: scale(5),
  },
});

const App = () => {
  return (
    <Provider>
      <Vatavaran />
    </Provider>
  );
};

export default App;
