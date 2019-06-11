<template>
  <div class="parts">
    <Header :tabs="tabs" :tabActive="tabActive" @handlenSwitch="(val)=>tabActive=val" />
    <div class="searchForm">
      <van-cell-group>
        <van-field label="申请人:"  placeholder="请输入申请人" />
        <van-field label="流程类型:" placeholder="请输入流程类型" />
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
    <div class="parts_list">
      <Cell
        icon="icon iconfont icon-parts"
        top="水箱下横梁"
        right="日常工作-实施部(2019)"
        bottom="提交：2019-02-25"
        left="工作人员：孙凤康"
        link="/partapproval"
      />
      <Cell
        icon="icon iconfont icon-parts"
        top="水箱下横梁"
        right="日常工作-实施部(2019)"
        bottom="提交：2019-02-25"
        left="工作人员：孙凤康"
        link="/partapproval"
      />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Cell from "@/components/Cell"

export default {
  components: {
    Header,
    Cell
  },
  data(){
    return {
      tabs: [
        {name: '待审总成/零件', type: 1},
        {name: '已审总成/零件', type: 0}
      ],
      tabActive:1,
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";

.parts {
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
.parts_list {
  margin-top: 20px;
}
</style>
