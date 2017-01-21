import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Head} from './head';//这里Head要加上大括号，否则报类型错误。请看es6的语法
class Wrap extends React.Component{
  constructor() {
        super();
    }
  render() {
    return (<div>
      <Head/>
    </div>);
  }
}
ReactDOM.render(
  <Wrap/>,
  document.getElementById('container')
);