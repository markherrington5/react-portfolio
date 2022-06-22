import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import homepage from './pages/homepage';
// import coding from './pages/coding';
import Gallery from './pages/gallery';
import ContactInfo from "./components/contactInfo.js";

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <div>
        <Route exact path='/' component={homepage} />
        {/* <Route exact path='/coding' component={coding} /> */}
        <Route exact path='/photography' component={Gallery} />
      </div>
    </BrowserRouter>
    <ContactInfo />
  </React.Fragment>
);

export default App;
