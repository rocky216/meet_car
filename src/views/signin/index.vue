<template>
  <div>
    <Header title="个人签到" />
    <div class="dateTop">
      <div class="date">{{nowData}}</div>
      <div class="historySign">上个月签到日历</div>
    </div>
    <Calendar :d="nowData" />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Calendar from "@/components/Calendar"

export default {
  components: {
    Header,
    Calendar
  },
  data(){
    return {
      nowData: ''
    }
  },
  created(){
    this.nowData = this.getNoWDate()
  },
  methods: {
    getNoWDate(){
      let d = new Date();
      return `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`
    }
  }
}
</script>

<style lang="less" scoped>
.dateTop {
  display: flex;
  text-align: center;
  height: 80px;
  line-height: 80px;
  background-color: #ddd;
  .date {
    flex: 1;
  }
  .historySign {
    flex: 2
  }
}
</style>