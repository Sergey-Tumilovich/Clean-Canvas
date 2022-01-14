import React from 'react';
//import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Toolbar from './components/Toolbar';
import Settingbar from './components/Settingbar';
import Canvas from './components/Canvas';
import "./styles/app.scss";

const App = () => {
  return (
    <div className="app">
      <Toolbar/> 
      <Settingbar/>
      <Canvas/>
      {/* <Router>
        <Routes>
        <Route path='/:id' element={<Toolbar/>}/>
        <Route path='settings/*' element={<Settingbar/>}/>
        <Route path='canvas/*' element={<Canvas/>}/>
          <Navigate to={`f${(+new Date()).toString(16)}`}/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
