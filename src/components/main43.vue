<template>
  <div class="main43">
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
    <div class="mainTableNormal">
      <div class="mainTitle">批量启用用户</div>
      <form id="borrowForm">
        <div class="mainBody43">
          <div class="input-group">
            <span class="input-group-addon">预计毕业年份(必填)</span>
            <input
              type="text"
              class="form-control"
              style="width: 134px"
              v-model="userGraduationYear"
              placeholder="userGraduationYear"
            />
          </div>
          <div class="input-group">
            <span class="input-group-addon" style="width: 107px">专业(必填)</span>
            <input
              type="text"
              class="form-control"
              style="width: 174px"
              v-model="userSpecialities"
              placeholder="userSpecialities"
            />
          </div>
        </div>
        <div id="mainBottom43" class="btn-group">
          <button type="button" class="btn btn-default" @click="batchEnableUser">提交</button>
          <button type="reset" class="btn btn-default">重置</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "main43",
  data() {
    return {
      userGraduationYear: "",
      userSpecialities: ""
    };
  },
  methods: {
    //批量启用用户
    batchEnableUser() {
      if (this.userGraduationYear > 0 || this.userGraduationYear == "") {
        this.$http
          .post("http://localhost:8081/Vbook/batchEnableUser", {
            userGraduationYear: this.userGraduationYear,
            userSpecialities: this.userSpecialities
          })
          .then(
            response => {
              alert("启用成功");
            },
            error => {
              alert(error.response.data.message);
            }
          );
      } else {
        alert("预计毕业年份必须为正整数");
      }
    }
  }
};
</script>
