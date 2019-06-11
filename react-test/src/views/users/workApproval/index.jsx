import React from "react"
import {Row, Col, Form, Input, Card, Select, DatePicker, Checkbox, Button } from "antd"
import locale from 'antd/lib/date-picker/locale/zh_CN';

const {Option} = Select
const {RangePicker } = DatePicker

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

class WorkApproval extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  render(){
    const {getFieldDecorator } = this.props.form;

    return (
      <div className="workApproval">
        <Card>
          <Form>
            <Row>
              <Col span={6}>
                <Form.Item {...formItemLayout} label="项目名称">
                  {getFieldDecorator('project_name')(
                    <Input/>
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item {...formItemLayout} label="专业">
                  {getFieldDecorator('major')(
                    <Select>
                      <Option value="1">冲压</Option>
                      <Option value="2">焊装</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item {...formItemLayout} label="提交时间">
                  {getFieldDecorator('datetime')(
                    <RangePicker locale={locale} format="YYYY-MM-DD" />
                  )}
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item {...formItemLayout} label="状态">
                  {getFieldDecorator('status')(
                    <Select>
                      <Option value="1">已完成</Option>
                      <Option value="2">未完成</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item {...formItemLayout} label="工作名称">
                  {getFieldDecorator('work_name')(
                    <Input />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item {...formItemLayout} label="工作人员">
                  {getFieldDecorator('work_person')(
                    <Input />
                  )}
                </Form.Item>
              </Col>
              <Col span={2}>
                <Form.Item labelCol={{span: 15}} wrapperCol={{span: 3}} label="外包">
                  {getFieldDecorator('outsource')(
                    <Checkbox />
                  )}
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item >
                  <Button type="primary">搜索</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(WorkApproval)