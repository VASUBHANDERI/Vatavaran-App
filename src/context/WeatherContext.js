import createDataContext from "./createDataContext";
import axios from "axios";


const API_KEY = "6800e2ae4361a025446d893a00235885";
const WeatherReducer = (state, action) => {
  switch (action.type) {
    case "set_Data":
      return {
        result: action.payload,
        wind: action.payload.wind,
        weather: action.payload.weather[0],
        clouds: action.payload.clouds,
        main: action.payload.main,
        loaded: true,
      };
    case "set_Error":
      return { ...state, loaded: action.payload };
    default:
      return state;
  }
};

const getDataByCity = (dispatch) => {
  return async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      await dispatch({ type: "set_Data", payload: response.data });

    } catch (e) {
      console.error(e);
      dispatch({ type: "set_Error", payload: false });
    }
  };
};

const getDataByLocation = (dispatch) => {
  return async (lat, lon) => {
    // const [lat, lon] = useLocation();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      // console.log(response.data);
      await dispatch({ type: "set_Data", payload: response.data });

    } catch (e) {
      console.error(e);
      dispatch({ type: "set_Error", payload: false });
    }
  };
};

export const { Context, Provider } = createDataContext(
  WeatherReducer,
  { getDataByCity, getDataByLocation },
  { loaded: true, result: {}, main: {}, clouds: {}, weather: {}, wind: {} }
);
