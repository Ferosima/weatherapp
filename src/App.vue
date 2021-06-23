<template>
  <router-view />
</template>

<style lang="less">

html,
body,
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
}
h1,
h2,
h3 {
  font-weight: lighter;
  margin: 0;
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Roboto;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

#nav {
  display: flex;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Bold.ttf") format("truetype");
  font-weight: bold;
}
@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Black.ttf") format("truetype");
  font-weight: bolder;
}
@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Light.ttf") format("truetype");
  font-weight: lighter;
}
@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: normal;
}
</style>
