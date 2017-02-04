import React from 'react';
export class List extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(<div className="listwrap">
      <div className="listwrap-top">
        <div className="listwrap-top-radio"></div>
        <div className="listwrap-top-radioright">
          <div className="listwrap-pic"></div>
          <div className="listwrap-top-right">
            <div className="listwrap-top-right-top">
              <div className="listwrap-name">{this.props.listData.name}</div>
              <div className="listwrap-price">{this.props.listData.price}</div>
            </div>
            <div className="listwrap-top-right-bottom">规格：{this.props.listData.discription}</div>
          </div>
        </div>
      </div>
      
      <div className="listwrap-middle">
        <div className="listwrap-middle-attached">附赠：{this.props.listData.additions}</div>
        <div className="listwrap-middle-options">
          <div className="listwrap-middle-options-first">
            <div className="listwrap-middle-options-radio"></div>
            <div className="listwrap-middle-options-text">彩色火焰蜡烛</div>
          </div>
          <div className="listwrap-middle-options-second">
            <div className="listwrap-middle-options-radio"></div>
            <div className="listwrap-middle-options-text">数字蜡烛</div>
            <div className="listwrap-middle-options-input">
              <input type="text"/>
              <input type="text"/>
            </div>
          </div>
        </div>
      </div>
      <div className="listwrap-bottom">
        <div>
          <div className="listwrap-bottom-text">数量：</div>
          <div className="listwrap-bottom-operation">
            <div className="minus">-</div>
            <div className="showNumber">
              <input type="text"/>
            </div>
            <div className="addition">+</div>
          </div>
        </div>
      </div>
    </div>);

  }
}