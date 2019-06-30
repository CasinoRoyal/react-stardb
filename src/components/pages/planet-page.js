import React, { Component } from 'react';

import { PlanetDetails, PlanetList } from '../sw-component';
import Row from '../row';

export default class PlanetPage extends Component {
  state = {
    selectedItem: null,
  };

  onSelectedItem = (id) => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row left={<PlanetList onSelectedItem={this.onSelectedItem} />}
           right={<PlanetDetails itemId={selectedItem}/>} />
    );
  }
};