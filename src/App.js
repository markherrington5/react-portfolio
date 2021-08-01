import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from "./components/scrollToTop.js";
import Homepage from './pages/homepage';
import Gallery from './pages/gallery.js';
import Photography from './pages/photography.js';
import "./styles/App.scss";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/photography' component={Gallery} />
      <Route exact path='/photography/:id' component={Photography} />
    </Switch>
  </BrowserRouter>
);

export default App;
