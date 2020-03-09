<template>
  <div class="container1">
    <div class="titlediv">
      <div class="link">
        <router-link to="/login" style="text-decoration:none" active-class="myactive">登录</router-link>
        <router-link to="/register" style="text-decoration:none " active-class="myactive">注册</router-link>
      </div>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>


