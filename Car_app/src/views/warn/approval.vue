<template>
  <div class="approval">
    <Header title="计划审批" />
    <div>
      <van-panel title="项目信息" >
        <ul class="content">
            <li>项目名称：<span>SE-SV91材料利用率</span></li>
            <li>开始日期：<span>2019/01/05</span></li>
            <li>结束日期：<span>2019/12/30</span></li>
          </ul>
      </van-panel>
      <van-panel title="项目工时统计" >
        <div class="statis_wrap">
          <table class="statis">
            
              <tr>
                <th>专业</th>
                <th>规划工时</th>
                <th>计划工时</th>
              </tr>
            
            
              <tr>
                <td>冲压</td>
                <td>1天</td>
                <td>1天</td>
              </tr>
          </table>
        </div>
      </van-panel>
      <van-panel title="审核意见" >
        <div class="statis_wrap">
          <table class="statis opinion">
            <tbody>
              <tr>
                <td style="width: 30%;">结果：</td>
                <td>
                  <van-radio-group v-model="radio" style="display: flex;">
                    <van-radio name="1" style="margin-right: 20px; ">通过</van-radio>
                    <van-radio name="2">不通过</van-radio>
                  </van-radio-group>
                </td>
              </tr>
              <tr>
                <td>回复：</td>
                <td>
                  <van-field type="textarea"  rows="3" placeholder="请输入回复"/>
                </td>
              </tr>
              <tr>
                <td></td>
                <td class="tip">
                  <span>注：由于手机上不方便查看项目计划，建议使用PC客户端审批计划</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </van-panel>
      <div class="submit">
        <van-button type="primary" size="normal" round block>发送</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header"

export default {
  components: {
    Header
  },
  data(){
    return {
      radio: "1"
    }
  }
}
</script>

<style lang="less" scoped>
.submit {
  margin: 24px;
}
.approval {
  width: 100%;
}
.content {
  font-size: 28px;
  padding: 0 24px;
  padding-bottom: 24px;
  li {
    line-height: 50px;
    span {
      color: #666;
    }
  }
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
