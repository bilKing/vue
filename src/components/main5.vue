<template>
  <div class="main5">
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
      <div class="mainTitle">添加书籍</div>
      <form id="borrowForm">
        <div class="mainBody5">
          <div class="input-group">
            <span class="input-group-addon" style="width: 95px">图书号(必填)</span>
            <input
              type="text"
              class="form-control"
              style="width: 181px"
              v-model="bookId"
              placeholder="bookId"
            />
          </div>
          <div class="input-group">
            <span class="input-group-addon" style="width: 95px">图书类型</span>
            <input
              type="text"
              class="form-control"
              style="width: 190px"
              v-model="bookType"
              placeholder="bookType"
            />
          </div>
          <div class="input-group">
            <span class="input-group-addon" style="width: 95px">图书名</span>
            <input
              type="text"
              class="form-control"
              style="width: 190px"
              v-model="bookName"
              placeholder="bookName"
            />
          </div>
          <div class="input-group">
            <span class="input-group-addon">图书名价格</span>
            <input
              type="text"
              class="form-control"
              style="width: 190px"
              v-model="bookPrice"
              placeholder="bookPrice"
            />
          </div>
        </div>
        <div class="btn-group" id="mainBottom5">
          <button type="button" class="btn btn-default" @click="addBook">提交</button>
          <button type="reset" class="btn btn-default">重置</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "main5",
  data() {
    return {
      bookId: "",
      bookType: "",
      bookName: "",
      bookPrice: ""
    };
  },
  methods: {
    //添加书籍
    addBook() {
      this.$http
        .post("http://localhost:8081/Book/addBook", {
          bookId: this.bookId,
          bookType: this.bookType,
          bookName: this.bookName,
          bookPrice: this.bookPrice
        })
        .then(
          response => {
            alert("录入成功");
          },
          error => {
            alert(error.response.data.message);
          }
        );
    }
  }
};
</script>
