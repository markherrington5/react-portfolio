import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import homepage from './pages/homepage';
import photography from './pages/photography';

const App = () => (
  <BrowserRouter>
      <div>
          <Route exact path='/' component={homepage} />
          <Route exact path='/photography' component={photography} />
      </div>
  </BrowserRouter>
);

export default App;
