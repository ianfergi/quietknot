import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const App = () => {
  return (
    <Router basename={''}>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
      </Routes>
    </Router>
  )
}


ReactDOM.render( <App />, document.getElementById("root") );