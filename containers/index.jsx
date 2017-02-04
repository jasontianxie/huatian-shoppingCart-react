import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Head} from './head';//这里Head要加上大括号，否则报类型错误。请看es6的语法
import {Content} from './content';

require('./index.scss');
// import {Bottom} from './bottom';
class Wrap extends React.Component{
  constructor() {
        super();
        this.state={
        };
    }
  render() {
    return (<div>
      <Head/>
      <Content/>
    </div>);
  }
}
ReactDOM.render(
  <Wrap/>,
  document.getElementById('container')
);
