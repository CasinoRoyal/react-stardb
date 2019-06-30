import React, { Component } from 'react';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>    
  );
};

export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    };
  };

  updateItem() {
    const { itemId, getData, getImgURL } = this.props;
    if(!itemId) return;

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImgURL(item)
        });
      });
  };

  render() {
    const { item, image } = this.state;

    if (!this.state.item) {
      return <span> Choose one of the character </span>
    };

    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt="" />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
