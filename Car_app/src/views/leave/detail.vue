<template>
  <div class="detail">
    <Header title="请假申请详情" />
    <div>
      <van-field 
        v-for="(item, index) in leaveDetail"
        :key="index"
        :label="item.label"
        :value="item.value"
        :type="item.type"
        :readonly="item.readonly"
        :placeholder="'请输入'+item.label" />
    </div>
    <ul class="leaveType">
      <li>
        <div>
          <label>事假（2.0天）</label>
        </div>
        <span>2019-02-11 上午 ~ 2019-02-12 下午</span>
      </li>
      <li>
        <div>
          <label>调休（2.0天）</label>
        </div>
        <span>2019-02-15 上午 ~ 2019-02-16下午</span>
      </li>
    </ul>
    <div class="total">
      <span>合计请假4,0天</span>
    </div>
    <van-panel title="相关资料" >
      <van-cell title="加班凭证" value="下载" />
    </van-panel>
    <table class="table">
      <tr>
        <th>审批人</th>
        <th>审批节点</th>
        <th>审批结果</th>
        <th>审批意见</th>
        <th>审批时间</th>
      </tr>
      <tr>
        <td>刘端英</td>
        <td>行政管理总监</td>
        <td>通过</td>
        <td>同意，请安排好工作</td>
        <td>2019-02-11 11:39</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from "@/components/Header"
import {leaveDetail} from "./datas"

export default {
  components: {
    Header
  },
  data(){
    return {
      leaveDetail
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";

.detail {
  width:100%;
  color: #454545;
  font-size: 28px;
}
.leaveType {
  li {
    background-color: #fff;
    padding:10px 20px;
    border-bottom: 1px solid #eee;
    span {
      color: #666;
    }
  }
}
.total {
  display: flex;
  justify-content: flex-end;
  background-color: #fff;
  padding: 10px 020px;
  color: @primary;
}
.table {
  margin-top: 20px;
  width:100%;
  background-color:#fff;
  font-size: 20px;
}
</style>
