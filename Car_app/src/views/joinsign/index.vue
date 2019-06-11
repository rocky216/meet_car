<template>
  <div class="joinsign">
    <Header :tabs="tabs" :tabActive="tabActive" @handlenSwitch="(val)=>tabActive=val" />
    <div>
      <van-cell-group>
        <van-field label="创建人" placeholder="请输入用户名" />
        <van-field label="标题" placeholder="请输入用户名">
          <van-button slot="button" size="small" type="primary">搜索</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <div class="cellList">
      <Cell
        icon="icon iconfont icon-untreated"
        top="发外网功能评审"
        right="Openlssue"
        bottom="创建：2019-02-28"
        left="创建人：孙凤康"
        link="/joinsign/detail"
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
      tabs: [
        {name: '未处理会签', type: 1},
        {name: '已处理会签', type: 0}
      ],
      tabActive:1,
    }
  }
}
</script>

<style lang="less" scoped>
.joinsign {
  width: 100%;
}
.cellList {
  margin-top: 20px;
}
</style>
