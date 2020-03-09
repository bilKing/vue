<template>
  <div class="main34">
    <div class="panel panel-primary" style="background-color:lightgray">
      <ul>
        <router-link to="/mainview/main3" style="text-decoration:none" active-class="myactive3">
          <li class="li3">各专业借书本数</li>
        </router-link>
        <router-link to="/mainview/main31" style="text-decoration:none" active-class="myactive3">
          <li class="li3">某专业学生借书</li>
        </router-link>
        <router-link to="/mainview/main32" style="text-decoration:none" active-class="myactive3">
          <li class="li3">借书超期未还</li>
        </router-link>
        <router-link to="/mainview/main33" style="text-decoration:none" active-class="myactive3">
          <li class="li3">被借书籍排名</li>
        </router-link>
        <router-link to="/mainview/main34" style="text-decoration:none" active-class="myactive3">
          <li class="li3">添加公告</li>
        </router-link>
      </ul>
    </div>
    <div class="mainTableNormal">
      <form id="borrowForm">
        <div class="mainTitle">
          <label>新公告内容</label>
        </div>
        <br />
        <div class="mainBody34">
          <textarea v-model="notice" autocomplete="off" style="width:380px ; height:200px"></textarea>
        </div>
        <div class="btn-group" id="mainBottom34">
          <button type="button" class="btn btn-default" @click="noticeAdd">提交</button>
          <button type="reset" class="btn btn-default">重置</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "main34",
  data() {
    return {
      notice: ""
    };
  },
  methods: {
    //添加公告
    noticeAdd() {
      this.$http
        .post("http://localhost:8081/notice/noticeAdd", {
          notice: this.notice
        })
        .then(
          response => {
            alert("添加成功!");
          },
          error => {
            alert(error.response.data.message);
          }
        );
    }
  }
};
</script>
