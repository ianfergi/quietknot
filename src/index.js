import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Merch from "./pages/Merch";
import Unreleased from "./pages/Unreleased";

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Links from "./pages/Links";
import Music from "./pages/Music";

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const App = () => {
  return (
    <Router basename={''}>
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/links' element={<Links/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/merch' element={<Merch/>} />
        <Route path='/unreleased' element={<Unreleased/>} />
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
}


ReactDOM.render( <App />, document.getElementById("root") );