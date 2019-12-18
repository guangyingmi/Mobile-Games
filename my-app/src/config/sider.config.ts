interface SiderItemInterface{
  id: string,
  title: string,
  path: string
}

interface SiderConfigInterface {
  id: string,
  root: string,
  icon: string,
  children: SiderItemInterface[]
}

const SiderConfig: SiderConfigInterface[] = [
  // 会议室管理
  {
    id:'conferenceManage',
    root:'会议室管理',
    icon: 'bank',
    children:[
      {
        id:'conferenceManage-list',
        title:'会议室列表',
        path:'/conferenceManage/list/show'
      },
      {
        id:'conferenceManage-preList',
        title:'会议室预约列表',
        path:'/conferenceManage/preList/show'
      }
    ]
  },

  //车辆管理
  {
    id:'vehicleManage',
    root:'车辆管理',
    icon:'car',
    children:[
      {
        id:'vehicleManage-carList',
        title:'车辆列表',
        path:'/vehicleManage/carList/show'
      },
      {
        id:'vehicleManage-useList',
        title:'用车申请列表',
        path:'/vehicleManage/useList/show'
      },
      {
        id:'vehicleManage-insureList',
        title:'车辆保险列表',
        path:'/vehicleManage/insureList/show'
      },
      {
        id:'vehicleManage-maintenance',
        title:'车辆维修保养',
        path:'/vehicleManage/maintenance/show'
      },
      {
        id:'vehicleManage-annualList',
        title:'车辆年检列表',
        path:'/vehicleManage/annualList/show'
      },
      {
        id:'vehicleManage-refuelList',
        title:'车辆加油列表',
        path:'/vehicleManage/refuelList/show'
      },
      {
        id:'vehicleManage-accidentList',
        title:'车辆事故列表',
        path:'/vehicleManage/accidentList/show'
      },
    ]
  },

  //资产管理
  {
    id:'assetsManage',
    root:'资产管理',
    icon:'money-collect',
    children:[
      {
        id:'assetsManage-list',
        title:'资产列表',
        path:'/assetsManage/list/show'
      },
      {
        id:'assetsManage-receive',
        title:'资产领用',
        path:'/assetsManage/receive/show'
      },
      {
        id:'assetsManage-goBack',
        title:'资产归还',
        path:'/assetsManage/goBack/show'
      },
      {
        id:'assetsManage-procurement',
        title:'资产采购',
        path:'/assetsManage/procurement/show'
      },
    ]
  },

  //用品管理
  {
    id:'thingManage',
    root:'用品管理',
    icon:'security-scan',
    children:[
      {
        id:'thingManage-list',
        title:'用品列表',
        path:'/thingManage/list/show'
      },
      {
        id:'thingManage-receive',
        title:'用品领用',
        path:'/thingManage/receive/show'
      },
      {
        id:'thingManage-procurement',
        title:'用品采购',
        path:'/thingManage/procurement/show'
      },
    ]
  },

  //证照管理
  {
    id:'licenseManage',
    root:'证照管理',
    icon:'idcard',
    children:[
      {
        id:'licenseManage-list',
        title:'证照列表',
        path:'/licenseManage/list/show'
      },
      {
        id:'licenseManage-borrow',
        title:'证照借用',
        path:'/licenseManage/borrow/show'
      }
    ]
  },

  //印章管理
  {
    id:'sealManage',
    root:'印章管理',
    icon:'qrcode',
    children:[
      {
        id:'sealManage-list',
        title:'印章列表',
        path:'/sealManage/list/show'
      },
      {
        id:'sealManage-chap',
        title:'用章管理',
        path:'/sealManage/chap/show'
      },
    ]
  },

  //行政管理
  {
    id:'adminAffair',
    root:'行政事务',
    icon:'heat-map',
    children:[
      {
        id:'adminAffair-process',
        title:'通用行政流程',
        path:'/adminAffair/process/show'
      },
      {
        id:'adminAffair-applyForCard',
        title:'名片印制申请',
        path:'/adminAffair/applyForCard/show'
      },
      {
        id:'adminAffair-reception',
        title:'行政接待管理',
        path:'/adminAffair/reception/show'
      },
      {
        id:'adminAffair-applyForMaintain',
        title:'行政维修申请',
        path:'/adminAffair/applyForMaintain/show'
      },
    ]
  }
]

export default SiderConfig;