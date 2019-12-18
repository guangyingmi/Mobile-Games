import React from 'react'

let arr:any[]=[];
for(var i=1;i<100;i++){
  arr.push(i);
}

const GoodsEdit: React.FC<{}> = function GoodsEdit(){
  
  

  return (
    <div>
      <h1>首页</h1>
      {arr.map((item)=>(
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export default GoodsEdit;