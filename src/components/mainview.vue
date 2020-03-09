<template>
  <div>
    <div class="wrap">
      <left1 class="left1"></left1>
      <router-view class="mainall"></router-view>
    </div>
  </div>
</template>
    <script>
import left1 from "./left1";
export default {
  name: "mainview",
  components: {
    left1: left1
  }
};
</script>