<template>
  <div class="header">
    <div class="goback" @click="goback">
      <van-icon name="arrow-left" />
    </div>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data(){
    return {

    }
  },
  methods: {
    goback(){
      this.$router.go('-1')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";
.header {
  background-color: @primary;
  color: #fff;
  height: 80px;
  position: relative;
  text-align: center;
  span {
    line-height: 85px;
  }
  .goback {
    position: absolute;
    font-size: 50px;
    top: 15px;
    width: 50px;
  }
}
</style>
