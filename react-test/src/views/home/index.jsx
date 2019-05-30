import React from "react"
import {connect} from "react-redux"
import {Card, Button, Badge, Avatar, Row, Col, Tabs, List, Icon, Table} from "antd"
import "./index.less"
import {columns, dataSourceList} from "./utils-columns"
import {Link, withRouter} from "react-router-dom"
import {addIndex} from "@/utils"

const TabPane = Tabs.TabPane;



class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      processList: [
        {title:"代办流程", value: 1},
        {title:"审批管理", value: 2},
        {title:"零件审批", value: 3},
        {title:"输出审批", value: 4},
        {title:"会签处理", value: 5},
        {title:"工艺审查", value: 6},
        {title:"工艺审批", value: 7}
      ],
      noticeList: [
        {title: "一般", value: 1},
        {title: "奖励", value: 2},
        {title: "惩罚", value: 3},
        {title: "投诉", value: 4},
      ],
      loopData: [
        { txt: "职业联赛" }, 
        { txt: "生日祝福" }, 
        { txt: "夏季工作时间更改" }, 
        { txt: "软件平台签到时间错误" },
        { txt: "冲压部试用员工转正通知" }
      ],
      tableTitle: [
        {title: "未完成输出物任务", value: 1},
        {title: "未完成总成/零件任务", value: 2},
        {title: "openissue", value: 3},
        {title: "ECR", value: 4},
        {title: "未完成发起流程", value: 5}
      ]
    }
  }

  getCol(){
    return columns.concat([{
      title: "操作",
      fixed: "right",
      width: 80,
      render(){
        return <Link to="/">提交工作</Link>
      }
    }])
  }
  jumpHandlen(){
    this.props.history.push("/infostatis")
  }

  render(){
    const { processList, noticeList, loopData, tableTitle} = this.state
    
    const extraText=(
      <div>
        <span style={{marginRight:'10px'}}>您今天还未签到，请尽快</span>
        <Button type="primary" onClick={this.jumpHandlen.bind(this)}>签到</Button>
      </div>
    )

    const tabListNoTitle = [
      {
        key: '1',
        tab: '重要消息',
      },
      {
        key: '2',
        tab: '一般消息',
      },
      {
        key: '3', 
        tab: '警告消息',
      },
    ]

    return (
      <div className="home">
        <Card 
          size="small"
          title="工作台" 
          bordered={true} 
          extra={extraText}
        >
          <Row style={{padding: "10px 0"}} >
            {processList.map((item, index)=>(
              <Col span={3} key={index}>
                <Badge count={item.value}>
                  <Avatar size="large" shape="square" icon="user" />
                </Badge>
                <p>{item.title}</p>
              </Col>
            ))}
          </Row>
        </Card>
        <Row className="mgt10" gutter={10}>
          <Col span={12}>
            <Card title={<div>
                <Icon type="notification" className="primaryColor mgr5" />
                <span >公告信息</span>
              </div>} >
              <Tabs 
                tabPosition="left" 
                type="line"
                size="small">
                {noticeList.map((item, index)=>(
                  <TabPane tab={item.title} key={item.value}>
                    <List>
                      {loopData.map((item, index)=>(
                        <List.Item key={index}>
                          <span>{item.txt}</span>
                        </List.Item>
                      ))}
                      
                    </List>
                  </TabPane>
                ))}
              </Tabs>
            </Card>
          </Col>
          <Col span={12} >
            <Card  tabList={tabListNoTitle} size="small">
              <div style={{height: '255px'}}>
                <List>
                  {loopData.map((item, index)=>(
                    <List.Item key={index}>
                      <span>{item.txt}</span>
                    </List.Item>
                  ))}
                </List>
              </div>
            </Card>
          </Col>
        </Row>
        <div className="mgt10" style={{background: "#fff", padding: "10px"}}>
          <Tabs type="card" tabBarGutter={10}>
            {tableTitle.map((item, index)=>(
              <TabPane tab={item.title} key={item.value}></TabPane>
            ))}
          </Tabs>
          <Table 
            columns={this.getCol()} 
            dataSource={ addIndex(dataSourceList) } 
            scroll={{ x: 1300 }}
          />
        </div>
        
      </div>
    )
  }
}

export default withRouter(Home)