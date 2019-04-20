<template>
  <div class="reimburs">
    <Header :tabs="tabs" :tabActive="tabActive" @handlenSwitch="(val)=>tabActive=val" />
    <div class="addreimburs">
      <div class="img">
        <img src="../../assets/images/reimburs.png" alt="">
      </div>
      <span>新增个人报销</span>
    </div>
    <div class="reimburs_wrap">
      <div>
        <van-field label="报销人"  v-model="value" placeholder="请输入报销人" />
        <van-field label="公司" required  v-model="value" placeholder="请选择公司" />
        <van-field label="项目" required  v-model="value" placeholder="请选择项目" />
        <van-field label="专业" required  v-model="value" placeholder="请选择专业" />
        <van-field label="部门" required  v-model="value" placeholder="请选择部门" />
        <van-field label="流程选择" required  v-model="value" placeholder="请选择流程" />
        <van-field label="事由" required  v-model="value" placeholder="请输入事由" />
      </div>
    </div>
    <div class="cost">
      <div class="cost_detail">
        <span>费用明细</span>
        <div class="add_cost_detail" @click="()=>visbile=true">
          <span style="margin-right: 5px;"><van-icon name="add-o" size="20px" /></span>
          <span>添加明细</span>
        </div>
      </div>
      <div class="cost_item">
        <div class="cost_info">
          <img src="../../assets/images/reimbursement.png" alt="">
          <span style="margin-right: 20px;">出差住房补贴</span>
          <div>
            <span>申请人：</span>
            <span style="color: #999">孙凤康</span>
          </div>
        </div>
        <span>
          <van-icon name="arrow" color="#666" />
        </span>
      </div>
      <div class="cost_item">
        <div class="cost_info">
          <img src="../../assets/images/reimbursement.png" alt="">
          <span style="margin-right: 20px;">出差住房补贴</span>
          <div>
            <span>申请人：</span>
            <span style="color: #999">孙凤康</span>
          </div>
        </div>
        <span>
          <van-icon name="arrow" color="#666" />
        </span>
      </div>
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
          <span style="margin-right: 20px;">报销凭证</span>
        </div>
        <span>
          <van-icon name="closed-eye" color="#3888c8" />
          <van-icon name="delete" color="#3888c8" />
        </span>
      </div>
    </div>
    <div class="submit">
      <van-button type="primary"  round block>提交个人报销</van-button>
    </div>

    <Detail 
      :visbile="visbile" 
      @handlenCancel="(val)=>visbile=false" 
      @handlenConfirm="()=>visbile=false"
    />

  </div>
</template>

<script>
import Header from "@/components/Header"
import Detail from "./detail"

export default {
  components: {
    Header,
    Detail
  },
  data(){
    return {
      tabs: [
        {name: '个人报销', type: 1},
        {name: '报销记录', type: 0}
      ],
      tabActive:1,
      value:'',
      visbile: false
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme.less";
.submit {
  margin: 24px;
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
.reimburs {
  width: 100%;
}
.addreimburs {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  font-size: 30px;
  line-height: 50px;
  padding: 15px 0;
  .img {
    width: 50px;
    height: 50px;
    background-color: @primary;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    img {
      width: 30px;
    }
  }
}
.reimburs_wrap {
  margin: 24px;
  background-color: #fff;
  padding:20px 40px;
  border-radius: 10px;
}
.cost {
  margin: 24px;
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
</style>
