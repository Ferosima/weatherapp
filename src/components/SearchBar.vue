<template>
  <div class="searchbar_wrapper">
    <input type="text" placeholder="Search.." />
    <input type="button" value="Button" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    date: String,
    city: String,
  },
};
</script>

<style scoped lang="less">
.searchbar_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  color: #000;
  border: 1px solid #dad6d4;
  border-radius: 5px;
  input {
    background-color: transparent;
    border: none;
  }
  input:focus {
    outline: none;
  }
  input[type="button"] {
    height: 100%;
  }
}
</style>