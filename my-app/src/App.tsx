import React, {Suspense} from 'react';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import Loading from './pages/common/loading'
import routes from './routes'
import Login from './pages/common/login'
import {useSelector} from 'react-redux'
import Header from './layout/header'
import Sider from './layout/sider'
import AppScroll from './components/AppScroll/AppScroll'
import Breadcrumb from './layout/breadcrumb'
import { Layout} from 'antd';
const {Content} = Layout;

const AppLayout:React.FC<{}>=function AppLayout(){

  const role=useSelector(state=>(state as any).get('root').get('userInfo').get('role'));

  return (
    <Layout className="app">
      {/* 头部 */}
      <Header/>
      <Layout>
        {/* 侧边栏 */}
        <AppScroll>
          <Sider/>
        </AppScroll>
        <Layout style={{  background: '#fff',padding: '0 24px 24px' }}>
          {/* 面包屑 */}
          <Breadcrumb/>
          {/* 内容 */}
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {/* 懒加载 */}
            <Suspense fallback={<Loading/>}>
              {renderRoutes(routes,role)}
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

const App: React.FC = () => {

  const isLogin=useSelector(state=>{
    return (state as any).get('root').get('isLogin');
  })

  // console.log(isLogin);
  

  return (
    <BrowserRouter>
      {/* 登录鉴权 */}
      <Switch>
        <Route path="/login" component={Login}/>
        <Route render={()=>{
          if (!isLogin) {
            return <Redirect to="/login"/>
          }else{
            return <AppLayout/>
          }
        }}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
