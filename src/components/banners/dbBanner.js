import React from 'react';
import ReactDOM from 'react-dom';
import GenericButton from '../header/button';

const styles = {
  width: '100%',
  height: '40px',
  bottom: 0,
  left: 0, 
  position: 'fixed', 
  backgroundColor: 'purple',
  zIndex: 40,
};

const dismissButton = {
  float: 'right',
};

const reactivateButton = {
  float: 'right', 
};

const text = {
  float: 'left',
}

const DatabaseBanner = (props) => (
  <div style={styles}>
    <div>
      {!props.loading ? 
        <div style={text}>Database is currently offline. Press button to attempt to reactivate database.</div>
        :
        <div style={text}>Database is currently loading...</div>
      }
      <div style={dismissButton}>
        <GenericButton 
          name={'Dismiss'}
          action={props.dismiss}
        />
      </div>
      {!props.loading && !props.loadResults ? 
        <div style={reactivateButton}>
          <GenericButton 
            name={'Reactivate'}
            action={props.reset}
          />
        </div> 
      : null}
    </div>
  </div>
);

export default DatabaseBanner;