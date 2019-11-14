import React, { useState } from 'react';

const SpeciesInformationCard = (props) => (
  <div>
    <div>{props.catchInformation.species}</div>
    <div>{props.catchInformation.date}</div>
    <div>{props.catchInformation.images}</div>
  </div>
);

export default SpeciesInformationCard;