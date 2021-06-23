<template>
  <div class="header_wrapper">
    <h2>{{ unixToDate(date) }}</h2>
    <h1>{{ city }}</h1>
    <h2>{{ unixToTime(date) }}</h2>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Header",
  props: {
    date: String,
    city: String,
  },
  methods: {
    unixToDate(unix) {
      return moment.unix(unix).format("DD.MM.YYYY");
    },
    unixToTime(unix) {
      return moment.unix(unix).format("LT");
    },
  },
};
</script>

<style scoped lang="less">
.header_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  color: #000;
}
h1 {
  font-size: 24px;
}
h2 {
  font-size: 20px;
}
@media (max-width: 425px) {
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 14px;
  }
}
</style>