<template>
  <div class="warn">
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
    <ul class="work_approval">
      <li>
        <router-link to="/approval">
          <div class="info">
            <div class="title">
              <span>
                <i class="icon iconfont icon-text"></i>工作审批
              </span>
              <span>王春雪</span>
              <span>逾期通知</span>
            </div>
            <div class="concent">
              xxx项目中的【总成/零件】-xxx工作提交审批已【当前日期提交】天未审批
            </div>
            <div class="date">
              <span>预警日期：2019-03-01~2019-03-15</span>
              <span>预警次数： <strong>15</strong></span>
            </div>
          </div>
          <div class="arrow_right">
            <i class="icon iconfont icon-arrow-right "></i>
          </div>
        </router-link>
      </li>
    </ul>
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
        {name: '未处理', type: 1},
        {name: '已处理', type: 0}
      ],
      tabActive:1,
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

.work_approval {
  margin-top: 24px;
  li {
    padding: 20px;
    background-color: #fff;
    font-size: 28px;
    a {
      color: #666;
      display: flex;
      justify-content: space-between;
    }
    .arrow_right {
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 40px;
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      color: #333;
      i {
        font-size: 30px;
        color: @primary;
      }
    }
    .concent {
      padding: 20px;
    }
    .date {
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      strong {
        color: #ff4c4c;
      }
    }
  }
}

.warn {
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
</style>
