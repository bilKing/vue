<template>
  <div class="main1">
    <div class="mainHead"></div>
    <div class="panel panel-primary" style="background-color: lightyellow">
      <div class="panel-heading">
        <h3 class="panel-title">借书</h3>
      </div>
      <div class="mainBody1">
        <form id="mainForm1">
          <div class="input-group">
            <span class="input-group-addon">图书类型</span>
            <input
              type="text"
              class="form-control"
              style="width: 243px"
              v-model="booktype"
              placeholder="booktype"
            />
            <span class="input-group-addon">图书名</span>
            <input
              type="text"
              class="form-control"
              style="width: 243px"
              v-model="bookname"
              placeholder="bookname"
            />
            <span class="input-group-addon">图书号</span>
            <input
              type="text"
              class="form-control"
              style="width: 243px"
              v-model="bookid"
              placeholder="bookid"
            />
          </div>
        </form>
        <table
          border="1px"
          style="width: 1000px"
          class="table table-bordered table-hover table-striped"
        >
          <td style="height: 50px ; font-size:20px ; width: 237.5px">图书类型</td>
          <td style="height: 50px ; font-size:20px ; width: 237.5px">图书名字</td>
          <td style="height: 50px ; font-size:20px ; width: 237.5px">图书号</td>
          <td style="height: 50px ; font-size:20px ; width: 237.5px">是否借出</td>
          <td style="height: 50px ; font-size:20px ; width: 50px">借书</td>
          <tr v-for="(val , key) in IPage.list">
            <td style="height: 40px ; width: 237.5px">{{ val.bookType }}</td>
            <td style="height: 40px ; width: 237.5px">{{ val.bookName }}</td>
            <td style="height: 40px ; width: 237.5px">{{ val.bookId }}</td>
            <td style="height: 40px ; width: 237.5px">{{ val.lend | change }}</td>
            <td style="height: 40px ; width: 50px">
              <button
                type="button"
                v-if="val.lend == 0"
                class="btn btn-default"
                @click="show(val.bookId)"
              >借书</button>
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
            <input type="submit" value="提交" class="btn btn-default" @click="borrowBoobList" />
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
      booktype: "",
      bookname: "",
      bookid: "",
      size: "10",
      current: "1",
      page: "",
      IPage: {
        list: []
      }
    };
  },
  //Lend过滤器
  filters: {
    change: function(val) {
      return val
        .toString()
        .replace(0, "未借出")
        .replace(1, "已借出");
    }
  },
  methods: {
    borrowBoobList() {
      //借出返回列表
      if (this.size < 16 && this.current > 0) {
        this.$http
          .post("http://localhost:8081/Book/borrowBookList", {
            bookType: this.booktype,
            bookName: this.bookname,
            bookId: this.bookid,
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
    //借书
    show(obj) {
      this.$http
        .post("http://localhost:8081/Lend/borrowBook", {
          bookId: obj
        })
        .then(
          response => {
            alert("借书成功!"), this.$router.go(0);
          },
          error => {
            alert(error.response.data.message);
          }
        );
    }
  }
};
</script>
