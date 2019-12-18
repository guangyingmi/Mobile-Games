import React from 'react'
import {AppCollapse,AppPanel} from '../../../components/collapse'

const panelNav=[
  {title:'7日核心指标',value:7},
  {title:'15日核心指标',value:15},
  {title:'30日核心指标',value:30},
]


const AnalysisUse:React.FC<{}>=function AnalysisUse(){
  return (
    <div>
      <h1>用户分析界面</h1>
      <p>本页根据昨日数据来进行计算,而非实时数据.</p>
      <AppCollapse openKey="-1" onOpen={(key)=>{
        console.log(key);
      }}>
        <AppPanel key="-1" header="昨日核心指标">
            test
        </AppPanel>
        {
          panelNav.map((item, index)=>(
            <AppPanel key={index} header={item.title}>
              {item.value}
            </AppPanel>
          ))
        }
      </AppCollapse> 
    </div>
  )
}

export default AnalysisUse