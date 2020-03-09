<template>
  <div class="main2">
    <div class="mainHead"></div>
    <div class="panel panel-primary" style="background-color: lightyellow">
      <div class="panel-heading">
        <h3 class="panel-title">还书</h3>
      </div>
      <div class="mainBody1">
        <table
          border="1px"
          style="width: 1000px"
          class="table table-bordered table-hover table-striped"
        >
          <td style="height: 50px ; font-size:20px">图书名字</td>
          <td style="height: 50px ; font-size:20px">图书号</td>
          <td style="height: 50px ; font-size:20px">借书时间</td>
          <tr v-for="(val , key) in IPage.list">
            <td style="height: 40px">{{ val.bookName }}</td>
            <td style="height: 40px">{{ val.bookId }}</td>
            <td style="height: 40px">{{ val.borrowTime }}</td>
            <td style="width: 50px ; height: 40px">
              <button type="button" class="btn btn-default" @click="show(val.id)">还书</button>
            </td>
          </tr>
        </table>
      </div>
      <div class="mainBottom">
        <form id="borrowForm">
          <h1>
            <label>总共{{ page }}页</label>
            <label>当前页：</label>
            <input type="text" v-model="current" style=" width:30px" autocomplete="off" />
            <label>每页数量：</label>
            <input type="text" v-model="size" style=" width:30px" autocomplete="off" />
            <input type="submit" value="提交" class="btn btn-default" @click="returnBookList" />
          </h1>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: "10",
      current: "1",
      page: "",
      IPage: {
        list: []
      }
    };
  },
  //刷新页面时触发还书返回列表
  mounted: function() {
    this.returnBookList();
  },
  methods: {
    //还书返回列表
    returnBookList() {
      if (this.size < 16 && this.current > 0) {
        this.$http
          .post("http://localhost:8081/Lend/returnBookList", {
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
        alert("每页数量不能超过15条,当前页数必须大于0");
      }
    },
    //还书
    show(obj) {
      this.$http
        .post("http://localhost:8081/Lend/returnBook", {
          id: obj
        })
        .then(
          response => {
            alert("借书时间为" + response.data.data + "天"), this.$router.go(0);
          },
          error => {
            alert(error.response.data.message);
          }
        );
    }
  }
};
</script>
