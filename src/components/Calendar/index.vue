<template>
  <div>
    <ul class="weeks">
      <li v-for="(item, index) in weeks" :key="index">{{item}}</li>
    </ul>
    <ul class="days">
      <li v-for="(item, index) in days" :key="index">{{item.day}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    d: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      days: []
    }
  },
  created(){
    let d = new Date(this.d);
    let startWeek = new Date(d.setDate(1)).getDay()

    this.days = this.getArrDays(startWeek, this.getAllDays())

    console.log(this.days)
    
  },
  methods: {
    getAllDays(){
      let y = this.d.split('/')[0], m = this.d.split('/')[1]
      if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12 ){
        return 31
      }else if(m==4 ||m==6 ||m==9 ||m==11){
        return 30
      }else {
        if(m == 2 && y%4 == 0){
          return 29
        }else{
          return 28
        }
      }
    },
    getArrDays(startWeek, allDay){
      let dayArr=[]
      for(var i=1;i<=allDay+startWeek;i++){
        if(i<=startWeek){
          dayArr.push({
            day: ''
          })
        }else{
          dayArr.push({
            day: i-startWeek
          })
        }
      }
      return dayArr
    }
  }
}
</script>

<style lang="less" scoped>
.weeks {
  display: flex;
  background-color: #e9e9e9;
  li {
    flex: 1;
    text-align: center;
  }
}
.days {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 107.14px;
    height: 107.14px;
    line-height: 107.14px;
    text-align: center;
    
  }
}
</style>
