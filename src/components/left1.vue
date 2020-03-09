<template>
  <div class="p-2 flex-fill">
    <div class="head1">
      <h1 class="headh">图书管理系统</h1>
      <button type="button" class="btn btn-default" @click="out">退出登录</button>
      <button type="button" class="btn btn-default" @click="updateStatistics">更新统计</button>
      <span style="font-size: 20px" v-cloak>欢迎:{{ userName }}</span>
    </div>
    <div class="panel panel-primary">
      <ul>
        <router-link to="/mainview/main0" style="text-decoration:none" active-class="myactive1">
          <li class="li1">公告</li>
        </router-link>
        <router-link to="/mainview/main1" style="text-decoration:none" active-class="myactive1">
          <li class="li1">借书</li>
        </router-link>
        <router-link to="/mainview/main2" style="text-decoration:none" active-class="myactive1">
          <li class="li1">还书</li>
        </router-link>
        <router-link to="/mainview/main3" style="text-decoration:none" active-class="myactive1">
          <li class="li1">统计/添加公告</li>
        </router-link>
        <router-link to="/mainview/main40" style="text-decoration:none" active-class="myactive1">
          <li class="li1">用户管理</li>
        </router-link>
        <router-link to="/mainview/main5" style="text-decoration:none" active-class="myactive1">
          <li class="li1">书籍管理</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
    <script>
export default {
  name: "left1",
  data() {
    return {
      userName: "userName"
    };
  },
  //打开页面时获取用户名
  mounted: function() {
    this.getName();
  },
  methods: {
    //退出登录
    out() {
      this.$http.get("http://localhost:8081/Vbook/outlogin").then(
        response => {
          alert("退出登录成功"), this.$router.push({ path: "/login" });
        },
        error => {
          alert(error.response.data.message);
        }
      );
    },
    //更新统计
    updateStatistics() {
      this.$http.get("http://localhost:8081/Lend/addToBorrow").then(
        response => {
          alert("更新成功");
        },
        error => {
          alert(error.response.data.message);
        }
      );
    },
    //获取用户名
    getName() {
      this.$http.get("http://localhost:8081/Vbook/getName").then(
        response => {
          this.userName = response.data.msg;
        },
        error => {
          alert(error.response.data.message);
        }
      );
    }
  }
};
</script>