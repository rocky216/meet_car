<template>
  <div class="process">
    <Header title="未完成发起流程" />    
    <ul class="process_list">
      <li>
        <router-link to="/flow_chart">
          <div class="info">
            <div class="top">
              <div class="title">
                <i class="icon iconfont icon-process"></i>
                <span>【日常工作-软件开发部(2019)】</span>
              </div>
              <span>采购流程</span>
            </div>
            <div class="bottom">
              <span>行政后勤审批</span>
              <span class="date">申请日期：2019-03-05</span>
            </div>
          </div>
          <div class="arrow_right">
            <i class="icon iconfont icon-arrow-right"></i>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/flow_chart">
          <div class="info">
            <div class="top">
              <div class="title">
                <i class="icon iconfont icon-process"></i>
                <span>【日常工作-软件开发部(2019)】</span>
              </div>
              <span>采购流程</span>
            </div>
            <div class="bottom">
              <span>行政后勤审批</span>
              <span class="date">申请日期：2019-03-05</span>
            </div>
          </div>
          <div class="arrow_right">
            <i class="icon iconfont icon-arrow-right"></i>
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
      
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";

.process {
  width: 100%;
}
.process_list {
  li {
    font-size: 28px;
    background: #fff;
    padding: 20px;
    border-bottom: 1px solid #eee;
    a {
      display: flex;
      justify-content: space-between;
      color: #454545;
    }
    
    .info {
      width: 650px;
    }
    .top, .bottom {
      i {
        color: @primary;
        font-size: 30px;
      }
      display: flex;
      justify-content: space-between;
      .date {
        color: #999;
      }
    }
    .bottom {
      margin-top: 10px;
      span:nth-child(1) {
        color: @primary;
      }
    }
    .arrow_right {
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 35px;
        color: #999;
      }
    }
  }
}

</style>
