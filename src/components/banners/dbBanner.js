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
};

const bannerTextOptions = {
  offline: 'Database is currently offline. Press button to attempt to reactivate database.',
  loading: 'Database is currently loading...',
  success: 'Database has been activated',
  failure: 'Attempt to reactivate the database has failed. Please try again',
};

const DatabaseBanner = ({reset, dismiss, loading, loadStatus}) => (
  <div style={styles}>
    <div>
      {!loading ? 
        !loadStatus.status ?
          loadStatus.failedAttempts >= 1 ? 
            <div style={text}>{bannerTextOptions.failure}</div>
            :
            <div style={text}>{bannerTextOptions.offline}</div>
            :
            <div style={text}>{bannerTextOptions.success}</div>
            :
            <div style={text}>{bannerTextOptions.loading}</div>
      }
      <div style={dismissButton}>
        <GenericButton 
          name={'Dismiss'}
          action={dismiss}
        />
      </div>
      {!loading && !loadStatus.status ? 
        <div style={reactivateButton}>
          <GenericButton 
            name={'Reactivate'}
            action={reset}
          />
        </div> 
      : null}
    </div>
  </div>
);

export default DatabaseBanner;