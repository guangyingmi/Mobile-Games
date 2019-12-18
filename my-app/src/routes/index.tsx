import React, {lazy} from 'react'
import {Redirect} from 'react-router-dom'
import {RouteConfig} from 'react-router-config'


const routes: RouteConfig[] = [
  //================首页================
  {
    path: '/',
    component: lazy(()=>import('../pages/common/home')),
    exact: true,
    breadcrumb: [
      {title: '首页'}
    ]
  },

  //================会议室管理================
  //----------------1.会议室列表----------------
  {
    path: '/conferenceManage/list/show',
    component: lazy(()=>import('../pages/conferenceManage/conference-list/root')),
    breadcrumb: [
      {title: '会议室管理'},
      {title: '会议室列表'}
    ]
  },
  //新增会议室
  {
    path: '/conferenceManage/list/edit/add',
    component: lazy(()=>import('../pages/conferenceManage/conference-list/children/add')),
    breadcrumb: [
      {title: '会议室管理'},
      {title: '会议室列表', to: '/conferenceManage/list/show'},
      {title: '新增会议室'}
    ]
  },
  //会议室详情
  {
    path: '/conferenceManage/list/edit/detail/:id',
    component: lazy(()=>import('../pages/conferenceManage/conference-list/children/detail')),
    breadcrumb: [
      {title: '会议室管理'},
      {title: '会议室列表', to: '/conferenceManage/list/show'},
      {title: '会议室详情'}
    ]
  },
  //会议室预定查询
  {
    path: '/conferenceManage/list/edit/query',
    component: lazy(()=>import('../pages/conferenceManage/conference-list/children/query')),
    breadcrumb: [
      {title: '会议室管理'},
      {title: '会议室列表', to: '/conferenceManage/list/show'},
      {title: '会议室预定查询'}
    ]
  },

  //----------------2.会议室预定列表----------------
  {
    path: '/conferenceManage/preList/show',
    component: lazy(()=>import('../pages/conferenceManage/conference-preList/root')),
    breadcrumb: [
      {title: '会议室管理'},
      {title: '会议室预定列表'}
    ]
  },
  //新增会议室预定
  {
    path: '/conferenceManage/preList/edit/add',
    component: lazy(()=>import('../pages/conferenceManage/conference-preList/children/add')),
    breadcrumb: [
      {title: '会议室管理'},
      {title: '会议室预定列表', to: '/conferenceManage/preList/show'},
      {title: '新增会议室预定'}
    ]
  },
  //会议室预定详情
  {
    path: '/conferenceManage/preList/edit/detail/:id',
    component: lazy(()=>import('../pages/conferenceManage/conference-preList/children/detail')),
    breadcrumb: [
      {title: '会议室管理'},
      {title: '会议室预定列表', to: '/conferenceManage/preList/show'},
      {title: '会议室预定详情'}
    ]
  },



  //================车辆管理================
  //----------------1.车辆列表----------------
  {
    path: '/vehicleManage/carList/show',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-carList/root')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆列表'}
    ]
  },
  //新增车辆
  {
    path: '/vehicleManage/carList/edit/add',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-carList/children/add')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆列表', to: '/vehicleManage/carList/show'},
      {title: '新增车辆'}
    ]
  },
  //车辆详情
  {
    path: '/vehicleManage/carList/edit/detail/:id',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-carList/children/detail')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆列表', to: '/vehicleManage/carList/show'},
      {title: '车辆详情'}
    ]
  },
  //用车申请查询
  {
    path: '	/vehicleManage/carList/edit/query',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-carList/children/query')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆列表', to: '/vehicleManage/carList/show'},
      {title: '用车申请查询'}
    ]
  },



  //----------------2.用车申请列表----------------
  {
    path: '/vehicleManage/useList/show',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-useList/root')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '用车申请列表'}
    ]
  },
  //用车申请
  {
    path: '/vehicleManage/useList/edit/apply',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-useList/children/apply')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '用车申请列表', to: '/vehicleManage/useList/show'},
      {title: '用车申请'}
    ]
  },
  //用车申请详情
  {
    path: '/vehicleManage/useList/edit/detail/:id',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-useList/children/detail')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '用车申请列表', to: '/vehicleManage/useList/show'},
      {title: '用车申请详情'}
    ]
  },

  //----------------3.车辆保险列表----------------
  {
    path: '/vehicleManage/insureList/show',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-insureList/root')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆保险列表'}
    ]
  },
  //车辆保险登记
  {
    path: '/vehicleManage/insureList/edit/register',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-insureList/children/register')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆保险列表', to: '/vehicleManage/insureList/show'},
      {title: '车辆保险登记'}
    ]
  },
  //车辆保险详情
  {
    path: '/vehicleManage/insureList/edit/detail/:id',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-insureList/children/detail')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆保险列表', to: '/vehicleManage/insureList/show'},
      {title: '车辆保险详情'}
    ]
  },

  //----------------4.车辆维修保养----------------
  {
    path: '/vehicleManage/maintenance/show',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-maintenance/root')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆维修保养'}
    ]
  },
  //车辆维修保养登记
  {
    path: '/vehicleManage/maintenance/edit/register',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-maintenance/children/register')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆保险列表', to: '/vehicleManage/maintenance/show'},
      {title: '车辆维修保养登记'}
    ]
  },
  //车辆维修保养登记详情
  {
    path: '/vehicleManage/maintenance/edit/detail/:id',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-maintenance/children/detail')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆保险列表', to: '/vehicleManage/maintenance/show'},
      {title: '车辆维修保养登记详情'}
    ]
  },

  //----------------5.车辆年检列表----------------
  {
    path: '/vehicleManage/annualList/show',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-annualList/root')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆年检列表'}
    ]
  },
  //车辆年检登记
  {
    path: '/vehicleManage/annualList/edit/register',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-annualList/children/register')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆年检列表', to: '/vehicleManage/annualList/show'},
      {title: '车辆年检登记'}
    ]
  },
  //车辆年检登记详情
  {
    path: '/vehicleManage/annualList/edit/detail/:id',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-annualList/children/detail')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆年检列表', to: '/vehicleManage/annualList/show'},
      {title: '车辆年检登记详情'}
    ]
  },

  //----------------6.车辆加油列表----------------
  {
    path: '/vehicleManage/refuelList/show',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-refuelList/root')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆加油列表'}
    ]
  },
  //车辆加油登记
  {
    path: '/vehicleManage/refuelList/edit/register',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-refuelList/children/register')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆加油列表', to: '/vehicleManage/refuelList/show'},
      {title: '车辆加油登记'}
    ]
  },
  //车辆加油登记详情
  {
    path: '/vehicleManage/refuelList/edit/detail/:id',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-refuelList/children/detail')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆加油列表', to: '/vehicleManage/refuelList/show'},
      {title: '车辆加油登记详情'}
    ]
  },

  //----------------7.车辆事故列表----------------
  {
    path: '/vehicleManage/accidentList/show',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-accidentList/root')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆事故列表'}
    ]
  },
  //车辆事故登记
  {
    path: '/vehicleManage/accidentList/edit/register',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-accidentList/children/register')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆事故列表', to: '/vehicleManage/accidentList/show'},
      {title: '车辆事故登记'}
    ]
  },
  //车辆事故登记详情
  {
    path: '/vehicleManage/accidentList/edit/detail/:id',
    component: lazy(()=>import('../pages/vehicleManage/vehicle-accidentList/children/detail')),
    breadcrumb: [
      {title: '车辆管理'},
      {title: '车辆事故列表', to: '/vehicleManage/accidentList/show'},
      {title: '车辆事故登记详情'}
    ]
  },


  //================资产管理================
  //----------------1.资产列表----------------
  {
    path: '/assetsManage/list/show',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-list/root')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产列表'}
    ]
  },
  //登记资产
  {
    path: '/assetsManage/list/edit/register',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-list/children/register')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产列表', to: '/assetsManage/list/show'},
      {title: '登记资产'}
    ]
  },
  //资产详情
  {
    path: '/assetsManage/list/edit/detail/:id',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-list/children/detail')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产列表', to: '/assetsManage/list/show'},
      {title: '资产详情'}
    ]
  },

  //----------------2.资产领用----------------
  {
    path: '/assetsManage/receive/show',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-receive/root')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产领用'}
    ]
  },
  //资产领用申请
  {
    path: '/assetsManage/receive/edit/apply',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-receive/children/apply')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产领用', to: '/assetsManage/receive/show'},
      {title: '资产领用申请'}
    ]
  },
  //资产领用申请详情
  {
    path: '/assetsManage/receive/edit/detail:id',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-receive/children/detail')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产领用', to: '/assetsManage/receive/show'},
      {title: '资产领用申请详情'}
    ]
  },

  //----------------3.资产归还----------------
  {
    path: '/assetsManage/goBack/show',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-goBack/root')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产归还'}
    ]
  },
  //资产归还申请
  {
    path: '/assetsManage/goBack/edit/apply',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-goBack/children/apply')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产归还', to: '/assetsManage/goBack/show'},
      {title: '资产归还申请'}
    ]
  },
  //资产归还申请详情
  {
    path: '	/assetsManage/goBack/edit/detail:id',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-goBack/children/detail')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产归还', to: '/assetsManage/goBack/show'},
      {title: '资产归还申请详情'}
    ]
  },

  //----------------4.资产采购----------------
  {
    path: '/assetsManage/procurement/show',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-procurement/root')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产采购'}
    ]
  },
  //资产采购申请
  {
    path: '/assetsManage/procurement/edit/apply',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-procurement/children/apply')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产采购', to: '/assetsManage/procurement/show'},
      {title: '资产采购申请'}
    ]
  },
  //资产采购申请详情
  {
    path: '/assetsManage/procurement/edit/detail:id',
    component: lazy(()=>import('../pages/assetsManage/assetsManage-procurement/children/detail')),
    breadcrumb: [
      {title: '资产管理'},
      {title: '资产采购', to: '/assetsManage/procurement/show'},
      {title: '资产采购申请详情'}
    ]
  },



  //================用品管理================
  //----------------1.用品列表----------------
  {
    path: '/thingManage/list/show',
    component: lazy(()=>import('../pages/thingManage/thing-list/root')),
    breadcrumb: [
      {title: '用品管理'},
      {title: '用品列表'}
    ]
  },
  //用品登记
  {
    path: '/thingManage/list/edit/register',
    component: lazy(()=>import('../pages/thingManage/thing-list/children/register')),
    breadcrumb: [
      {title: '用品管理'},
      {title: '用品列表', to: '/thingManage/list/show'},
      {title: '用品登记'}
    ]
  },
  //用品详情
  {
    path: '/thingManage/list/edit/detail/:id',
    component: lazy(()=>import('../pages/thingManage/thing-list/children/detail')),
    breadcrumb: [
      {title: '用品管理'},
      {title: '用品列表', to: '/thingManage/list/show'},
      {title: '用品详情'}
    ]
  },

  //----------------2.用品领用----------------
  {
    path: '/thingManage/receive/show',
    component: lazy(()=>import('../pages/thingManage/thing-receive/root')),
    breadcrumb: [
      {title: '用品管理'},
      {title: '用品领用'}
    ]
  },
  //用品领用申请
  {
    path: '/thingManage/receive/edit/apply',
    component: lazy(()=>import('../pages/thingManage/thing-receive/children/apply')),
    breadcrumb: [
      {title: '用品管理'},
      {title: '用品领用', to: '/thingManage/receive/show'},
      {title: '用品领用申请'}
    ]
  },
  //用品领用申请详情
  {
    path: '/thingManage/receive/edit/detail:id',
    component: lazy(()=>import('../pages/thingManage/thing-receive/children/detail')),
    breadcrumb: [
      {title: '用品管理'},
      {title: '用品领用', to: '/thingManage/receive/show'},
      {title: '用品领用申请详情'}
    ]
  },

  //----------------3.用品采购----------------
  {
    path: '/thingManage/procurement/show',
    component: lazy(()=>import('../pages/thingManage/thing-procurement/root')),
    breadcrumb: [
      {title: '用品管理'},
      {title: '用品采购'}
    ]
  },
  //用品采购申请
  {
    path: '/thingManage/procurement/edit/apply',
    component: lazy(()=>import('../pages/thingManage/thing-procurement/children/apply')),
    breadcrumb: [
      {title: '用品管理'},
      {title: '用品采购', to: '/thingManage/procurement/show'},
      {title: '用品采购申请'}
    ]
  },
  //用品采购申请详情
  {
    path: '/thingManage/procurement/edit/detail:id',
    component: lazy(()=>import('../pages/thingManage/thing-procurement/children/detail')),
    breadcrumb: [
      {title: '用品管理'},
      {title: '用品采购', to: '/thingManage/procurement/show'},
      {title: '用品采购申请详情'}
    ]
  },


  //================证照管理================
  //----------------1.证照列表----------------
  {
    path: '/licenseManage/list/show',
    component: lazy(()=>import('../pages/licenseManage/license-list/root')),
    breadcrumb: [
      {title: '证照管理'},
      {title: '证照列表'}
    ]
  },
  //登记证照
  {
    path: '/licenseManage/list/edit/register',
    component: lazy(()=>import('../pages/licenseManage/license-list/children/register')),
    breadcrumb: [
      {title: '证照管理'},
      {title: '证照列表', to: '/licenseManage/list/show'},
      {title: '登记证照'}
    ]
  },
  //登记详情
  {
    path: '/licenseManage/list/edit/detail/:id',
    component: lazy(()=>import('../pages/licenseManage/license-list/children/detail')),
    breadcrumb: [
      {title: '证照管理'},
      {title: '证照列表', to: '/licenseManage/list/show'},
      {title: '登记详情'}
    ]
  },

  //----------------2.证照借用----------------
  {
    path: '/licenseManage/borrow/show',
    component: lazy(()=>import('../pages/licenseManage/license-borrow/root')),
    breadcrumb: [
      {title: '证照管理'},
      {title: '证照借用'}
    ]
  },
  //证照借用申请
  {
    path: '/licenseManage/borrow/edit/apply',
    component: lazy(()=>import('../pages/licenseManage/license-borrow/children/apply')),
    breadcrumb: [
      {title: '证照管理'},
      {title: '证照借用', to: '/licenseManage/borrow/show'},
      {title: '证照借用申请'}
    ]
  },
  //证照借用申请详情
  {
    path: '/licenseManage/borrow/edit/detail:id',
    component: lazy(()=>import('../pages/licenseManage/license-borrow/children/detail')),
    breadcrumb: [
      {title: '证照管理'},
      {title: '证照借用', to: '/licenseManage/borrow/show'},
      {title: '证照借用申请详情'}
    ]
  },


  //================印章管理================
  //----------------1.印章列表----------------
  {
    path: '/sealManage/list/show',
    component: lazy(()=>import('../pages/sealManage/seal-list/root')),
    breadcrumb: [
      {title: '印章管理'},
      {title: '印章列表'}
    ]
  },
  //登记印章
  {
    path: '/sealManage/list/edit/register',
    component: lazy(()=>import('../pages/sealManage/seal-list/children/register')),
    breadcrumb: [
      {title: '印章管理'},
      {title: '印章列表', to: '/sealManage/list/show'},
      {title: '登记印章'}
    ]
  },
  //印章详情
  {
    path: '/sealManage/list/edit/detail/:id',
    component: lazy(()=>import('../pages/sealManage/seal-list/children/detail')),
    breadcrumb: [
      {title: '印章管理'},
      {title: '印章列表', to: '/sealManage/list/show'},
      {title: '印章详情'}
    ]
  },

  //----------------2.用章管理----------------
  {
    path: '/sealManage/chap/show',
    component: lazy(()=>import('../pages/sealManage/seal-chap/root')),
    breadcrumb: [
      {title: '印章管理'},
      {title: '用章管理'}
    ]
  },
  //用章申请
  {
    path: '/sealManage/chap/edit/apply',
    component: lazy(()=>import('../pages/sealManage/seal-chap/children/apply')),
    breadcrumb: [
      {title: '印章管理'},
      {title: '用章管理', to: '/sealManage/chap/show'},
      {title: '用章申请'}
    ]
  },
  //用章申请详情
  {
    path: '/sealManage/chap/edit/detail:id',
    component: lazy(()=>import('../pages/sealManage/seal-chap/children/detail')),
    breadcrumb: [
      {title: '印章管理'},
      {title: '用章管理', to: '/sealManage/chap/show'},
      {title: '用章申请详情'}
    ]
  },

  //================行政事务================
  //----------------1.通用行政流程----------------
  {
    path: '/adminAffair/process/show',
    component: lazy(()=>import('../pages/adminAffair/admin-process/root')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '通用行政流程'}
    ]
  },
  //通用行政流程单
  {
    path: '/adminAffair/process/edit/list',
    component: lazy(()=>import('../pages/adminAffair/admin-process/children/list')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '通用行政流程', to: '/adminAffair/process/show'},
      {title: '通用行政流程单'}
    ]
  },
  //通用行政流程单详情
  {
    path: '/adminAffair/process/edit/detail/:id',
    component: lazy(()=>import('../pages/adminAffair/admin-process/children/detail')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '通用行政流程', to: '/adminAffair/process/show'},
      {title: '通用行政流程单详情'}
    ]
  },

  //----------------2.名片印制申请----------------
  {
    path: '/adminAffair/applyForCard/show',
    component: lazy(()=>import('../pages/adminAffair/admin-applyForCard/root')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '名片印制申请'}
    ]
  },
  //名片印制申请单
  {
    path: '/adminAffair/applyForCard/edit/list',
    component: lazy(()=>import('../pages/adminAffair/admin-applyForCard/children/list')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '名片印制申请', to: '/adminAffair/applyForCard/show'},
      {title: '名片印制申请单'}
    ]
  },
  //名片印制申请详情
  {
    path: '/adminAffair/applyForCard/edit/detail/:id',
    component: lazy(()=>import('../pages/adminAffair/admin-applyForCard/children/detail')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '名片印制申请', to: '/adminAffair/applyForCard/show'},
      {title: '名片印制申请详情'}
    ]
  },


  //----------------3.行政接待管理----------------
  {
    path: '/adminAffair/reception/show',
    component: lazy(()=>import('../pages/adminAffair/admin-reception/root')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '行政接待管理'}
    ]
  },
  //行政接待申请
  {
    path: '/adminAffair/reception/edit/register',
    component: lazy(()=>import('../pages/adminAffair/admin-reception/children/register')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '行政接待管理', to: '/adminAffair/reception/show'},
      {title: '行政接待申请'}
    ]
  },
  //行政接待申请详情
  {
    path: '/adminAffair/reception/edit/detail/:id',
    component: lazy(()=>import('../pages/adminAffair/admin-reception/children/detail')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '行政接待管理', to: '/adminAffair/reception/show'},
      {title: '行政接待申请详情'}
    ]
  },

  //----------------4.行政维修申请----------------
  {
    path: '/adminAffair/applyForMaintain/show',
    component: lazy(()=>import('../pages/adminAffair/admin-applyForMaintain/root')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '行政维修申请'}
    ]
  },
  //行政维修申请
  {
    path: '/adminAffair/applyForMaintain/edit/register',
    component: lazy(()=>import('../pages/adminAffair/admin-applyForMaintain/children/register')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '行政维修申请', to: '/adminAffair/applyForMaintain/show'},
      {title: '行政维修申请'}
    ]
  },
  //行政维修申请详情
  {
    path: '/adminAffair/applyForMaintain/edit/detail/:id',
    component: lazy(()=>import('../pages/adminAffair/admin-applyForMaintain/children/detail')),
    breadcrumb: [
      {title: '行政事务'},
      {title: '行政维修申请', to: '/adminAffair/applyForMaintain/show'},
      {title: '行政维修申请详情'}
    ]
  },

  //================错误页面================
  {
    path: '/error',
    component: lazy(()=>import('../pages/common/error'))
  },
  //================没有权限的页面================
  {
    path: '/forbidden',
    component: lazy(()=>import('../pages/common/forbidden'))
  },
  //================路径错误================
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