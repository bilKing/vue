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
    <div class="panel panel-primary" style="background-color: lightyellow">
      <div class="panel-heading">
        <h3 class="panel-title">用户权限搜索</h3>
      </div>
      <div class="mainBody45">
        <div class="input-group">
          <span class="input-group-addon">学号:(必填)</span>
          <input
            type="text"
            class="form-control"
            style="width: 305px"
            v-model="stuId"
            placeholder="stuId"
          />
        </div>
        <table
          border="1px"
          style="width: 400px"
          class="table table-bordered table-hover table-striped"
        >
          <td style="height: 50px ; font-size:20px">拥有的权限</td>
          <tr v-for="(val , key) in IPage.list">
            <td style="height:40px">{{ val.roleName }}</td>
          </tr>
        </table>
      </div>
      <div class="mainBottom">
        <form id="borrowForm">
          <h1>
            <input type="submit" value="提交" class="btn btn-default" @click="selectRole" />
            <input type="reset" value="重置" class="btn btn-default" />
          </h1>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main45",
  data() {
    return {
      stuId: "",
      IPage: {
        list: []
      }
    };
  },
  methods: {
    //搜索权限
    selectRole() {
      this.$http
        .post("http://localhost:8081/Vbook/selectRole", {
          stuId: this.stuId
        })
        .then(
          response => {
            this.IPage.list = response.data.data;
          },
          error => {
            alert(error.response.data.message);
          }
        );
    }
  }
};
</script>
