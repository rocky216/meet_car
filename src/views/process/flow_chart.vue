<template>
  <div class="flow_chart">
    <Header title="查看流程" />
    <div class="flow">
      <van-steps direction="vertical" :active="2">
        <van-step>
          <div>申请人张三</div>
          <span>2016-07-12 12:40</span>
        </van-step>
        <van-step>
          <div>项目经理（郑文杰）</div>
          <span>2016-07-11 10:00</span>
        </van-step>
        <van-step>
          <div>专业负责人（旷亮平）</div>
          <span>2016-07-10 09:30</span>
        </van-step>
        <van-step>
          <div>项目经理审批（曾小志）</div>
          <span>2016-07-10 09:30</span>
        </van-step>
        <van-step>
          <div>行政管理总监审批（刘瑞英）</div>
          <span>2016-07-10 09:30</span>
        </van-step>
      </van-steps>
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

    }
  }
}
</script>

<style lang="less" scoped>
.flow_chart {
  width: 100%;
  font-size: 28px;
}
.flow {
  padding-left: 100px;
  background-color: #fff;
}
</style>
