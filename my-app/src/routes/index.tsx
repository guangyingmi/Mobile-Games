import React, {lazy} from 'react'
import {Redirect} from 'react-router-dom'
import {RouteConfig} from 'react-router-config'


const routes: RouteConfig[] = [
  {
    path: '/',
    component: lazy(()=>import('../pages/common/home')),
    exact: true,
    breadcrumb: [
      {title: '首页'}
    ]
  },
  {
    path: '/analysis/user',
    component: lazy(()=>import('../pages/analysis/analysis-use')),
    breadcrumb: [
      {title: '统计'},
      {title: '用户分析'}
    ]
  },
  {
    path: '/analysis/order',
    component: lazy(()=>import('../pages/analysis/analysis-order')),
    breadcrumb: [
      {title: '统计'},
      {title: '订单分析'}
    ]
  },
  {
    path: '/goods/manager',
    component: lazy(()=>import('../pages/goods/goods-manager')),
    breadcrumb: [
      {title: '商品'},
      {title: '商品管理'}
    ]
  },
  {
    path: '/goods/edit/:type',//add  modify
    component: lazy(()=>import('../pages/goods/goods-edit')),
    breadcrumb: [
      {title: '商品'},
      {title: '商品管理', to: '/goods/manager'},
      {title: '编辑商品'}
    ]
  },
  {
    path: '/category/manager',
    component: lazy(()=>import('../pages/category/category-manager')),
    breadcrumb: [
      {title: '分类'},
      {title: '分类管理'}
    ]
  },
  {
    path: '/order/manager',
    component: lazy(()=>import('../pages/order/order-manager')),
    breadcrumb: [
      {title: '订单'},
      {title: '订单管理'}
    ]
  },
  {
    path: '/order/detail/:id',
    component: lazy(()=>import('../pages/order/order-detail')),
    breadcrumb: [
      {title: '订单'},
      {title: '订单管理', to: '/order/manager'},
      {title: '查看订单'}
    ]
  },
  {
    path: '/setting/permission/manager',
    component: lazy(()=>import('../pages/setting/permission-manager')),
    breadcrumb: [
      {title: '设置'},
      {title: '权限管理'}
    ]
  },
  {
    path: '/setting/permission/edit/:type',//add modify
    component: lazy(()=>import('../pages/setting/permission-edit')),
    breadcrumb: [
      {title: '设置'},
      {title: '权限管理', to: '/setting/permission/manager'},
      {title: '编辑权限'},
    ]
  },
  {
    path: '/setting/account/manager',
    component: lazy(()=>import('../pages/setting/account-manager')),
    breadcrumb: [
      {title: '设置'},
      {title: '账户管理'}
    ]
  },
  {
    path: '/setting/account/edit/:type',//add modify
    component: lazy(()=>import('../pages/setting/account-edit')),
    breadcrumb: [
      {title: '设置'},
      {title: '账户管理', to: '/setting/account/manager'},
      {title: '编辑账户'}
    ]
  },
  //错误页面
  {
    path: '/error',
    component: lazy(()=>import('../pages/common/error'))
  },
  // 没有权限的页面
  {
    path: '/forbidden',
    component: lazy(()=>import('../pages/common/forbidden'))
  },
  // 路径错误
  {
    path: '/not-match',
    component: lazy(()=>import('../pages/common/not-match'))
  },
  {
    path: '**',
    render: ()=><Redirect to="/not-match" />
  }
]


export default routes;