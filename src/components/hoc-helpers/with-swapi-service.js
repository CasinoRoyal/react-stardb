import React from 'react';
import { Consumer } from '../swapi-servive-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {
    return (
      <Consumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);
            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </Consumer>
    );
  };

};

export default withSwapiService;