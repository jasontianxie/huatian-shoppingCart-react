import React from 'react';
import {List} from './list';
export class Content extends React.Component{
  constructor(){
    super();
    this.state={
      lists:[{
        pic:"../design_pic/购物车-1.jpg",
        name:"春暖花开",
        discription:"8英寸，适合6-10人食用",
        price:"220",
        additions:['刀叉','餐盘','餐盘','餐盘']
      },{
        pic:"../design_pic/购物车-1.jpg",
        name:"春暖花开1",
        discription:"8英寸，适合6-10人食用",
        price:"220",
        additions:['刀叉1','餐盘1','餐盘1','餐盘1']
      }]
    };
  }
  render(){
    let generateLists=this.state.lists.map(function(item,index,array) {
      return (<List listData={item} key={index}/>);
    })
    return (<div>
      {generateLists}
    </div>);
  }
}