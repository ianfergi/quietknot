import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Merch from "./pages/Merch";

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Links from "./pages/Links";

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const App = () => {
  return (
    <Router basename={''}>
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/links' element={<Links/>} />
        <Route path='/merch' element={<Merch/>} />
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
}


ReactDOM.render( <App />, document.getElementById("root") );