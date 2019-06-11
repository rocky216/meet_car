<template>
  <div class="detail">
    <Header title="消息详情" />
    <div class="detail_news">
      <div class="title">【工作通知】 项目 日常工作-软件开发部(2019) 需求分析文档 中 日常管理工作计划 零件/总成工作委派</div>
      <table class="info_tab">
        <tr>
          <td>发送人：<span>系统消息</span></td>
          <td>类型：<span>项目消息</span></td>
        </tr>
        <tr>
          <td>接收时间：<span>2019-04-09 12:23:46</span></td>
          <td>分类：<span>重要</span></td>
        </tr>
      </table>
      <div class="content">
        <van-field 
          v-for="(item, index) in newsInfo"
          :key="index"
          :label="item.title" 
          :type="item.type"
          :value="item.value"
          autosize
          :readonly="item.readonly"
          :placeholder="item.placeholder"
        />
        <div style="margin: 20px 0;">
          <van-button type="primary" block>回复</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import {newsInfo} from "./datas"

export default {
  components: {
    Header
  },
  data(){
    return {
      newsInfo
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
}
.detail_news {
  background: #fff;
  font-size: 28px;
  padding: 24px;
  .title {
    font-size: 32px;
  }
  .info_tab {
    margin: 10px 0 30px;
    td {
      padding:5px 10px;
      font-size: 26px;
      color: #666;
      span {
        color: #999;
      }
    }
  }
  .content {
    color: #454545;
    font-size: 30px;
  }
}
</style>
