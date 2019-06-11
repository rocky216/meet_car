<template>
  <div class="news">
    <Header :tabs="tabs" :tabActive="tabActive" @handlenSwitch="(val)=>tabActive=val" />
    <div>
      <van-tabs 
        @change="handlenChange"
        title-active-color="#3888c8"
        color="#3888c8"
      >
        <van-tab 
          v-for="item in newTyps" 
          :key="item.value" 
          :title="item.title"></van-tab>
      </van-tabs>

      <ul class="news_list">
        <li>
          <router-link to="/news_detail">
            <div class="info">
              <div class="title">
                <div>
                  <i class="icon iconfont icon-news"></i> 
                  OPENISSUE逾期（项目消息）
                </div>
                <span>接收时间：2019-03-26 16:02:14</span>
              </div>
              <div>
                <span class="redColor">重要</span>
              </div>
            </div>
            <div class="arrow_right">
              <i class="icon iconfont icon-arrow-right"></i>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import {newTyps} from "./datas"

export default {
  components: {
    Header
  },
  data(){
    return {
      tabs: [
        {name: '未读消息', type: 1},
        {name: '已读消息', type: 0}
      ],
      tabActive:1,
      active: 0,
      newTyps
    }
  },
  methods: {
    handlenChange(val){
      console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";

.news {
  width: 100%;
}
.news_list {
  font-size: 28px;
  margin-top: 20px;
  li {
    background-color: #fff;
    border-bottom: 1px solid #eee;
    
    a {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      color: #333;
    }
    .arrow_right {
      display: flex;
      justify-content: center;
      align-items: center;
      i{
        font-size: 30px;
        color: #999;
      }
    }
    .info {
      display: flex;
      justify-content: space-between;
      width: 650px;
      .title {
        font-size: 30px;
        i {
          font-size: 30px;
          color: @primary;
        }
        span {
          font-size: 24px;
          color: #666;
          display: block;
          margin-top: 10px;
        }
      }
    }
    .redColor {
      color: #ff4c4c;
    }
  }
}

</style>
