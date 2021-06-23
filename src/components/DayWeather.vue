<template>
  <div class="day_weather_wrapper">
    <h1>{{ unixToDay(day) }}</h1>
    <div class="weather_container">
      <img :src="weather" alt="W3Schools.com" />
      <h2>{{ ceilTemp(temperature) }}°</h2>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "DayWeather",
  props: {
    day: String,
    weather: String,
    temperature: String,
  },
  methods: {
    unixToDay(unix) {
      return moment.unix(unix).format("dddd");
    },
    ceilTemp(float) {
      return Math.ceil(float);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.day_weather_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 15px 10px;
  border: 10px;
  color: #000;
}
.weather_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
    width: 50%;
}
h1 {
  font-size: 18px;
  width: 50%;
  padding-right: inherit;
}
img {
  // width:30%;
}
h2 {
  font-size: 18px;
  font-weight: bold;
}
</style>