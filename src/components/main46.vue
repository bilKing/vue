<template>
  <div class="main45">
    <div class="panel panel-primary" style="background-color:lightgray">
      <ul>
        <router-link to="/mainview/main40" style="text-decoration:none" active-class="myactive4">
          <li class="li4">用户信息完善</li>
        </router-link>
        <router-link to="/mainview/main4" style="text-decoration:none" active-class="myactive4">
          <li class="li4">用户信息</li>
        </router-link>
        <router-link to="/mainview/main41" style="text-decoration:none" active-class="myactive4">
          <li class="li4">批量注册</li>
        </router-link>
        <router-link to="/mainview/main42" style="text-decoration:none" active-class="myactive4">
          <li class="li4">批量禁用用户</li>
        </router-link>
        <router-link to="/mainview/main43" style="text-decoration:none" active-class="myactive4">
          <li class="li4">批量启用用户</li>
        </router-link>
        <router-link to="/mainview/main44" style="text-decoration:none" active-class="myactive4">
          <li class="li4">用户权限修改</li>
        </router-link>
        <router-link to="/mainview/main45" style="text-decoration:none" active-class="myactive4">
          <li class="li4">用户权限搜索</li>
        </router-link>
        <router-link to="/mainview/main46" style="text-decoration:none" active-class="myactive4">
          <li class="li4">用户信息修改</li>
        </router-link>
      </ul>
    </div>
    <div class="mainTableNormal1">
      <div class="mainTitle">用户信息修改</div>
      <form id="borrowForm">
        <div class="mainBody46">
          <div class="input-group">
            <span class="input-group-addon" style="width: 110px">修改的学号(必填)</span>
            <input
              type="text"
              class="form-control"
              style="width: 167px"
              v-model="stuId"
              placeholder="stuId"
            />
          </div>
          <div class="input-group">
            <span class="input-group-addon" style="width: 110px">姓名</span>
            <input
              type="text"
              class="form-control"
              style="width: 190px"
              v-model="userName"
              placeholder="userName"
            />
          </div>
          <div class="input-group">
            <span class="input-group-addon" style="width: 110px">密码</span>
            <input
              type="password"
              class="form-control"
              style="width: 190px"
              v-model="userPassword"
              placeholder="userPassword"
            />
          </div>
          <div class="input-group">
            <span class="input-group-addon" style="width: 110px">班级</span>
            <input
              type="text"
              class="form-control"
              style="width: 190px"
              v-model="userClass"
              placeholder="userClass"
            />
          </div>
          <div class="input-group">
            <span class="input-group-addon" style="width: 110px">专业</span>
            <input
              type="text"
              class="form-control"
              style="width: 190px"
              v-model="userSpecialities"
              placeholder="userSpecialities"
            />
          </div>
          <div class="input-group">
            <span class="input-group-addon">预计毕业年份</span>
            <input
              type="text"
              class="form-control"
              style="width: 190px"
              v-model="userGraduationYear"
              placeholder="userGraduationYear"
            />
          </div>
        </div>
        <div class="btn-group" id="mainBottom46">
          <button type="button" class="btn btn-default" @click="personaDataChange">提交</button>
          <button type="reset" class="btn btn-default">重置</button>
          <button type="button" class="btn btn-default" @click="userInfo">搜索该用户信息</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "main46",
  data() {
    return {
      stuId: "",
      userGraduationYear: "",
      userSpecialities: "",
      userName: "",
      userPassword: "",
      userClass: ""
    };
  },
  methods: {
    //用户信息修改
    personaDataChange() {
      if (this.userGraduationYear > 0 || this.userGraduationYear == "" || this.userGraduationYear == null) {
        this.$http
          .post("http://localhost:8081/Vbook/personaDataChange", {
            stuId: this.stuId,
            userGraduationYear: this.userGraduationYear,
            userSpecialities: this.userSpecialities,
            userName: this.userName,
            userPassword: this.userPassword,
            userClass: this.userClass
          })
          .then(
            response => {
              alert("修改成功");
            },
            error => {
              alert(error.response.data.message);
            }
          );
      } else {
        alert("预计毕业年份必须为正整数");
      }
    },
    //搜索该用户信息
    userInfo() {
      this.$http
        .post("http://localhost:8081/Vbook/userInfo", {
          stuId: this.stuId
        })
        .then(
          response => {
            (this.userGraduationYear = response.data.data.userGraduationYear),
              (this.userSpecialities = response.data.data.userSpecialities),
              (this.userName = response.data.data.userName),
              (this.userPassword = response.data.data.userPassword),
              (this.userClass = response.data.data.userClass);
          },
          error => {
            alert(error.response.data.message);
          }
        );
    }
  }
};
</script>
