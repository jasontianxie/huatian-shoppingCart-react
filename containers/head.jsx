// var Head=React.CreateClass({
//   getInitialState:function(){
//     return {
//       selectAll:false,
//       deleteThis:false
//     };
//   },
//   handleClickAll:function(){
//     selectAll=!selectAll;
//   },
//   handleClickDelete:function(){
//     deleteThis=!deleteThis;
//   },
//   render:function() {
//     return (<div class="myhead">
//     <span onClick={this.handleClickAll} class={selectAll?"checked":"unchecked"}>全选</span>
//     <span onClick={this.handleClickDelete} class={deleteThis?"checked":"unchecked"}>删除</span>
//     </div>);
//   }
// });
import * as React from 'react';//注意：如果该组件用到了React变量，则组件中要引入React，否则报错
export class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      deleteThis: false
    };
  }
  handleClickAll(){
    this.state.selectAll=!this.state.selectAll;
    console.log('clickAll:'+this.state.selectAll);
  }
  handleClickDelete(){
    this.state.deleteThis=!this.state.deleteThis;
    console.log('clickdelete:'+this.state.deleteThis);
  }
  render(){
    return (<div className="myhead">
    <span onClick={()=>{this.handleClickAll()}} className={this.state.selectAll?"checked":"unchecked"}>全选</span>{/*这里的绑定不能用this.handleClickAll.bind(this),提示没有bind is undefined*/}
    <span onClick={()=>{this.handleClickDelete()}} className={this.state.deleteThis?"checked":"unchecked"}>删除</span>
    </div>);
  }
}