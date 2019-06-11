<template>
  <div class="approval">
    <Header title="输出物工作审批" />
    <div>
      <van-field 
      v-for="(item, index) in detaillist"
      :key="index"
      :label="item.label"
      :value="item.value"
      :readonly="item.readonly"
      :type="item.type"
      autosize
      />
    </div>
    <van-panel title="审核意见" >
      <div class="statis_wrap">
        <table class="statis opinion">
          <tbody>
            <tr>
              <td style="width: 30%;">结果：</td>
              <td>
                <van-radio-group v-model="radio" style="display: flex;">
                  <van-radio name="1" style="margin-right: 20px; ">通过</van-radio>
                  <van-radio name="2" style="margin-right: 20px; ">不通过</van-radio>
                  <van-radio name="3">驳回</van-radio>
                </van-radio-group>
              </td>
            </tr>
            <tr>
              <td>反馈内容：</td>
              <td>
                <van-field type="textarea"  rows="3" placeholder="请输入反馈内容"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </van-panel>
    <div class="submit">
      <van-button type="primary" size="normal" round block>提交审批意见</van-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import {detaillist} from "./datas"

export default {
  components: {
    Header
  },
  data(){
    return {
      detaillist,
      radio: "1"
    }
  }
}
</script>

<style lang="less" scoped>
.approval {
  width: 100%;
}
.statis_wrap {
  margin: 0 24px;
  padding: 20px 0;
  .statis {
    width: 100%;
    font-size: 28px;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    border-spacing: 0px;
    th, td {
      padding: 10px;
      text-align: center;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }
  }
  table.opinion {
    border: none;
    box-sizing: border-box;
    th, td { 
      border: none;
    }
    td.tip {
      text-align: left;
      font-size: 20px;
      color: #ff4c4c;
    }
  }
}
</style>
