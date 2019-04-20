<template>
  <div>
    <ul class="weeks">
      <li v-for="(item, index) in weeks" :key="index">{{item}}</li>
    </ul>
    <ul class="days">
      <li v-for="(item, index) in days" :key="index" @click="()=>show=true">{{item.day}}</li>
    </ul>
    <van-popup v-model="siteShow" position="bottom">
      <van-picker :columns="siteList" />
    </van-popup>
    <van-popup v-model="majorShow" position="bottom">
      <van-picker :columns="majorList" />
    </van-popup>
    <!-- 签到框 -->
    <van-dialog
      v-model="show"
      show-cancel-button
      @confirm="handlenCancel"
    >
      <div>
        <div>
          <div class="morning">
            <van-checkbox v-model="mornCheck">上午</van-checkbox><span>不上班不要勾选</span>
          </div>
          <div style="margin: 0 20px;">
            <van-cell-group>
              <div v-for="(item, index) in itemList" 
                :key="index"
                @click="handlenSite"
                >
                <van-field
                  v-model="item.value"
                  :border="true"
                  required
                  disabled
                  :label="item.name"
                />
              </div>
            </van-cell-group>
          </div>
        </div>
        <div>
          <div class="morning">
            <van-checkbox v-model="mornCheck">下午</van-checkbox><span>不上班不要勾选</span>
          </div>
          <div style="margin: 0 20px;">
            <van-cell-group>
              <div v-for="(item, index) in itemList" 
                :key="index"
                @click="handlenSite"
                >
                <van-field
                  v-model="item.value"
                  :border="true"
                  required
                  disabled
                  :label="item.name"
                />
              </div>
            </van-cell-group>
          </div>
        </div>
      </div>
    </van-dialog>
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
      days: [],
      itemList: [
        {name: '工作地点', value: ''},
        {name: '参与项目', value: ''},
        {name: '专业', value: ''},
        {name: '签到事由', value: ''},
      ],
      siteShow: false,
      majorShow: false,
      mornCheck: true,
      site: '',
      siteList: ['北京', '上海', '吉安', '南昌', '太原', '无锡'],
      majorList: [
        '日常工作-会议培训', 
        '项目实施管理部', 
        'SE-SV91', 
        'SE-G201', 
        'SE-SK81材料利用率',
        '测试立项',
        '2019平台软件项目'
      ],
      show: false
    }
  },
  watch: {
    d(val){
      console.log(val)
      this.getDays()
    }
  },
  created(){
    this.getDays()
    
  },
  methods: {
    handlenSite(){
      this.siteShow = true
    },
    handlenCancel(){
      this.show = true
    },
    getDays(){
      let d = new Date(this.d);
      let startWeek = new Date(d.setDate(1)).getDay()

      this.days = this.getArrDays(startWeek, this.getAllDays())
    },
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
@import "../../assets/less/theme.less";

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
.morning {
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px 0;
  background-color: @primary;
}
.picker {
  position: fixed;
  left: 0;
  bottom:-500px;
  width:100%;
  transition: 0.3s;
  z-index: 2006;
}
.botclass {
  bottom: 0;
}
</style>
