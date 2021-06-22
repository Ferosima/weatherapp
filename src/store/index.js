import { createStore } from "vuex";
import axios from "axios";

const api_key = "e8fcd2de9b1349c6681eac7be3a35743";

axios.defaults.baseURL = "";

const state = {
  weather: {},
  city: "Kiev",
  pending: false,
};

const getters = {
  panding: (state) => state.panding,
  weather: (state) => state.weather,
  city: (state) => state.city,
};

const actions = {
  fetchWeather({ commit }) {
    commit("LOADING_STATUS", true);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Kherson&units=metric&appid=${api_key}`
      )
      .then((response) => {
        commit("FETCH_WEATHER", response.data);
      });
  },
};

const mutations = {
  FETCH_WEATHER(state, weather) {
    state.weather = weather;
    console.log("WEATHER", weather);
  },
  LOADING_STATUS(state, status) {
    state.panding = status;
  },
};

export default createStore({
  state,
  getters,
  actions,
  mutations,
});
