<template>
  <div class="container">
    <div class="row">
      <img :src="icon" alt="W3Schools.com" />
      <h1>{{ ceilTemp(temp) }}°</h1>
      <div class="column">
        <h2>{{ unixToTime(date) }}</h2>
        <h3>{{ unixToDay(date) }}</h3>
        <h2>{{ weather }}</h2>
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "CurrentWeather",
  props: {
    temp: String,
    date: String,
    weather: String,
    icon: String,
  },
  methods: {
    unixToTime(unix) {
      return moment.unix(unix).format("HH:mm");
    },
    unixToDay(unix) {
      return moment.unix(unix).format("dddd");
    },
    ceilTemp(float) {
      return Math.ceil(float);
    },
  },
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 50px 0;
  align-items: center;
  justify-content: space-around;
  color: #000;
  h1 {
    font-size: 100px;
  }
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 36px;
    font-weight: bolder;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
}
</style>