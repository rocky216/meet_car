import React from "react"
import {connect } from "react-redux"
import {Row, Col, Card, Form, Input, Icon, Button, Checkbox } from "antd"
import {notifyTips, setToken} from "@/utils"


class Login extends React.Component {

  handlenSubmit(e){
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const  {username, password} = values
        if(username != 'gice255') return notifyTips('用户名错误！')
        if(password != '123456') return notifyTips('密码错误！')
        setToken('gice255')
        this.props.history.push('/')
      }
    })
  }

  render(){
    const {getFieldDecorator} = this.props.form
    
    return (
      <div>
        <Row style={{paddingTop: '10%'}}>
            <Col span={10} offset={7}>
              <Card title="用户登录" headStyle={{background:'#1890ff', color:'#fff'}}>
                <Form onSubmit={this.handlenSubmit.bind(this)} >
                  <Form.Item>
                    {getFieldDecorator('username', {
                      rules: [
                        { required: true, message: '请输入用户名！' }
                      ],
                    })(
                      <Input
                        size="large"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('password', {
                      rules: [
                        { required: true, message: '请输入密码！' }
                      ],
                    })(
                      <Input
                        size="large"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                      />,
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Button size="large" type="primary" htmlType="submit" block >登录</Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
      </div>
    )
  }
}

function mapStateProps(){
  return {

  }
}

export default connect(mapStateProps)(Form.create()(Login))