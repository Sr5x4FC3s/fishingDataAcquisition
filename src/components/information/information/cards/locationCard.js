import React, { useState } from 'react';
import GenericButton from '../../../header/button';
import DisabledButton from '../../../header/disabledButton';
import CatchListContainer from '../container/catchListContainer';

const LocationCard = (props) => {
  const [isOpen, change] = useState(false);

  return (
    <div>
      {Object.keys(props.locationInfo).length < 1 ? 
        !props.searchStatus.status && props.searchStatus.failedAttempts < 1 ?
          <div>Oops, currently we don't have any information on this location. Please use the "Location Details" button to find out more about this area!</div>
          :
          <div>Oops, we couldn't find any information. Please try again!</div>
      :
      <div>
        <div>{`Location Name: ${props.locationInfo.name}`}</div>
        <div>{`Location Photos: ${props.locationInfo.photos}`}</div>
        <div>{`Location misc: ${props.locationInfo.misc}`}</div>
        {!isOpen && props.locationInfo.catches.length > 1 ? 
          <GenericButton 
            action={
              () => {
                change(!isOpen);
              }
            }
            name={'View Catches'}
          />
          : !isOpen && props.locationInfo.catches.length < 1 ?
          <DisabledButton
            name={'View Catches'}
          />
          :
          <CatchListContainer
            catches={props.locationInfo.catches}
            change={() => change(!isOpen)}
            selectCatch={props.selectCatch}
          /> 
        }
      </div>
    }
    </div>
  );
};

export default LocationCard;