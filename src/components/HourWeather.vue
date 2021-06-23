<template>
  <div class="hour_weather_wrapper">
    <h1>{{ unixToTime(time) }}</h1>
    <img :src="weather" alt="W3Schools.com" />
    <h2>{{ ceilTemp(temperature) }}°</h2>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "HourWeather",
  props: {
    time: String,
    temperature: String,
    weather: String,
  },
  methods: {
    unixToTime(unix) {
      return moment.unix(unix).format("HH:mm");
    },
    ceilTemp(float) {
      return Math.ceil(float);
    },
  },
};
</script>

<style scoped lang="less">
.hour_weather_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border: 10px;
  color: #000;
}
h1 {
  font-size: 18px;
  padding-bottom: 10px;
}
h2 {
  font-size: 18px;
  font-weight: bold;
}
img{
      width: 40px;
}
@media (max-width: 680px) {
  .hour_weather_wrapper {
    background-color: #fff;
  }
}
</style>