import React from "react";
import { BrowserRouter, Route} from 'react-router-dom';
import homepage from './pages/homepage';
import photography from './pages/photography';

const App = () => (
  <BrowserRouter>
      <div>
          <Route exact path='/' component={homepage} />
          {/* <Route path=/:id */}
          <Route exact path='/photography' component={photography} />
      </div>
  </BrowserRouter>
);

export default App;
