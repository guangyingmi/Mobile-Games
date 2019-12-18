import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import { Breadcrumb} from 'antd';
import useRouteInfo from '../../utils/useRouteInfo'


const AppBreadcrumb:React.FC<{}>=function AppBreadcrumb(){
  
  const {breadcrumb}=useRouteInfo();
  
  if (!breadcrumb) {
    return null;
  }

  return (
    <Breadcrumb style={{ padding: '16px 0' ,borderBottom:'solid 1px #ddd'}}>
      {
        breadcrumb.map((item,index:number)=>(
          <Breadcrumb.Item key={index}>
            {
              item.to ? <Link to={item.to}>
                          {item.title}
                        </Link>
            : item.title
            }
          </Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  )
}

export default AppBreadcrumb;