<template>
  <div class="leave">
    <Header :tabs="tabs" :tabActive="tabActive" @handlenSwitch="(val)=>tabActive=val" />
    <div v-if="tabActive==1">
      <div>
        <van-field 
          v-for="(item, index) in leaveList"
          :key="index"
          :label="item.label"
          :value="item.value"
          :type="item.type"
          :placeholder="'请输入'+item.label" />
      </div>
      <div class="cost">
        <div class="cost_detail">
          <span>请假时间</span>
          <div class="add_cost_detail" @click="()=>visbile=true">
            <span style="margin-right: 5px;"><van-icon name="add-o" size="20px" /></span>
            <span>添加请假时间</span>
          </div>
        </div>
        <ul class="cost_item">
          <li>
            <table>
              <tr>
                <td>年假结余：</td>
                <td>
                  <span>0.0天</span>
                  <span>总计5天</span>
                </td>
              </tr>
              <tr>
                <td>调休假结余：</td>
                <td>
                  <span>0.0天</span>
                  <span>总计5天</span>
                </td>
              </tr>
              <tr>
                <td>已休法定假期：</td>
                <td>
                  <label>年假结余：</label>
                  <span>高温假 2.0 </span>
                  <span>婚假 0.0天</span>
                  <span>丧假 0.0天</span>
                  <span>陪产假 0.0天</span>
                  <span>产假 0.0天</span>
                  <span>妇女假 0.0天</span>
                </td>
              </tr>
            </table>
          </li>
        </ul>
      </div>
      <div class="cost">
        <div class="cost_detail">
          <span>相关资料</span>
          <div class="add_cost_detail">
            <span style="margin-right: 5px;"><van-icon name="add-o" size="20px" /></span>
            <span>添加附件</span>
          </div>
        </div>
        <div class="cost_item">
          <div class="cost_info">
            <img src="../../assets/images/reimburss.png" alt="">
            <span style="margin-right: 20px;">请假凭证</span>
          </div>
          <span>
            <van-icon name="closed-eye" color="#3888c8" />
            <van-icon name="delete" color="#3888c8" />
          </span>
        </div>
      </div>
    </div>
    <div v-if="tabActive==0">
      <Record/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import {leaveList} from "./datas"
import Record from "./record"

export default {
  components: {
    Header,
    Record
  },
  data(){
    return {
      tabs: [
        {name: '请假', type: 1},
        {name: '请假记录', type: 0}
      ],
      tabActive:0,
      leaveList
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";

.leave {
  width: 100%;
}
.cost {
  margin: 24px 0;
  .cost_item {
    font-size: 28px;
    li {
      background-color: #fff;
      table tr td:nth-child(1) {
        width: 200px;
        text-align: right;
        color: #454545;
      }
      table tr td {
        color: #666;
        padding: 10px 0;
      }
    }
  }
}
.cost_detail {
  font-size: 28px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  .add_cost_detail {
    display: flex;
    color: @primary;
  }
}
.cost_item {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  .cost_info {
    display: flex;
    font-size: 30px;
    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
