<template>
  <div class="hour_weather_wrapper">
    <h1>{{ time }}</h1>
    <h2>{{ temperature }}</h2>
  </div>
</template>

<script>
export default {
  name: "HourWeather",
  props: {
    time: String,
    temperature: String,
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
}
@media (max-width: 425px) {
  .hour_weather_wrapper {
    background-color: #fff;
  }
}
</style>