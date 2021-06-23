<template>
  <div v-if="weather" class="weather_wrapper">
    <div class="current_weather">
      <Header
        v-bind:city="city"
        v-bind:date="weather.location.localtime_epoch"
      />
      <CurrentWeather
        v-bind:temp="weather.current.temp_c"
        v-bind:date="weather.location.localtime_epoch"
        v-bind:weather="weather.current.condition.text"
        v-bind:icon="weather.current.condition.icon"
      />
      <div class="times_weather">
        <HourWeather
          v-for="(item, index) in filterHours(
            weather.forecast.forecastday[0].hour
          )"
          :time="item.time_epoch"
          :temperature="item.temp_c"
          :weather="item.condition.icon"
          :key="index"
        />
      </div>
    </div>
    <div class="week_weather">
      <DayWeather
        v-for="(item, index) in weather.forecast.forecastday"
        :day="item.date_epoch"
        :temperature="item.day.avgtemp_c"
        :weather="item.day.condition.icon"
        :key="index"
      />
    </div>
  </div>
  <div v-else class="loader">
    <h1>Loading</h1>
  </div>
</template>

<script>
import moment from "moment";
import DayWeather from "@/components/DayWeather.vue";
import CurrentWeather from "@/components/CurrentWeather.vue";
import HourWeather from "@/components/HourWeather.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
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
    this.$store.dispatch("fetchWeather", "Kherson");
  },
  methods: {
    filterHours(hours) {
      return hours.filter(
        (el) => moment.unix(el.time_epoch).format("HH") >= moment().format("HH")
      );
    },
  },
  components: {
    DayWeather,
    CurrentWeather,
    HourWeather,
    Header,
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
    overflow: hidden;
    padding: 30px;
    .times_weather {
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow-x: scroll;
      ovetflow-y: auto;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }
    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
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
@media (max-width: 680px) {
  .weather_wrapper {
    flex-direction: column;
    .current_weather {
      overflow: visible;
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
      ::-webkit-scrollbar {
        display: none;
      }
      ::-webkit-scrollbar-thumb {
        background: transparent;
      }
      .row {
        overflow: scroll;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
      .column {
        // align-items: center;
      }
    }
  }
  .week_weather {
    border-radius: 5%;
  }
}
@media (max-width: 320px) {
  .weather_wrapper {
    .current_weather {
      .column {
        align-items: center;
      }
    }
  }
}
.loader {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
