<template>
<div class="submitwork">
  <Header :tabs="tabs" :tabActive="tabActive" @handlenSwitch="(val)=>tabActive=val" />
  <div class="submit" v-if="tabActive==1">
    <van-cell-group>
      <van-field 
        v-for="(item, index) in workData"
        :key="index"
        :label="item.label" 
        border 
        :type="item.type" 
        :value="item.value" 
        :required="item.required"
        :readonly="item.readonly"
      />
    </van-cell-group>
    <div class="cost">
      <div class="cost_detail">
        <span>上传工作附件</span>
        <div class="add_cost_detail">
          <span style="margin-right: 5px;"><van-icon name="add-o" size="20px" /></span>
          <span>上传附件</span>
        </div>
      </div>
      <div class="cost_item">
        <div class="cost_info">
          <img src="../../assets/images/reimburss.png" alt="">
          <span style="margin-right: 20px;">报销凭证</span>
        </div>
        <span>
          <van-icon name="closed-eye" color="#3888c8" />
          <van-icon name="delete" color="#3888c8" />
        </span>
      </div>
    </div>
    <div class="submit">
      <van-button type="primary" size="small" round block>提交个人报销</van-button>
    </div>
  </div>
  <div class="work_record" v-if="tabActive==0">
    <WorkRecord/>
  </div>
</div>
</template>

<script>
import Header from "@/components/Header"
import {workData} from "./datas"
import WorkRecord from "./work_record"

export default {
  components: {
    Header,
    WorkRecord
  },
  data(){
    return {
      tabs: [
        {name: '提交工作', type: 1},
        {name: '工作记录', type: 0}
      ],
      tabActive:0,
      workData
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";
.submitwork {
  width: 100%;
}
.cost {
  margin: 24px;
}
.cost_detail {
  font-size: 28px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  .add_cost_detail {
    display: flex;
    color: @primary;
  }
  
}
.cost_item {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  .cost_info {
    display: flex;
    font-size: 30px;
    img {
      width: 40px;
      height: 40px;
    }
  }
}
.submit {
  margin: 24px;
}
</style>
