<template>
  <div class="works">
    <Header :tabs="tabs" :tabActive="tabActive" @handlenSwitch="(val)=>tabActive=val" />
    <div class="searchForm">
      <van-cell-group>
        <van-field label="项目名称:" v-model="params.username" placeholder="请输入申请人" />
        <van-field label="工作名称:" v-model="params.type" placeholder="请输入流程类型" />
        <div class="search_date">
          <div class="label">工作日期</div>
          <div>
            <span>2019-01-02</span>至<span>2019-01-02</span>
          </div>
          <div class="searchBtn">
            <van-icon name="search" color="#fff" size="18px" />
          </div>
        </div>
      </van-cell-group>
    </div>
    <div class="process_list">
      <router-link to="/submit_work">
        <div class="process_item">
          <div class="process_info">
            <div class="process_info_item">
              <div>水箱下横梁(日常工作-实施部)</div>
              <div class="process_person">工期：
                <span>2019-02-25~2019-02-27（3.0天）</span></div>
            </div>
          </div>
          <div class="process_cr">
            <vueProgressBar
              value="70"
              :options="options"
              radius="20"
            />
          </div>
          <i class="icon iconfont icon-arrow-right arrow_right"></i>
        </div>
      </router-link>
      <router-link to="/submit_work">
        <div class="process_item">
          <div class="process_info">
            <div class="process_info_item">
              <div>水箱下横梁(日常工作-实施部)</div>
              <div class="process_person">工期：
                <span>2019-02-25~2019-02-27（3.0天）</span></div>
            </div>
          </div>
          <div class="process_cr">
            <vueProgressBar
              value="40"
              :options="options"
              radius="20"
            />
          </div>
          <i class="icon iconfont icon-arrow-right arrow_right"></i>
        </div>
      </router-link>
    </div>

    
  </div>
</template>
<script>
import Header from "@/components/Header"
import vueProgressBar from 'svg-progress-bar'

export default {
  components: {
    Header,
    vueProgressBar
  },
  data(){
    return {
      tabs: [
        {name: '总成/零件', type: 1},
        {name: '输出物', type: 0}
      ],
      tabActive:1,
      options: {
        radius: 20,
        circleWidth: 3,
        text: function(value){
          return value+'%'
        },
        textColor: '#454545',
        pathColors: ['#EEE', '#3888c8']
      },
      params: {
        username: '',
        type: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";

.works {
  width: 100%;
}
.searchForm {
  width: 100%;
  background: #fff;
  padding: 32px 0;
  
}
.search_date {
  display: flex;
  font-size: 14PX;
  padding: 10PX 15PX;
  color: #323233;
  position: relative;
  .date {
    display: flex;
  }
  .searchBtn {
    width: 70px;
    height: 68px;
    border-radius: 50%;
    background: @primary;
    line-height: 95px;
    text-align: center;
    position: absolute;
    right: 20px;
    top: 8px;
    box-shadow: 0 0 3px @primary;
  }
  .label {
    flex:1;
    max-width: 90PX;
  }
  span {
    color: #999;
  }
  span:nth-child(1) {
    margin-right:10px;
  }
  span:nth-child(2) {
    margin-left:10px;
  }
}

.process_list {
  margin-top: 20px;
}
.process_item {
  color: #454545;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  background-color: #fff;
  padding:20px 30px;
  border-bottom: 1px solid #ddd;
  position: relative;
  .process_cr {
    margin-right:90px;
  }
  .arrow_right {
    position: absolute;
    right: 20px;
    font-size: 30px;
    top: 45px;
    color: #666;
  }
  .process_item_img {
    width: 60px;
    height: 60px;
    border: 1PX solid @primary; 
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 10px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background-color: @primary;
      border-radius: 50%;
      i {
        color: #fff;
      }
    }
  }
  .process_info {
    display: flex;
    width: 650px;
    justify-content: space-between;
    padding-right: 20px;
    .process_person {
      margin-top: 15px;
      font-size: 24px;
      span {
        color: #999;
      }
    }
  }
}
</style>
