import React from 'react'
import './style.scss'
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'
import { Layout, Menu,Avatar} from 'antd';
const { Header} = Layout;


const AppHeader:React.FC<{}>=function AppHeader(props){
  return (
    <Header className="app-header">
      <div className="logo">
        <img src={logo1} alt=""/>
        <img src={logo2} alt=""/>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        className="menu"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">
        <Avatar style={{ backgroundColor: '#0B5475' }} icon="user" /><span className="title">管理员</span>
        </Menu.Item>
        <Menu.Item key="2">退出</Menu.Item>
      </Menu>
    </Header>
  )
}

export default AppHeader;