import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Head } from './head';//这里Head要加上大括号，否则报类型错误。请看es6的语法
import { Content } from './content';


require('./index.scss');//要进行分离的css文件


const reducer = (state = { selectAll: false, deleteThis: false }, action) => {
  switch (action.type) {
    case "CHANGE_SELECT":
      console.log(action.payload);
      console.log(action);
      state.selectAll = !state.selectAll;
      return state;
      break;
    case "CHANGE_DELETE":
      console.log(action.payload);
      console.log(action);
      state.deleteThis = !state.deleteThis;
      return state;
      break;
    default:
      console.log(action);
      return state;
      break;
  }
}
const store = createStore(reducer);//store一创建就会执行一次reducer，以便得到初始的state，所以记得在reducer中返回state
// console.log(store.getState());之前忘记在reducer的default语句中return state，导致初始化时store.getState为undefined
// import {Bottom} from './bottom';
class Wrap extends React.Component {
  constructor() {
        super();
        this.state={
        };
    }//使用redux后，状态全部在store中管理，这里就不用state了。
  render() {
    console.log(this.props.state);
    return (<div>
      <Head dispatch={this.props.dispatch} state={this.props.state} />
      <Content />
    </div>);
  }
}
const watchRender = () => {
  ReactDOM.render(
    <Wrap dispatch={store.dispatch} state={store.getState()} />,
    document.getElementById('container')
  );
}
watchRender();
store.subscribe(watchRender);//注意，通过reducer来更新state后，不会自动重新渲染页面，要通过store.subscribe方法来订阅实时渲染
