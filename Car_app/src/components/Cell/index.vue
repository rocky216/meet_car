<template>
  <div>
    <div class="cell">
      <router-link :to="link">
        <div class="info">
          <div class="top">
            <div class="title">
              <i :class="icon"></i>
              <span>{{top}}</span>
            </div>
            <span>{{right}}</span>
          </div>
          <div class="bottom">
            <span>{{left}}</span>
            <span class="date">{{bottom}}</span>
          </div>
        </div>
        <div class="arrow_right" v-if="!noArrow">
          <i class="icon iconfont icon-arrow-right"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    },
    bottom: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '/'
    },
    noArrow: {
      type: Boolean
    }
  },
  data(){
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";
.cell {
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
      font-size: 24px;
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
</style>
