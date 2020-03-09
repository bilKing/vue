<template>
  <div class="main53">
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
        <h3 class="panel-title">还书记录</h3>
      </div>
      <div class="mainBody53">
        <form id="mainForm1">
          <div class="input-group">
            <span class="input-group-addon">图书号或学号</span>
            <select v-model="isStuId" autocomplete="off" class="form-control" style=" width:100px">
              <option value="true" selected>学号</option>
              <option value="false">图书号</option>
            </select>
            <span class="input-group-addon">图书号或学号id</span>
            <input
              type="text"
              class="form-control"
              style="width: 230px"
              v-model="id"
              placeholder="id"
            />
          </div>
        </form>
        <table
          border="1px"
          style="width: 1000px"
          class="table table-bordered table-hover table-striped"
        >
          <td style="height: 50px ; font-size:20px">图书号</td>
          <td style="height: 50px ; font-size:20px">图书名</td>
          <td style="height: 50px ; font-size:20px">借书人学号</td>
          <td style="height: 50px ; font-size:20px">借书时间</td>
          <td style="height: 50px ; font-size:20px">还书时间</td>
          <td style="height: 50px ; font-size:20px ; width: 100px">借出天数</td>
          <tr v-for="(val , key) in IPage.list">
            <td style="height: 40px">{{ val.bookId }}</td>
            <td style="height: 40px">{{ val.bookName }}</td>
            <td style="height: 40px">{{ val.stuId }}</td>
            <td style="height: 40px">{{ val.borrowTime }}</td>
            <td style="height: 40px">{{ val.returnTime }}</td>
            <td style="height: 40px">{{ val.lendDay }}</td>
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
          <input type="submit" value="提交" class="btn btn-default" @click="LendRecordList" />
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main53",
  data() {
    return {
      isStuId: "true",
      id: "",
      size: "10",
      current: "1",
      page: "",
      IPage: { list: [] }
    };
  },
  methods: {
    //借书记录返回列表
    LendRecordList() {
      if (this.size < 16 && this.current > 0) {
        this.$http
          .post("http://localhost:8081/Borrow/LendRecordList", {
            isStuId: this.isStuId,
            id: this.id,
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
