<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item 
        v-for="(item, index) in workrecords" 
        :key="index"
        :title="'提交日期：'+item.date" 
        :name="index+1">
        <ul>
          <li>
            <label>工作地点</label>
            <span>{{item.address}}</span>
          </li>
          <li>
            <label>工作区间</label>
            <span>{{item.time}}</span>
          </li>
          <li>
            <label>完成率</label>
            <span>{{item.rate}}</span>
          </li>
          <li>
            <label>消耗工时</label>
            <span>{{item.workhours}}</span>
          </li>
          <li>
            <label>完成工时</label>
            <span>{{item.completehours}}</span>
          </li>
          <li>
            <label>工作内容</label>
            <span>{{item.content}}</span>
          </li>
        </ul>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import {workrecords} from "./datas"

export default {
  data(){
    return {
      activeNames: ['1'],
      workrecords
    }
  }
}
</script>

<style lang="less" scoped>

</style>
