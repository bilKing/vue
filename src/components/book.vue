<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "book"
};
</script>

<style>
html,
/*全局tr*/
tr:hover {
  background-color: #c5c4c4;
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.428571429;
}

ul {
  margin: 0px;
  padding: 0px;
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
/*取消闪烁 */
[v-cloak]{display: none !important;}
/*侧边栏*/
.head1 {
  flex: 2;
  background-color: lightgrey;
}
/*无head页面默认head*/
.mainHead {
  height: 75px;
  background-color: lightgray;
}
/*左上角项目名设置*/
.headh {
  font-size: 40px;
}
/*业务页面全局配置*/
.wrap {
  display: flex;
  height: 944px;
}
/*登录注册全局配置*/
.container1 {
  display: flex;
  height: 945px;
  background-image: url(../assets/350.jpg);
  background-repeat: no-repeat;
  width:100%;
  overflow: hidden;
  background-size:cover;
  flex-wrap: wrap;
  /*取消子元素间的空格 */
  align-content: flex-start;
  /* 加圆角 */
  border-radius: 30px;
}
/*侧边栏全局配置*/
.left1 {
  flex: 1.7;
  background-color: lightyellow;
}
/*main全局配置*/
.mainall {
  flex: 8.3;
  background-color: lightyellow;
}
/*登录注册卡片全局配置*/
.titlediv {
  height: 500px;
  width: 500px;
  margin: auto;
  /*全部居中*/
  border-radius: 50px;
  background-image: url(../assets/352.png);
  background-repeat: no-repeat;
  background-size: 500px 500px;
}
/*登录注册组件*/
.login {
  border-radius: 0px 0px 25px 25px;
  height: 300px;
  width: 500px;
  background: linear-gradient(to right, red, green);
  -webkit-background-clip: text;
  /* 渐变色 */
  color: transparent;
  font-size: 25px;
}
/*登录注册router-link*/
.link {
  text-align: center;
  /*水平居中*/
  height: 80px;
  font-style: normal;
  font-size: 30px;
}
/* 登录注册组件切换CSS3动画 */
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: rotate(7deg);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
/***********************路由ul**********************/
/* 侧边栏 */
.li1 {
  list-style: none;
  height: 141px;
  border-bottom: solid 2px #e3e3e3;
  font-size: 35px;
  padding-left: 20px;
  padding-top: 35px;
  background-color: wheat;
}
/* 统计管理head */
.li3 {
  text-align: center;
  list-style: none;
  border-bottom: solid 2px #e3e3e3;
  font-size: 40px;
  height: 74px;
  width: 315px;
  background-color: wheat;
  display: inline-block;
}
/* 用户管理head */
.li4 {
  text-align: center;
  list-style: none;
  border-bottom: solid 2px #e3e3e3;
  font-size: 30px;
  height: 74px;
  width: 195px;
  background-color: wheat;
  display: inline-block;
}
/* 书籍head */
.li5 {
  text-align: center;
  list-style: none;
  border-bottom: solid 2px #e3e3e3;
  font-size: 35px;
  height: 74px;
  width: 394px;
  background-color: wheat;
  display: inline-block;
}
/***********************路由active**********************/
/* 登录注册切换active*/
.myactive {
  color: red;
  font-size: 35px;
  font-style: italic;
}
/* 左侧边栏active*/
.myactive1 li {
  color: red;
  font-size: 45px;
  background-color: lightblue;
}
/* 统计,书籍管理head active */
.myactive3 li {
  color: red;
  background-color: lightblue;
}
/* 用户管理head active */
.myactive4 li {
  color: red;
  background-color: lightblue;
}
/* 书籍管理head active */
.myactive5 li {
  color: red;
  background-color: lightblue;
}
/***********************搜索框css**********************/
#mainForm1 .input-group {
  width: 100px;
}
/***********************卡片CSS**********************/
/* 业务卡片全局配置 */
.mainTableNormal {
  font-size: 30px;
  margin: 120px 600px 300px 500px;
  line-height: 60px;
  background-color: rgba(197, 231, 226, 0.596);
  height: 450px;
  /* 加圆角 */
  border-radius: 25px;
}
/* 用户修改卡片全局配置 */
.mainTableNormal1 {
  font-size: 30px;
  margin: 120px 600px 300px 500px;
  line-height: 52px;
  background-color: rgba(197, 231, 226, 0.596);
  height: 450px;
  /* 加圆角 */
  border-radius: 25px;
}
/*登录注册卡片*/
.mainBodyLogin {
  padding-left: 100px;
  padding-top: 80px;
}
/*登录注册卡片子元素*/
 .login .btn-group{
 padding-top: 60px;
 padding-left: 100px;
}
.mainBottomLogin {
  padding-top: 40px;
  padding-left: 40px;
}
/* 公告卡片 */
.mainBody34 {
  padding-left: 63px;
}
#mainBottom34 {
  padding-left: 63px;
}
/* 卡片Title */
.mainTitle {
  text-align: center;
}
/* 用户信息完善卡片 */
.mainBody40 {
  padding-left: 103px;
}
.mainBody40 .input-group {
  padding-top: 20px;
}
#mainBottom40 {
  padding-left: 103px;
  padding-top: 5px;
}
/* 用户信息卡片 */
.mainBody4 {
  padding-left: 200px;
}
/* 批量注册卡片 */
#mainBody41 {
  padding-left: 106px;
  padding-top: 65px;
  line-height: 80px;
}
#mainBottom41 {
  padding-left: 103px;
  padding-top: 184px;
}
/* 批量禁用卡片 */
.mainBody42 {
  padding-left: 103px;
  padding-top: 20px;
}
.mainBody42 .input-group {
  padding-top: 30px;
}
#mainBottom42 {
  padding-left: 103px;
  padding-top: 71px;
}
/* 批量启用卡片 */
.mainBody43 {
  padding-left: 103px;
  padding-top: 40px;
}
.mainBody43 .input-group {
  padding-top: 30px;
}
#mainBottom43 {
  padding-left: 103px;
  padding-top: 120px;
}
/* 权限修改卡片 */
.mainBody44 {
  padding-left: 103px;
  padding-top: 20px;
}
.mainBody44 .input-group {
  padding-top: 30px;
}
#mainBottom44 {
  padding-left: 103px;
  padding-top: 76px;
}
/* 用户信息修改卡片 */
.mainBody46 {
  padding-left: 83px;
}
.mainBody46 .input-group {
  padding-top: 20px;
}
#mainBottom46 {
  padding-left: 83px;
}
/* 录入书籍卡片 */
.mainBody5 {
  padding-left: 103px;
  padding-top: 7px;
}
.mainBody5 .input-group {
  padding-top: 30px;
}
#mainBottom5 {
  padding-left: 103px;
  padding-top: 20px;
}
/* 批量录入书籍卡片 */
#mainBody51 {
  padding-left: 106px;
  padding-top: 65px;
  line-height: 80px;
}
#mainBottom51 {
  padding-left: 106px;
  padding-top: 184px;
}
/* 书籍信息卡片 */
.mainBody52 {
  padding-left: 100px;
}
/***********************列表CSS**********************/
/* 列表全局Bottom */
.mainBottom {
  padding-left: 630px;
}
/* 公告列表 */
.mainBody0 {
  text-align: center;
  padding-left: 120px;
}
/* 还借书列表 */
.mainBody1 {
  text-align: center;
  padding-left: 300px;
}
/* 各专业借书本数列表 */
.mainBody3 {
  text-align: center;
  padding-left: 300px;
}
/* 某专业学生借书列表 */
.mainBody31 {
  text-align: center;
  padding-left: 230px;
}
/* 借书超期未还列表 */
.mainBody32 {
  text-align: center;
  padding-left: 400px;
}
/* 借书最多的书列表 */
.mainBody33 {
  text-align: center;
  padding-left: 400px;
}
/* 用户权限搜索列表 */
.mainBody45 {
  text-align: center;
  padding-left: 600px;
}
/* 借书记录列表 */
.mainBody53 {
  text-align: center;
  padding-left: 330px;
}
</style>
