<template>
  <div class="main52">
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
    <div class="panel panel-primary" style="background-color: lightyellow">
      <div class="panel-heading">
        <h3 class="panel-title">书籍信息</h3>
      </div>
      <div class="mainBody52">
        <form id="mainForm1">
          <div class="input-group">
            <span class="input-group-addon">图书类型</span>
            <input
              type="text"
              class="form-control"
              style="width: 145px"
              v-model="bookType"
              placeholder="bookType"
            />
            <span class="input-group-addon">图书名</span>
            <input
              type="text"
              class="form-control"
              style="width: 145px"
              v-model="bookName"
              placeholder="bookName"
            />
            <span class="input-group-addon">图书号</span>
            <input
              type="text"
              class="form-control"
              style="width: 145px"
              v-model="bookId"
              placeholder="bookId"
            />
            <span class="input-group-addon">启用禁用</span>
            <select v-model="state" autocomplete="off" class="form-control" style=" width:100px">
              <option value="1" selected>启用</option>
              <option value="0">禁用</option>
            </select>
            <span class="input-group-addon">选定图书名做统一启用禁用</span>
            <select v-model="isName" autocomplete="off" class="form-control" style=" width:100px">
              <option value="false" selected>否</option>
              <option value="true">是</option>
            </select>
          </div>
        </form>
        <table
          border="1px"
          style="width: 1400px"
          class="table table-bordered table-hover table-striped"
        >
          <td style="height: 50px ; font-size:20px">图书id</td>
          <td style="height: 50px ; font-size:20px">图书类型</td>
          <td style="height: 50px ; font-size:20px">图书名</td>
          <td style="height: 50px ; font-size:20px">最新一次借出时间</td>
          <td style="height: 50px ; font-size:20px">最新一次归还时间</td>
          <td style="height: 50px ; font-size:20px">最新一次借书人</td>
          <td style="height: 50px ; font-size:20px">是否借出</td>
          <td style="height: 50px ; font-size:20px">禁用启用</td>
          <td style="height: 50px ; font-size:20px">创建图书年份</td>
          <td style="height: 50px ; font-size:20px">最后一次禁用时间</td>
          <td style="height: 50px ; font-size:20px">图书价格</td>
          <tr v-for="(val , key) in IPage.list">
            <td style="height: 40px">{{ val.bookId }}</td>
            <td style="height: 40px">{{ val.bookType }}</td>
            <td style="height: 40px">{{ val.bookName }}</td>
            <td style="height: 40px">{{ val.borrowBookTime }}</td>
            <td style="height: 40px">{{ val.returnBookTime }}</td>
            <td style="height: 40px">{{ val.borrowUser }}</td>
            <td style="height: 40px">{{ val.lend | changeLend }}</td>
            <td style="height: 40px">{{ val.state | changeState }}</td>
            <td style="height: 40px">{{ val.bookAddYear }}</td>
            <td style="height: 40px">{{ val.forbiddenTime }}</td>
            <td style="height: 40px">{{ val.bookPrice }}</td>
            <td style="height: 40px">
              <button
                type="button"
                v-if="isName == 'false' "
                class="btn btn-default"
                @click="forbiddenBook(val.bookId)"
              >{{ state | changeState }}</button>
            </td>
            <td style="height: 40px">
              <button
                type="button"
                v-if="isName == 'true' "
                class="btn btn-default"
                @click="forbiddenBook(val.bookName)"
              >{{ state | changeState }}</button>
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
          <input type="submit" value="提交" class="btn btn-default" @click="bookList" />
          <input type="reset" class="btn btn-default" value="重置" />
          <input type="submit" class="btn btn-default" value="删除n天前禁用" @click="deleteBook" />
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main52",
  data() {
    return {
      state: "1",
      isName: "false",
      id: "",
      bookId: "",
      bookType: "",
      bookName: "",
      current: "1",
      size: "10",
      page: "",
      IPage: {
        list: []
      }
    };
  },
  filters: {
    //state过滤器
    changeState: function(val) {
      return val
        .toString()
        .replace(0, "禁用")
        .replace(1, "启用");
    },
    //lend过滤器
    changeLend: function(val) {
      return val
        .toString()
        .replace(0, "未借出")
        .replace(1, "借出");
    }
  },
  methods: {
    //启用禁用书籍
    forbiddenBook(obj1) {
      this.$http
        .post("http://localhost:8081/Book/forbiddenBook", {
          state: this.state,
          id: obj1,
          isName: this.isName
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
    //删除禁用超过n天的数据
    deleteBook() {
      this.$http.get("http://localhost:8081/Book/deleteBook").then(
        response => {
          alert("操作成功");
        },
        error => {
          alert(error.response.data.message);
        }
      );
    },
    //书籍信息返回列表
    bookList() {
      if (this.size < 16 && this.current > 0) {
        this.$http
          .post("http://localhost:8081/Book/bookList", {
            bookType: this.bookType,
            bookName: this.bookName,
            bookId: this.bookId,
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
    }
  }
};
</script>
