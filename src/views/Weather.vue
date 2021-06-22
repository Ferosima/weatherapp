
<template>
  <div class="weather_wrapper">
    <div class="current_weather">
      <Header v-bind:city="weather.name" v-bind:date="weather.dt" />
      <div class="container">
        <div class="row">
          <h1>{{ ceilTemp(weather.main) }}°</h1>
          <div class="column">
            <h2>{{ unixToTime(weather.dt) }}</h2>
            <h3>{{ unixToDay(weather.dt) }}</h3>
            <h2>{{ getWeather(weather.weather) }}</h2>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div class="times_weather">
        <HourWeather
          v-for="(item, index) in times"
          :time="item.time"
          :temperature="item.temperature"
          :key="index"
        />
      </div>
    </div>
    <div class="week_weather">
      <DayWeather
        v-for="(item, index) in days"
        :day="item.day"
        :temperature="item.temperature"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import DayWeather from "@/components/DayWeather.vue";
import HourWeather from "@/components/HourWeather.vue";
import Header from "@/components/Header.vue";
import moment from "moment";

export default {
  name: "Home",
  data() {
    return {
      days: [
        { day: "Monday", temperature: "29°" },
        { day: "Tueday", temperature: "31°" },
        { day: "Wednesday", temperature: "25°" },
        { day: "Thuesday", temperature: "28°" },
        { day: "Friday", temperature: "32°" },
        { day: "Saturday", temperature: "35°" },
        { day: "Sunday", temperature: "31°" },
      ],
      times: [
        { time: "11:00", temperature: "29°" },
        { time: "12:00", temperature: "31°" },
        { time: "13:00", temperature: "25°" },
        { time: "14:00", temperature: "28°" },
        { time: "15:00", temperature: "32°" },
        { time: "16:00", temperature: "35°" },
        { time: "17:00", temperature: "31°" },
      ],
    };
  },

  computed: {
    weather() {
      console.log("LOG Weather", this.$store.state.weather);
      return this.$store.state.weather;
    },

    city() {
      return this.$store.state.city;
    },
  },
  mounted() {
    this.$store.dispatch("fetchWeather");
  },
  components: {
    DayWeather,
    HourWeather,
    Header,
  },
  methods: {
    unixToTime(unix) {
      return moment.unix(unix).format("HH:mm");
    },
    unixToDay(unix) {
      return unix ? moment.unix(unix).format("dddd") : "Loading";
    },
    ceilTemp(main) {
      return main ? Math.ceil(main.temp) : 0;
    },
    getWeather(weather) {
      return weather ? weather[0].main : "Loading";
    },
  },
};
</script>

<style lang="less">
.weather_wrapper {
  display: flex;
  flex-direction: row;
  background-color: #fbf8f9;
  height: 100%;

  .current_weather {
    display: flex;
    flex-direction: column;
    flex: 4;
    padding: 30px;
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
    }
    .times_weather {
      display: flex;
      flex-direction: row;
      align-items: center;
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
  .week_weather {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-content: center;
    justify-content: center;
    background-color: #fff;
    padding: 30px;
  }
}
@media (max-width: 425px) {
  .weather_wrapper {
    flex-direction: column;
    .current_weather {
      padding: 15px 0 30px;
      .container {
        justify-content: center;
        h1 {
          font-size: 90px;
        }
      }
      .times_weather {
        margin-left: 15px;
        overflow: scroll;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
      .row {
        overflow: scroll;
      }
    }
  }
  .week_weather {
    border-radius: 5%;
  }
}
</style>
