import { createStore } from "vuex";
import axios from "axios";

const api_key = "d9e4b0e01942497d9c6121005211806";

axios.defaults.baseURL = "";

const state = {
  weather: null,
  pending: false,
};

const getters = {
};

const actions = {
  fetchWeather({ commit }, city) {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=7&aqi=no&alerts=no`
      )
      .then((response) => {
        commit("FETCH_WEATHER", response.data);
      });
  },
};

const mutations = {
  FETCH_WEATHER(state, weather) {
    state.weather = weather;
    state.city = weather.location.name;
  },
};

export default createStore({
  state,
  getters,
  actions,
  mutations,
});
