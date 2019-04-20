<template>
  <div class="header">
    <div class="goback" @click="goback">
      <van-icon name="arrow-left" />
    </div>
    <span v-if="title">{{title}}</span>
    
    <ul v-if="!title" class="tab">
      <li v-for="(item, index) in tabs" :key="index">
        <a :class="{active: item.type==tabActive}" @click="handlenSwitch(item.type)">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabActive:{
      default: '',
    },
    title: {
      type: String,
      default: ''
    },
    tabs: {
      type: Array,
      default: ()=>[]
    }
  },
  data(){
    return {

    }
  },
  methods: {
    goback(){
      this.$router.go('-1')
    },
    handlenSwitch(type){
      this.$emit('handlenSwitch', type)
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
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  span {
    line-height: 85px;
  }
  .goback {
    position: absolute;
    font-size: 50px;
    top: 15px;
    left: 10px;
    width: 50px;
  }
}
.tab {
  width: 330px;
  display: flex;
  font-size: 24px;
  height: 52px;
  border:2px solid #fff;
  border-radius: 26px;
  overflow: hidden;
  li {
    flex: 1;
    a {
      display: block;
      line-height: 55px;
      color: #fff;
    }
    a.active{
      background: #fff;
      color: @primary;
    }
  }
}
</style>
