import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiServices from '../../services/swapi-service';
import { Provider } from '../swapi-servive-context';
import ErrorIndicator from '../error-indicator';
import {
  PersonPage,
  PlanetPage,
  StarshipPage
} from '../pages';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StarshipDetails from "../sw-component/starship-details";

import './app.css';

export default class App extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  swapi = new SwapiServices();


  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div>
        <Provider value={this.swapi}>
        <Router>
          <Header />
          <RandomPlanet />

          <Switch>
            <Route exact path="/" render={() => <h2>Welcome to Galaxy</h2> } />
            <Route path="/people/:id?" component={PersonPage} />
            <Route path="/planets" component={PlanetPage} />
            <Route exact path="/starships" component={StarshipPage} />
            <Route path="/starships/:id" 
                   render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                   }} />
            <Route render={() => <h1>404 Page not found</h1>} />
          </Switch>
        </Router>

        </Provider>
      </div>
    );
  }
};