import React from 'react';
import { Route } from "react-router-dom";

import Main from '../src/components/Main';
import Stats from '../src/components/Stats';
import Charts from '../src/components/Charts';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Main}/>
      <Route path='/stats' component={Stats}/>
      <Route path='/charts' component={Charts}/>
    </div>
  );
}

export default App;
