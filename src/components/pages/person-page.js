import React from 'react';
import { withRouter } from 'react-router-dom';

import { PersonDetails, PersonList } from '../sw-component';
import Row from '../row';

const PersonPage = ({ history, match }) => {

  const { id } = match.params;

  return (
    <Row left={<PersonList onSelectedItem={(id) => history.push(id)} />}
         right={<PersonDetails itemId={id}/>} />
  );
};

export default withRouter(PersonPage);