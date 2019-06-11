import React from "react"
import {notification, Icon} from "antd"
import cookie from 'react-cookies'

export function addIndex(arr){
  if(!_.isArray(arr)) return arr
  _.each(arr, (item, index)=>{
    item.key = index+1
  })
  return arr
}


export function notifyTips(message, desc, type){
  notification.open({
    message: message,
    description: desc, 
    icon: type=='success'?
          <Icon type="check-circle"  style={{color: '#f5222d'}} />
          :<Icon type="close-circle"  style={{color: '#f5222d'}} />,
  });
}

export function setToken(str){
  const expires = new Date()
  expires.setDate(Date.now() + 1000 * 60 * 1)
  cookie.save("token", str, {
    path: '/',
    expires,
    maxAge: 1000,
  })
}

export function RemoveToken(){
  cookie.remove('token', { path: '/' })
}

export function getToken(key){
  return cookie.load(key)
}