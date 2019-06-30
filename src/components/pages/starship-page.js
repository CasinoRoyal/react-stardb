import React from 'react';
import { withRouter } from 'react-router-dom';
import { StarshipList } from '../sw-component';

const StarshipPage = ({ history }) => {

  return (
    <StarshipList onSelectedItem={(itemId) => history.push(itemId)} />
  )
};

export default withRouter(StarshipPage);