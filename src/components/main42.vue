<template>
  <div class="main42">
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
      <div class="mainTitle">批量禁用</div>
      <form id="borrowForm">
        <div class="mainBody42">
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
          <div class="input-group">
            <span class="input-group-addon">不禁用的用户学号Excel表</span>
            <input
              type="file"
              class="btn btn-default"
              @change="getFile($event)"
              style="width: 95px"
            />
          </div>
        </div>
        <div id="mainBottom42" class="btn-group">
          <button class="btn btn-default" @click="submit($event)">提交</button>
          <button type="reset" class="btn btn-default">重置</button>
          <button class="btn btn-default" @click="batchForbiddenUserTemplate()">导出批量注册模板</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "main42",
  data() {
    return {
      userGraduationYear: "",
      userSpecialities: "",
      file: ""
    };
  },
  methods: {
    //获取文件
    getFile: function(event) {
      this.file = event.target.files[0];
    },
    //导入
    submit: function(event) {
      if (this.userGraduationYear > 0 || this.userGraduationYear == "") {
        //阻止元素发生默认的行为
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", this.file);
        formData.append("userGraduationYear", this.userGraduationYear);
        formData.append("userSpecialities", this.userSpecialities);
        axios
          .post("http://localhost:8081/Vbook/batchForbiddenUser", formData)
          .then(function(response) {
            alert("禁用成功!");
          })
          .catch(function(error) {
            alert(error.response.data.message);
          });
      } else {
        alert("预计毕业年份必须为正整数");
      }
    },
    //批量禁用 除去的用户
    batchForbiddenUserTemplate() {
      this.$http({
        url: "http://localhost:8081/Vbook/batchForbiddenUserTemplate", //获取文件流的接口路径
        method: "post",
        data: {
          //请求参数
        },
        responseType: "blob" // 表明返回服务器返回的数据类型 很重要！！
      })
        .then(response => {
          //将文件流转成blob形式
          const blob = new Blob([response.data], {
            type: "application/vnd.ms-excel"
          });
          let filename = "不禁用的用户模板.xls";
          //创建一个超链接，将文件流赋进去，然后实现这个超链接的单击事件
          const elink = document.createElement("a");
          elink.download = filename;
          elink.style.display = "none";
          elink.href = URL.createObjectURL(blob);
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href); // 释放URL 对象
          document.body.removeChild(elink);
        })
        .catch(error => {
          this.$message.error("导出失败");
        });
    }
  }
};
</script>
