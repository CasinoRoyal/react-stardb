import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import SwapiServices from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component {
  swapi = new SwapiServices();

  state = {
    selectedPerson: null,
  };

  onSelectedPerson = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const itemList = (
      <ItemList onSelectedPerson={this.onSelectedPerson}
                getData={this.swapi.getAllPeople}>
      {(item) => `${item.name} (${item.birthYear})`}                 
      </ItemList>      
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails personId={this.state.selectedPerson} />
      </ErrorBoundry> 
    );

    return (
      <Row left={itemList} right={itemDetails} />
    );
  };
};