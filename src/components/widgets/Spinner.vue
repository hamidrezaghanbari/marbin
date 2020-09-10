<template>
  <div id="spinner_back">
    <div id="spinner_div">
      <p style="text-align: center;margin-top: 30px;font-weight: bold">Marbin</p>
      <spring-spinner id="spinner" :animation-duration="3000" :size="60" color="black" />
    </div>
  </div>
</template>

<script>
import { SpringSpinner } from "epic-spinners";

export default {
  name: "Spinner",
  components: {
    "spring-spinner": SpringSpinner,
  },
};
</script>

<style scoped>
#spinner_back {
  z-index: 2;
  height: 1500px;
  width: 100%;
  background-color: rgba(100, 100, 100, 0.8);
  position: absolute;
}
#spinner_div {
  height: 180px;
  width: 16%;
  z-index: 3;
  background-color: white;
  position: fixed;
  top: 38%;
  left: 42%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#spinner {
  padding-top: 5%;
  padding-left: 37%;
}
@media only screen and (max-width: 1000px) {
  #spinner {
    padding-left: 30%;
  }
}
@media only screen and (max-width: 750px) {
  #spinner_div {
    width: 25%;
  }
}
@media only screen and (max-width: 500px) {
  #spinner {
    padding-left: 25%;
  }
}
</style>

