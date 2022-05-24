import React, { PureComponent } from "react";
import "../styles.css";

import GoodsItem from './GoodsItem';
import store from '../store';

class Goods extends PureComponent {
  state = {
    goods: []
  };
  componentDidMount() {
    const globalState = store.getState();
    this.setState({ goods: globalState.goods });
  };
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.state.goods.map(item => (
          <ul className="goods__list" key={item.id}>
            <li className="goods__list-item">
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Goods;