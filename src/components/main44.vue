<template>
  <div class="main44">
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
      <div class="mainTitle">用户权限修改</div>
      <form id="borrowForm">
        <div class="mainBody44">
          <div class="input-group">
            <span class="input-group-addon">学号(必填)</span>
            <input
              type="text"
              class="form-control"
              style="width: 134px"
              v-model="stuId"
              placeholder="stuId"
            />
          </div>
          <div class="input-group">
            <span class="input-group-addon">权限修改</span>
            <select v-model="userAuthority" class="form-control" style=" width:140px">
              <option value="1" selected>公告权限</option>
              <option value="2">统计权限</option>
              <option value="4">用户管理权限</option>
              <option value="8">书籍管理权限</option>
            </select>
          </div>
          <div class="input-group">
            <span class="input-group-addon" style="width: 80px">增删</span>
            <select v-model="isAdd" autocomplete="off" class="form-control" style=" width:80px">
              <option value="1" selected>添加</option>
              <option value="0">删除</option>
            </select>
          </div>
        </div>
        <div class="btn-group" id="mainBottom44">
          <button type="button" class="btn btn-default" @click="changeRole">提交</button>
          <button type="reset" class="btn btn-default">重置</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "main44",
  data() {
    return {
      stuId: "",
      userAuthority: 1,
      isAdd: 1
    };
  },
  methods: {
    //改变权限
    changeRole() {
      this.$http
        .post("http://localhost:8081/Vbook/changeRole", {
          isAdd: this.isAdd,
          stuId: this.stuId,
          userAuthority: this.userAuthority
        })
        .then(
          response => {
            alert("设置成功");
          },
          error => {
            alert(error.response.data.message);
          }
        );
    }
  }
};
</script>
