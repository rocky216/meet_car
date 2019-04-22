<template>
  <div>
    <Header title="个人签到" />
    <div class="dateTop">
      <div class="date">
        <i class="icon iconfont icon-arrow-left left" @click="switchDate(1)"></i>
        <span>{{nowData.substring(0,7)}}</span>
        <i  class="icon iconfont icon-arrow-right right" @click="switchDate(2)"></i>
      </div>
    </div>
    <Calendar :d="nowData" />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Calendar from "@/components/Calendar"
import moment from "moment"
import {backbtn} from "@/utils"

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
  mounted(){
    backbtn(this)
  },
  methods: {
    getNoWDate(){
      let d = new Date();
      return `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`
    },
    switchDate(val){
      if(val==1){
        let preD = moment(new Date(this.nowData)).subtract(1,'months').format('YYYY/MM/DD');
        this.nowData = preD
      }else {
        let preD = moment(new Date(this.nowData)).add(1,'months').format('YYYY/MM/DD');
            this.nowData = preD
      }
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
    background-color: #fff;
    i {
      font-size: 35px;
      margin: 0 20px;
    }
  }
  .historySign {
    flex: 2
  }
}
</style>