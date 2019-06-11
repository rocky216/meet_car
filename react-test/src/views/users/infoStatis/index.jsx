import React from "react"
import {connect }  from "react-redux"
import {bindActionCreators} from "redux"
import {Row, Col, Card, Table } from "antd"
import { Link }  from "react-router-dom"
import {tabList1, tabList2, tabList3, tabList4, columns, dataSourceList} from "./datas"
import {addIndex} from "@/utils"
import {getSelectKey} from "@/actions/appAction"

class InfoStatis extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tabList1, 
      tabList2, 
      tabList3, 
      tabList4,
      activeTabKey1: "1",
      dataSourceList,
    }
  }
  
  componentWillMount(){
    this.props.actions.getSelectKey(['1', '102']) 
  }

  

  getCol(){
    return columns.concat([{
      title: "操作",
      render(){
        return <Link to="/infostatis">提交工作</Link>
      }
    }])
  }
  render(){
    const {tabList1, tabList2, tabList3, tabList4, activeTabKey1, dataSourceList} = this.state
    return (
      <div>
        <Row gutter={10}>
          <Col className="mgb10" span={12} size="small">
            <Card 
              tabList={tabList1}
              activeTabKey={activeTabKey1}
            >
              <Table columns={this.getCol()} dataSource={addIndex(dataSourceList)} />
            </Card>
          </Col>
          <Col className="mgb10" span={12} size="small">
            <Card 
              tabList={tabList2}
              activeTabKey={activeTabKey1}
            >
              <Table columns={this.getCol()} dataSource={addIndex(dataSourceList)} />
            </Card>
          </Col>
          <Col className="mgb10" span={12} size="small">
            <Card 
              tabList={tabList1}
              activeTabKey={activeTabKey1}
            >
              <Table columns={this.getCol()} dataSource={addIndex(dataSourceList)} />
            </Card>
          </Col>
          <Col className="mgb10" span={12} size="small">
            <Card 
              tabList={tabList4}
              activeTabKey={activeTabKey1}
            >
              <Table columns={this.getCol()} dataSource={addIndex(dataSourceList)} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapDispatchProps(dispatch){
  return {
    actions: bindActionCreators({getSelectKey}, dispatch)
  }
}

function mapStateProps(state){
  return {}
}

export default connect(mapStateProps, mapDispatchProps)(InfoStatis)