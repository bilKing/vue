<template>
  <div class="main1">
    <div class="mainHead"></div>
    <div class="panel panel-primary" style="background-color: lightyellow">
      <div class="panel-heading">
        <h3 class="panel-title">公告</h3>
      </div>
      <div class="mainBody0">
        <table
          border="1px"
          style="width:1350px"
          class="table table-bordered table-hover table-striped"
        >
          <td style="height: 50px ; font-size:20px">公告内容</td>
          <td style="height: 50px ; font-size:20px">公示人</td>
          <td style="height: 50px ; font-size:20px">公告时间</td>
          <td></td>
          <tr v-for="(val , index) in IPage.list" :key="val.noticeTime">
            <td>{{ val.notice }}</td>
            <td style="width:100px ; height: 60px">{{ val.adminName }}</td>
            <td style="width:100px ; height: 60px">{{ val.noticeTime }}</td>
            <td style="width:100px ; height: 60px">
              <button type="button" class="btn btn-default" @click="show(val.id)">删除公告</button>
            </td>
          </tr>
        </table>
      </div>
      <div class="mainBottom">
        <h1>
          <label>总共{{ page }}页</label>
          <label>当前页：</label>
          <input type="text" v-model="current" autocomplete="off" style=" width:30px" />
          <button type="button" class="btn btn-default" @click="noticeList">提交</button>
        </h1>
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
  //刷新页面时触发搜索公告方法
  mounted: function() {
    this.noticeList();
  },
  methods: {
    //搜索公告
    noticeList() {
      if (this.current > 0) {
      this.$http
        .post("http://localhost:8081/notice/noticeList", {
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
        alert("当前页数必须大于0");
      }
    },
    //删除公告
    show(obj) {
      this.$http
        .post("http://localhost:8081/notice/noticeDelete", {
          id: obj
        })
        .then(
          response => {
            alert("删除成功!"), this.$router.go(0);
          },
          error => {
            alert(error.response.data.message);
          }
        );
    }
  }
};
</script>

