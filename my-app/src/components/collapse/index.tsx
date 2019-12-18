import React,{useCallback,useState,useRef,useEffect} from 'react'
import { Collapse, Icon } from 'antd';
import {List} from 'immutable'
const { Panel } = Collapse;

// const customPanelStyle = {
// background: '#f7f7f7',
// borderRadius: 4,
// marginBottom: 24,
// border: 0,
// overflow: 'hidden',
// };

interface CollapseInterface{
  openKey:string,
  onOpen:(key:string)=>void
}

// interface PanelInterface{
//   header:string,
//   key:string|number
// }

// export const AppPanel:React.FC<PanelInterface>=function AppPanel({key,header,children}){

//   return (
//     <Panel header={header} key={key} style={customPanelStyle}>
//       {children}
//     </Panel>
//   )
// }

export const AppPanel=Panel;

export const AppCollapse:React.FC<CollapseInterface>=function AppCollapse({children,openKey,onOpen}){

  // 用于记录打开过的
  const [selectedKeys, setSelectedKeys] = useState(List([openKey]))

  const selectedRef=useRef<List<string>>(null!);
  useEffect(()=>{
    selectedRef.current=selectedKeys;
  })

  const changeAction=useCallback((keys)=>{
    if (keys.length>0) {
      const lastKey=keys[keys.length-1];
      if (!selectedRef.current.find(item=>item===lastKey)) {
        //说明没有打开过,调用外部方法,打开
        onOpen(lastKey)
        //记录打开过的值
        setSelectedKeys(selectedKeys=>selectedKeys.push(lastKey));
      }
    }
  },[selectedRef,onOpen])

  return (
      <Collapse
      bordered={false}
      defaultActiveKey={[openKey]}
      expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
      onChange={changeAction}
      >
        {children}
      </Collapse>
    
  )
}
