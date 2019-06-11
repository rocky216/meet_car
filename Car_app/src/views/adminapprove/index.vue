<template>
  <div class="adminapprove">
    <Header title="管理审批" />
    <div>
      <Cell 
        icon="icon iconfont icon-admin"
        top="SE-SK81材料利用率"
        right="变更计划审批"
        bottom="提交：2019-03-05"
        left="周期：2019/01/05~2019/12/05"
        link="/approval"
      />
      <Cell 
        icon="icon iconfont icon-admin"
        top="SE-SK81材料利用率"
        right="变更计划审批"
        bottom="提交：2019-03-05"
        left="周期：2019/01/05~2019/12/05"
        link="/approval"
      />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Cell from "@/components/Cell"

export default {
  components: {
    Header,
    Cell
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.adminapprove {
  width: 100%;
}
</style>
