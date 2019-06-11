<template>
  <div>
    <Cell
      top="年假（请假1.5天）"
      right="2019-02-25(申请)"
      bottom="2019-03-10~2019-03-11"
      left="2019-02-28(申请中)"
      link="/leavedetail"
    />
  </div>
</template>

<script>
import Cell from "@/components/Cell"

export default {
  components: {
    Cell
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
