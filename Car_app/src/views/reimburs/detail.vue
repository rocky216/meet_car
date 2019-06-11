<template>
  <div>
    <van-dialog
      :value="visbile"
      title="报销明细"
      @cancel="handlenCancel"
      @confirm="handlenConfirm"
      show-cancel-button
    >
      <div class="detail">
        <van-cell-group>
          <van-field label="报销类别" required v-model="value" placeholder="请选择报销类别" />
          <van-field label="费用类型" required v-model="value" placeholder="请选择费用类型" />
          <van-field label="费用名称" required v-model="value" placeholder="请选择费用名称" />
          <van-field label="出资类别" required v-model="value" placeholder="请选择出资类别" />
          <van-field label="出资人" required v-model="value" placeholder="请输入出资人" />
          <van-field label="发生时间" required v-model="value" placeholder="发生时间" />
          <van-field label="结束时间" required v-model="value" placeholder="结束时间" />
          <van-field label="备注"  v-model="value" placeholder="备注" />
        </van-cell-group>
      </div>
    </van-dialog>
  </div>
</template>
<script>
export default {
  props: {
    visbile: {
      type: Boolean
    }
  },
  data(){
    return {
      value: ''
    }
  },
  methods: {
    handlenCancel(){
      this.$emit('handlenCancel')
    },
    handlenConfirm(){
      this.$emit('handlenConfirm')
    }
  }
}
</script>

<style lang="less" scoped>
.detail{
  padding: 0 20px;
}
</style>
