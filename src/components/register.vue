<template>
  <div class="login">
    <p class="text-center">注册页面</p>
    <form id="myform">
      <div class="mainBodyLogin">
        <div class="input-group">
          <span class="input-group-addon">
            <span class="glyphicon glyphicon-user"></span>
          </span>
          <input
            type="text"
            class="form-control"
            style="width: 230px"
            v-model="stuId"
            placeholder="stuId"
          />
        </div>
        <div class="input-group">
          <span class="input-group-addon">
            <span class="glyphicon glyphicon-lock"></span>
          </span>
          <input
            type="password"
            class="form-control"
            style="width: 230px"
            v-model="password"
            placeholder="password"
          />
        </div>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-default" @click="register">提交</button>
        <button type="reset" class="btn btn-default">重置</button>
      </div>
    </form>
  </div>
</template>
    <script>
import { error, log } from "util";
export default {
  name: "register",
  data() {
    return {
      stuId: "",
      password: ""
    };
  },
  methods: {
    //注册
    register() {
      this.$http
        .post(
          "http://localhost:8081/Vbook/register",
          {
            stuId: this.stuId,
            userPassword: this.password
          },
          { headers: { "Content-Type": "application/json;charset=utf-8" } }
        )
        .then(
          response => {
            alert("注册成功");
            this.$router.push({ path: "/login" });
          },
          error => {
            alert(error.response.data.message);
          }
        );
    },
    //返回登录页面
    back() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>