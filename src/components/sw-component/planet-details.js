import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record field="population" label="Population" />

    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImgURL: swapiService.getPlanetImage
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);