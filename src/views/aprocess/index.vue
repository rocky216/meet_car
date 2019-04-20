<template>
  <div class="aprocess">
    <Header :tabs="tabs" :tabActive="tabActive" @handlenSwitch="(val)=>tabActive=val" />
    <div class="searchForm">
      <van-cell-group>
        <van-field label="申请人:" v-model="params.username" placeholder="请输入申请人" />
        <van-field label="流程类型:" v-model="params.type" placeholder="请输入流程类型" />
        <div class="search_date">
          <div class="label">搜索日期</div>
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
      <div class="process_item">
        <div class="process_item_img">
          <span><img src="../../assets/images/apply.png" alt=""></span>
        </div>
        <div class="process_info">
          <div class="process_info_item">
            <div>请假申请审批</div>
            <div class="process_person">申请人：<span>孙凤康</span></div>
          </div>
          <div class="process_info_item">
            <div class="process_tiem">创建时间：<span>2019-02-25 10:10</span></div>
            <div class="process_tiem">审批时间：<span>2019-02-25 10:10</span></div>
          </div>
        </div>
      </div>
      <div class="process_item">
        <div class="process_item_img">
          <span><img src="../../assets/images/apply.png" alt=""></span>
        </div>
        <div class="process_info">
          <div class="process_info_item">
            <div>请假申请审批</div>
            <div class="process_person">申请人：<span>孙凤康</span></div>
          </div>
          <div class="process_info_item">
            <div class="process_tiem">创建时间：<span>2019-02-25 10:10</span></div>
            <div class="process_tiem">审批时间：<span>2019-02-25 10:10</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  components: {
    Header
  },
  data(){
    return {
      tabs: [
        {name: '待申请流程', type: 1},
        {name: '已审批流程', type: 0}
      ],
      tabActive:1,
      params: {
        username: '',
        type: ''
      }
    }
  },
  methods: {
    handlenSwitch(){

    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";
.aprocess {
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
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  background-color: #fff;
  padding:20px 10px;
  border-bottom: 1px solid #ddd;
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
      img {
        width:30px;
      }
    }
  }
  .process_info {
    display: flex;
    width: 630px;
    justify-content: space-between;
    padding-right: 20px;
    .process_info_item {
      .process_tiem:nth-child(2){
        margin-top: 15px;
      }
      .process_tiem {
        span {
          color: #999;
        }
      }
    }
    .process_person {
      margin-top: 15px;
      span {
        color: #999;
      }
    }
  }
}
</style>
