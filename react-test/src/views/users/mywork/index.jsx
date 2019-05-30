import React from "react"
import {Tree, Input, Card, Select, Menu, Dropdown, Icon} from "antd"
import {taskList} from "./datas"
import "./index.less"

const { TreeNode } = Tree;
const { Option } = Select;

class Mywork extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      taskList,
      menuList: [
        {title: "添加专业" },
        {title: "修改阶段" },
        {title: "延期工作" },
        {title: "删除" },
        {title: "终结阶段" },
        {title: "设置为关键工作" },
      ]
    }
  }

  getTaskList(item, opt){ //handlenEidtTitle
    const {taskList} = this.state
    let key = String(item.key)
    let arr = key.split('')
    
    this.recurIndex(arr, item.key, taskList, opt)
    this.setState({taskList})
  }
  handlenEidtTitle(item){
    this.getTaskList(item, {editIs: true})
  }
  handleBlur(item){
    this.getTaskList(item, {blur: true})
  }

  changeTxt(item, e){
    this.getTaskList(item, {editTxt: e.target.value})
  }

  handlenBOM(item, value){
    this.getTaskList(item, {editBom: value})
  }

  recurIndex(arr, strKey, obj, opt){
    
    var i = 0
    obj = obj[arr[i]-1]
    arr.splice(i,1)
    i++
    
    if(obj.key==strKey){
      if(opt.editIs){
        obj.eidtTitle = true
      }
      if(opt.editTxt){
        obj.title = opt.editTxt
      }
      if(opt.blur){
        obj.eidtTitle = false
      }
      if(opt.editBom>-1){
        obj.BOM = opt.editBom
      }
      
    }
    if(obj.children && i<=arr.length){
      this.recurIndex(arr, strKey, obj.children, opt)
    }
    return obj
  }

  getIndexArr(taskList, keyStr){
    _.each(taskList, (item, index)=>{
      if(item.key==keyStr){
        return index
      }else{
        item.children?this.getIndexArr(taskList, keyStr): null
      }
    })

  }

  menuList(){
    const { menuList } = this.state
    return (
      <Menu>
        {menuList.map((item, index)=>(
          <Menu.Item key={index}>
            <a href="javascript:;">{item.title}</a>
          </Menu.Item>
        ))}
        
      </Menu>
    )
  }

  NodeInfo(item){
    return (
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}} >
        <span>
          {item.eidtTitle?<Input 
            ref={(node)=>node?node.focus():null}
            value={item.title} 
            size="small" 
            style={{width:'150px'}}
            onChange={this.changeTxt.bind(this, item)}
            onBlur={this.handleBlur.bind(this, item)}
            />:<span onDoubleClick={this.handlenEidtTitle.bind(this, item)} >{item.title}</span>}
        </span>
        <div className="listInfo">
          <span>
            <Select 
              value={item.BOM} 
              size="small" 
              onSelect={this.handlenBOM.bind(this, item)} 
              style={{width: '50px'}}>
              <Option value={1}>是</Option>
              <Option value={0}>否</Option>
            </Select>
          </span>
          <span>{item.personCharge}</span>
          <span>{item.workhours}</span>
          <span className="date">{item.startTime}</span>
          <span className="date">{item.endTime}</span>
          <span>{item.progress}%</span>
          <span>
            <Dropdown overlay={this.menuList()} trigger={["click"]}>
              <Icon type="caret-down" />
            </Dropdown>
          </span>
        </div>
      </div>
    )
  }

  NodeElement(obj){ 
    return (
      <TreeNode title={this.NodeInfo(obj)} key={obj.key}>
        { 
          obj.children?obj.children.map(item=>this.NodeElement(item))
          :null
        }
      </TreeNode>
    )
  }
  render(){
    const { taskList } = this.state
    
    return (
      <div className="mywork">
        <Card title="任务管理">
          <Tree showLine  defaultExpandAll onSelect={this.onSelect} onExpand={this.onExpand}>
            {this.NodeElement(taskList[0])}
          </Tree>
        </Card>
      </div>
    )
  }
}

export default Mywork