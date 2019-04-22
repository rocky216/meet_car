<template>
  <div class="signdetail">
    <Header title="会签" />
    <div>
      <van-field 
        v-for="(item, index) in signinfo"
        :key="index"
        :label="item.label"
        :value="item.value" 
        :readonly="item.readonly"
        :type="item.type"
        autosize
      />
    </div>
    <div class="persons">
      <van-panel title="会签人员列表">
        <ul class="content contentul">
          <li v-for="(item, index) in persons" :key="index">{{item}}</li>
        </ul>
      </van-panel>
    </div>
    <div class="persons">
      <van-panel title="会签相关资料">
        <van-cell-group>
          <van-cell title="4.13井冈山一日游活动">
            <van-icon slot="right-icon" name="browsing-history-o" size="20px" color="#3888c8" />
          </van-cell>
          <van-cell title="4.13井冈山一日游活动">
            <van-icon slot="right-icon" name="browsing-history-o" size="20px" color="#3888c8" />
          </van-cell>
        </van-cell-group>
      </van-panel>
    </div>
    <div class="persons">
      <van-panel title="会签意见">
        <div class="content">
          <Cell
            top="曾广兴（通过）"
            right="2019-04-11 20:34:28"
            bottom="意见内容"
            left="附件"
            :noArrow="true"
          />
        </div>
      </van-panel>
    </div>
    <div class="submit">
      <van-button type="primary" size="normal" round block>发送</van-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Cell from "@/components/Cell"
import {signinfo, persons} from "./datas"

export default {
  components: {
    Header,
    Cell
  },
  data(){
    return {
      signinfo,
      persons
    }
  }
}
</script>

<style lang="less" scoped>
.submit {
  margin: 24px;
}
.signdetail {
  width: 100%;
}
.content {
  padding: 0 24px;
  font-size: 28px;
  color: #666;
}
.persons {
  margin-top: 20px;
}
.contentul {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 25%;
    line-height: 60px;
    text-align: center;
  }
}
</style>
