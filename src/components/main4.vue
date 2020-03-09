<template>
  <div class="main4">
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
        <h3 class="panel-title">用户信息</h3>
      </div>
      <div class="mainBody4">
        <form id="mainForm1">
          <div class="input-group">
            <span class="input-group-addon">姓名</span>
            <input
              type="text"
              class="form-control"
              style="width: 145px"
              v-model="userName"
              placeholder="userName"
            />
            <span class="input-group-addon">学号</span>
            <input
              type="text"
              class="form-control"
              style="width: 145px"
              v-model="stuId"
              placeholder="stuId"
            />
            <span class="input-group-addon">班级</span>
            <input
              type="text"
              class="form-control"
              style="width: 145px"
              v-model="userClass"
              placeholder="userClass"
            />
            <span class="input-group-addon">专业</span>
            <input
              type="text"
              class="form-control"
              style="width: 145px"
              v-model="userSpecialities"
              placeholder="userSpecialities"
            />
            <span class="input-group-addon">预计毕业年份</span>
            <input
              type="text"
              class="form-control"
              style="width: 145px"
              v-model="userGraduationYear"
              placeholder="userGraduationYear"
            />
            <span class="input-group-addon">启用禁用</span>
            <select v-model="state" autocomplete="off" class="form-control" style=" width:100px">
              <option value="1" selected>启用</option>
              <option value="0">禁用</option>
            </select>
          </div>
        </form>
        <table
          border="1px"
          style="width: 1234px"
          class="table table-bordered table-hover table-striped"
        >
          <td style="height: 50px ; font-size:20px">学号</td>
          <td style="height: 50px ; font-size:20px">姓名</td>
          <td style="height: 50px ; font-size:20px">班级</td>
          <td style="height: 50px ; font-size:20px">专业</td>
          <td style="height: 50px ; font-size:20px">预计毕业年份</td>
          <td style="height: 50px ; font-size:20px">禁用启用</td>
          <td style="height: 50px ; font-size:20px">最后一次禁用时间</td>
          <tr v-for="(val , key) in IPage.list">
            <td style="height: 40px">{{ val.stuId }}</td>
            <td style="height: 40px">{{ val.userName }}</td>
            <td style="height: 40px">{{ val.userClass }}</td>
            <td style="height: 40px">{{ val.userSpecialities }}</td>
            <td style="height: 40px">{{ val.userGraduationYear }}</td>
            <td style="height: 40px">{{ val.state | change }}</td>
            <td style="height: 40px">{{ val.forbiddenTime }}</td>
            <td style="height: 40px ; width: 40px">
              <button type="button" class="btn btn-default" @click="forbiddenUser(val.stuId)">{{ state | change }}</button>
            </td>
          </tr>
        </table>
      </div>
      <div class="mainBottom">
        <h1>
          <label>总共{{ page }}页</label>
          <label>当前页：</label>
          <input type="text" v-model="current" style=" width:30px" autocomplete="off" />
          <label>每页数量：</label>
          <input type="text" v-model="size" style=" width:30px" autocomplete="off" />
          <input type="submit" value="提交" class="btn btn-default" @click="userList" />
          <input type="submit" class="btn btn-default" value="删除n天前禁用" @click="deleteForbiddenUser" />
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main4",
  data() {
    return {
      size: "10",
      current: "1",
      state: "1",
      stuId: "",
      userName: "",
      userClass: "",
      userSpecialities: "",
      userGraduationYear: "",
      page: "",
      IPage: {
        list: []
      }
    };
  },
  //state过滤器
  filters: {
    change: function(val) {
      return val
        .toString()
        .replace(0, "禁用")
        .replace(1, "启用");
    }
  },
  methods: {
    //禁用启用用户
    forbiddenUser(obj) {
      this.$http
        .post("http://localhost:8081/Vbook/forbiddenUser", {
          state: this.state,
          stuId: obj
        })
        .then(
          response => {
            alert("操作成功"), this.$router.go(0);
          },
          error => {
            alert(error.response.data.message);
          }
        );
    },
    //删除禁用超过n天用户
    deleteForbiddenUser() {
      this.$http.get("http://localhost:8081/Vbook/deleteForbiddenUser").then(
        response => {
          alert("操作成功");
        },
        error => {
          alert(error.response.data.message);
        }
      );
    },
    //用户返回列表
    userList() {
      if (this.size < 16 && this.current > 0) {
        if (this.userGraduationYear > 0 || this.userGraduationYear == "") {
          this.$http
            .post("http://localhost:8081/Vbook/userList", {
              userName: this.userName,
              stuId: this.stuId,
              userClass: this.userClass,
              userSpecialities: this.userSpecialities,
              userGraduationYear: this.userGraduationYear,
              size: this.size,
              current: this.current
            })
            .then(
              response => {
                this.IPage.list = response.data.data.records;
                this.page = response.data.data.pages;
              },
              error => {
                alert(error.response.data.message);
              }
            );
        } else {
          alert("预计毕业年份必须为正整数");
        }
      } else {
        alert("每页数量不能超过15条,当前页数必须大于0");
      }
    }
  }
};
</script>
