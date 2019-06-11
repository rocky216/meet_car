import Home from "@/views/home"
import Users from "@/views/Users"
import InfoStatis from "@/views/users/infoStatis"
import Mywork from "@/views/users/mywork"
import WorkApproval from "@/views/users/workApproval"
import Mynews from "@/views/users/mynews"
import MyComplaint from "@/views/users/mycomplaint"

export const routesDatas = [
  {
    title: "工作台",
    link: "/",
    component: Home,
    key: '0'
  },
  {
    key: "1",
    title: "个人中心",
    link: "/users",
    component: Users,
    children: [
      {
        key: "102",
        title: "信息统计",
        link: "/users/infostatis",
        component: InfoStatis
      },
      {
        key: "103",
        title: "我的工作",
        link: "/users/mywork",
        component: Mywork
      },
      {
        key: "104",
        title: "工作审批",
        link: "/users/workApproval",
        component: WorkApproval
      }, 
      {
        key: "105",
        title: "我的消息",
        link: "/users/mynews",
        component: Mynews
      }, 
      {
        key: "106",
        title: "个人投诉",
        link: "/users/mycomplaint",
        component: MyComplaint
      }, 
    ]
  }
]






let newRouteDatas = []

function handlenDatas(arr){
  _.each(arr, item=>{
    newRouteDatas.push(item)
    if(item.children && item.children.length>0){
      handlenDatas(item.children)
    }
  })
  return newRouteDatas
}

export const handlenData =  handlenDatas(routesDatas)