import React from 'react';
import { Popup } from 'react-map-gl';

import SpeciesInputForm from '../forms/speciesInputForm';

// export default class SpeciesInformationContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       infoAvailable: false,
//       information: null,
//     }
//   };

//   render() {
//     const styles = {
//       width: '400px',
//       height:'500px',
//       zIndex: 12,
//     };
    
//     return (
//       <div>
//         <div>
//           {!this.state.infoAvailable ? 
//             <SpeciesInputForm
//               toggleHandler={this.props.toggleHandler} 
//               save={this.props.save}
//             /> : 
//             <div>
//               <div>RENDER SPECIES INFORMATION HERE FROM DB</div>
//               <button id='edit-info-button' onClick={() => this.props.toggleHandler('species')}>Edit Species Information</button>
//             </div>
//           }
//         </div>
//       </div>
//     );
//   };
// };

const styles = {
  width: '400px',
  height:'500px',
  zIndex: 12,
};

const SpeciesInformationDisplay = (props) => (
  <div>
    <div>
      <SpeciesInputForm
        toggleHandler={props.toggleHandler} 
        save={props.save}
      />
      <div>
        <div>RENDER SPECIES INFORMATION HERE FROM DB</div>
      </div>
    </div>
  </div>
);

export default SpeciesInformationDisplay;