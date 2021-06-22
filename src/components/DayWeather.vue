<template>
  <div class="day_weather_wrapper">
    <h1>{{ day }}</h1>
    <h2>{{ temperature }}</h2>
  </div>
</template>

<script>
export default {
  name: "DayWeather",
  props: {
    day: String,
    temperature: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.day_weather_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  border: 10px;
  color: #000;
}
h1 {
  font-size: 18px;
}
h2 {
  font-size: 18px;
}
</style>