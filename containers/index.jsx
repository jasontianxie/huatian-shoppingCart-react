import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Headwrap } from './head';//这里Head要加上大括号，否则报类型错误。请看es6的语法
import { Content } from './content';


require('./index.scss');//要进行分离的css文件


const reducer = (state = { selectAll: false, deleteThis: false }, action) => {
  switch (action.type) {
    case "CHANGE_SELECT":
      console.log(action.payload);
      // console.log(action);
      // state.selectAll = !state.selectAll;
      console.log(state);
      return Object.assign({}, state,{selectAll:!state.selectAll});
      break;
    case "CHANGE_DELETE":
      console.log(action.payload);
      // console.log(action);
      // state.deleteThis = !state.deleteThis;//不要直接修改state，要使用下面的Object.assign方法
      // return state;//不要直接修改state，要使用下面的Object.assign方法
      return Object.assign({}, state,{deleteThis:!state.deleteThis});
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
  /*render() {
    return (<div>
      <Head dispatch={this.props.dispatch} state={this.props.state} />
      <Content />
    </div>);
  }*///redux(不使用 react-redux)
  render() {//redux(且使用 react-redux)
    return (<div>
      <Headwrap/>
      <Content />
    </div>);
  }
}


// const watchRender = () => {//redux(不使用 react-redux)
  // ReactDOM.render(
  //   <Wrap dispatch={store.dispatch} state={store.getState()} />,
  //   document.getElementById('container')
  // );
// }//redux(如使用 react-redux)
ReactDOM.render(//redux(且使用 react-redux)
  (<Provider store={store}>
    <Wrap/>
  </Provider>),
    document.getElementById('container')
  );
// watchRender();//redux(不使用 react-redux)
// store.subscribe(watchRender);//redux(不使用 react-redux)//注意，通过reducer来更新state后，不会自动重新渲染页面，要通过store.subscribe方法来订阅实时渲染
