<template>
  <div class="login">
    <p class="text-center">登录页面</p>
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
            autocomplete="off"
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
            autocomplete="off"
          />
        </div>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-default" @click="login">提交</button>
        <button type="reset" class="btn btn-default">重置</button>
      </div>
    </form>
  </div>
</template>
    <script>
import { log } from "util";
export default {
  name: "login",
  data() {
    return {
      stuId: "",
      password: ""
    };
  },
  methods: {
    //登录
    login() {
      this.$http
        .post("http://localhost:8081/Vbook/login", {
          stuId: this.stuId,
          userPassword: this.password
        })
        .then(
          response => {
            if (response.data.msg == "real") {
              alert("存在超期未还书籍，请及时归还!");
            }
            this.$router.push({ path: "/mainview/main0" });
          },
          error => {
            alert(error.response.data.message);
          }
        );
    }
  }
};
</script>
