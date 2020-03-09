<template>
  <div class="main41">
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
      <div class="mainTitle">批量注册</div>
      <form id="borrowForm">
        <div id="mainBody41" class="input-group">
          <input type="file" class="btn btn-default" @change="getFile($event)" style="width: 282px" />
        </div>
        <div class="btn-group" id="mainBottom41">
          <button class="btn btn-default" @click="submit($event)">提交</button>
          <button class="btn btn-default" @click="batchRegisterTemplate()">导出批量注册模板</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "main41",
  data() {
    return {
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
      //阻止元素发生默认的行为
      event.preventDefault();
      let formData = new FormData();
      formData.append("file", this.file);
      axios
        .post("http://localhost:8081/Vbook/batchRegister", formData)
        .then(function(response) {
          alert("注册成功!");
          window.location.reload();
        })
        .catch(function(error) {
          alert(error.response.data.message);
        });
    },
    //导出批量注册模板
    batchRegisterTemplate() {
      this.$http({
        url: "http://localhost:8081/Vbook/batchRegisterTemplate", //获取文件流的接口路径
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
          let filename = "批量注册模板.xls";
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
