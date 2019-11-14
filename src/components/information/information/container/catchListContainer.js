import React from 'react';
import GenericCard from '../cards/genericCard';

const styles = {
  height: '300px',
  width: '300px', 
  backgroundColor: 'red',
};

const cardStyles = {
  paddingLeft: '3px',
};

const CatchListContainer = (props) => (
  <div id='catch-list-container' style={styles}>
    {props.catches.map(specificCatch => (
      <div style={cardStyles}>
        <GenericCard 
          action={() => {
            props.selectCatch(specificCatch);
            props.change();
          }}
          date={specificCatch.date}
        />
      </div>
    ))}
  </div>
);

export default CatchListContainer;