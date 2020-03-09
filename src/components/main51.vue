<template>
  <div class="main51">
    <div class="panel panel-primary" style="background-color:lightgray">
      <ul>
        <router-link to="/mainview/main5" style="text-decoration:none" active-class="myactive5">
          <li class="li5">录入书籍</li>
        </router-link>
        <router-link to="/mainview/main51" style="text-decoration:none" active-class="myactive5">
          <li class="li5">批量录入书籍</li>
        </router-link>
        <router-link to="/mainview/main52" style="text-decoration:none" active-class="myactive5">
          <li class="li5">书籍信息</li>
        </router-link>
        <router-link to="/mainview/main53" style="text-decoration:none" active-class="myactive5">
          <li class="li5">还书记录</li>
        </router-link>
      </ul>
    </div>
    <div class="mainTableNormal">
      <div class="mainTitle">批量录入</div>
      <form id="borrowForm">
        <div id="mainBody51" class="input-group">
           <input type="file" class="btn btn-default" @change="getFile($event)" style="width: 282px" />
        </div>
        <div class="btn-group" id="mainBottom51">
          <button class="btn btn-default" @click="submit($event)">提交</button>
          <button class="btn btn-default" @click="batchAddBookTemplate()">导出批量录入模板</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "main51",
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
        .post("http://localhost:8081/Book/batchAddBook", formData)
        .then(function(response) {
          alert("录入成功!");
          window.location.reload();
        })
        .catch(function(error) {
          alert(error.response.data.message);
        });
    },
    //导出
    batchAddBookTemplate() {
      this.$http({
        url: "http://localhost:8081/Book/batchAddBookTemplate", //获取文件流的接口路径
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
          let filename = "批量录入模板.xls";
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
