import React from 'react';
import './App.css';
import Trackerdos from './components/trackerdos/moleculas/Mol-trackerdos';
// import Desplegable from './components/trackerdos/moleculas/Mol-trackerdos-desplegable';
//import Drawer from './components/moleculas/Mol-drawer';
// import CasesComponent from './components/covid19tracker';
// import TrackerCuatro from './components/render/trackers/tracker-cuatro/Tracker-cuatro';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        {/* <Drawer/> */}
        {/* <Desplegable /> */}
        <Trackerdos />
        {/* <CasesComponent/> 
        <TrackerCuatro /> */}
      </header>
    </div>
  );    
};      

export default App;
