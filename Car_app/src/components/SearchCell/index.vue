<template>
  <div class="searchForm">
    <van-cell-group>
      <van-field :label="label1+':'"  :placeholder="'请输入'+label1" />
      <van-field :label="label2+':'" :placeholder="'请输入'+label2" />
      <div class="search_date">
        <div class="label">{{labeldate+':'}}</div>
        <div>
          <span>2019-01-02</span>至<span>2019-01-02</span>
        </div>
        <div class="searchBtn">
          <van-icon name="search" color="#fff" size="18px" />
        </div>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  props: {
    label1:{
      type: String,
      default: ''
    },
    label2:{
      type: String,
      default: ''
    },
    labeldate: {
      type: String,
      default: ''
    }
  },
  data(){
    return {

    }
  },
  created(){
    console.log(this.formData)
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";
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
