<template>
  <div class="main3">
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
    <div class="panel panel-primary" style="background-color: lightyellow">
      <div class="panel-heading">
        <h3 class="panel-title">各专业借书本数</h3>
      </div>
      <div class="mainBody3">
        <form id="mainForm1">
          <div class="input-group">
            <span class="input-group-addon">预计毕业年份</span>
            <input
              type="text"
              class="form-control"
              style="width: 145px"
              v-model="userGraduationYear"
              placeholder="userGraduationYear"
            />
            <span class="input-group-addon">开始日期</span>
            <input
              type="date"
              class="form-control"
              style="width: 145px"
              v-model="start"
              placeholder="start"
            />
            <span class="input-group-addon">结束日期</span>
            <input
              type="date"
              class="form-control"
              style="width: 145px"
              v-model="end"
              placeholder="end"
            />
            <span class="input-group-addon">最少借书时长(天数)</span>
            <input
              type="text"
              class="form-control"
              style="width: 145px"
              v-model="lendDay"
              placeholder="lendDay"
            />
          </div>
        </form>
        <table
          border="1px"
          style="width: 1000px"
          class="table table-bordered table-hover table-striped"
        >
          <td style="height: 50px ; font-size:20px">专业名字</td>
          <td style="height: 50px ; font-size:20px">借书数量</td>
          <tr v-for="(val , key) in IPage.list">
            <td style="height: 40px">{{ val.userSpecialities }}</td>
            <td style="height: 40px">{{ val.bookNum }}</td>
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
          <input type="submit" value="提交" class="btn btn-default" @click="borrowCount" />
          <input type="submit" class="btn btn-default" value="导出Excel" @click="exportTable()" />
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main3",
  data() {
    return {
      size: "10",
      current: "1",
      userGraduationYear: "",
      start: "",
      end: "",
      lendDay: "",
      page: "",
      IPage: {
        list: []
      }
    };
  },
  methods: {
    //统计各专业借书本书
    borrowCount() {
      if (this.size < 16 && this.current > 0) {
        if (this.userGraduationYear > 0 || this.userGraduationYear == "") {
          this.$http
            .post("http://localhost:8081/Statistics/borrowCount", {
              size: this.size,
              current: this.current,
              userGraduationYear: this.userGraduationYear,
              start: this.start,
              end: this.end,
              lendDay: this.lendDay
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
          alert("预计毕业年份必须为正整数");
        }
      } else {
        alert("每页数量不能超过15条,当前页数必须大于0");
      }
    },
    //导出
    exportTable() {
      this.$http({
        url: "http://localhost:8081/Statistics/borrowCountExportDownload",
        method: "post",
        data: {
          size: this.size,
          current: this.current,
          userGraduationYear: this.userGraduationYear,
          start: this.start,
          end: this.end,
          lendDay: this.lendDay
        },
        responseType: "blob" // 表明返回服务器返回的数据类型
      })
        .then(response => {
          //将文件流转成blob形式
          const blob = new Blob([response.data], {
            type: "application/vnd.ms-excel"
          });
          let filename = "各专业借书本数" + this.current + "页.xls";
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
