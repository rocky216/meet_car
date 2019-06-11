<template>
  <div class="jcard">
    <div class="top">
      <div class="title">
        <i class="icon"></i>
        <span>{{title}}</span>
      </div>
      <router-link v-if="link" :to="link">更多</router-link>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }, 
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";

.jcard {
  background: #fff;
  border-radius: 10px;
  margin: 0 24px;
}
.top {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 28px;
  .title {
    display: flex;
    i {
      width:20px;
      height: 20px;
      background: @primary;
      border-radius: 50%;
      margin: 10px 10px 0 0;
    }
  }
  
  a {
    color: #666;
  }
}
</style>

