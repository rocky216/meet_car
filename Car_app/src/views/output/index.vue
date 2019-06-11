<template>
  <div class="output">
    <Header :tabs="tabs" :tabActive="tabActive" @handlenSwitch="(val)=>tabActive=val" />
    <div>
      <SearchCell
        label1="工作人员"
        label2="工作名称"
        labeldate="审批日期"
      />
    </div>
    <div class="outputlist">
      <Cell
        top="客户维护访问(根据实际情况)"
        right="孙凤康"
        bottom="日常工作-实施部（2019）"
        left="审批：2019-02-25"
        link="/outputapproval"
      />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import SearchCell from "@/components/SearchCell"
import Cell from "@/components/Cell"

export default {
  components: {
    Header,
    SearchCell,
    Cell
  },
  data(){
    return {
      tabs: [
        {name: '待审批输出物', type: 1},
        {name: '已审批流程', type: 0}
      ],
      tabActive:1,
    }
  }
}
</script>

<style lang="less" scoped>
.output {
  width: 100%;
  font-size: 28px;
}
.outputlist {
  margin-top: 20px;
}
</style>
