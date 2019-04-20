<template>
  <div style="width: 100%;">
    <div class="home_top">
      <div class="home_title">
        <span>个人办公，轻松工作</span>
      </div>
      <div class="header_wrap">
        <div class="header_img">
          <img  />
        </div>
        <span>您今天还未签到！</span>
        <div class="goSign">
          <router-link to="/signin">
            <i>立即签到</i><van-icon name="arrow" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="myinfo_wrap">
      <ul class="myinfo">
        <li v-for="(item, index) in infoList" :key="index">
          <router-link :to="item.link"> 
            <span>{{item.value}}</span>
            <div class="img_text">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <JCard title="待办工作">
        <ul class="agency_work">
          <li v-for="(item, index) in works" :key="index">
            <router-link :to="item.url">
              <div class="icon_wrap">
                <i :class="item.icon"></i>
              </div>
              <span>{{item.title}}</span>
            </router-link>
          </li>
        </ul>
      </JCard>
    </div>
    <div class="applyList">
      <ul class="applyListul">
        <li v-for="(item, index) in applys" :key="index">
          <router-link :to="item.url">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <JCard title="公告信息">
        <div>
          <van-cell value="2019-03-26" icon="label-o" is-link>
            <template slot="title">
              <span class="custom-text">关于3月份升职人员通知关于3月份升职人员通知</span>
            </template>
          </van-cell>
          <van-cell value="2019-03-26" icon="label-o" is-link>
            <template slot="title">
              <span class="custom-text">关于3月份升职人员通知关于3月份升职人员通知</span>
            </template>
          </van-cell>
          <van-cell value="2019-03-26" icon="label-o" is-link>
            <template slot="title">
              <span class="custom-text">关于3月份升职人员通知关于3月份升职人员通知</span>
            </template>
          </van-cell>
        </div>  
      </JCard>
    </div>
  </div>
</template>

<script>
import {backbtn} from "@/utils"
import JCard from "@/components/JCard"
import {infoList, works, applys} from "./datas"

export default {
  components: {
    JCard
  },
  data(){
    return {
      infoList,
      works,
      applys
    }
  },
  created(){
    
  },
  mounted(){
    
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/theme";
.home_top {
  height: 295px;
  background-color: @primary;
  .home_title {
    display: flex;
    padding: 20px;
    color: #fff;
    justify-content: flex-end;
  }
  .header_wrap {
    background-color: rgba(255,255,255, 0.7);
    margin: 20px;
    height: 100px;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    font-size: 30px;
    span {
      margin-top: 24px;
      line-height: 55px;
      color: #fe1802;
    }
    .goSign {
      margin-top: 24px;
      background: linear-gradient(to right, @primary, #66baff);
      height: 52px;
      border-radius: 26px 0 0 26px;
      width:202px;
      text-align: center;
      line-height: 55px;
      a {
        color:#fff;
      }
    }
    .header_img {
      width: 110px;
      height: 110px;
      overflow: hidden;
      border-radius: 50%;
      box-sizing: border-box;
      border: 10px solid #fff;
      position: absolute;
      top: -55px;
      left: 20px;
      background: #ddd;
      img {
        width:100%;
      }
    }
  }
}
.myinfo_wrap {
  margin:0 24px 20px;
  position: relative;
  height: 105px;
  .myinfo {
    position: absolute;
    height: 150px;
    background-color: #fff;
    width: 100%;
    top: -45px;
    border-radius: 10px;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      font-size: 28px;
      a {
        color: #454545;
        padding-top: 20px;
        display: block;
      }
      .img_text {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        i {
          font-size: 38px;
        }
      }
      img {
        width:36px;
        height: 38px;
        margin: 2px 5px 0 0;
      }
      span {
        font-size: 30px;
      }
    }
  }
}

.agency_work {
  display: flex;
  flex-wrap: wrap;
  li {
    font-size: 24px;
    text-align: center;
    padding-bottom: 20px;
    width: 33.3%;
    a {
      color: #454545;
    }
    .icon_wrap {
      margin:20px auto 10px;
      display: flex;
      border:3px solid @primary;
      border-radius: 20px;
      width: 70px;
      height: 70px;
      align-items: center;
      justify-content: center;
      position: relative;
      i {
        font-size: 40px;
        color: @primary;
      }
    }
  }
}
.applyList {
  margin: 24px;
  .applyListul {
    display: flex;
    justify-content: space-between;
    li{
      background-color: #fff;
      border-radius: 10px;
      width: 220px;
      a {
        color: #454545;
        padding: 30px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        i {
          font-size: 50px;
          color: @primary;
        }
      }
    }
  }
  
}
.custom-text {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  display: block;
  width: 320px;
}
</style>
