import React from 'react';
import { BrowserRouter as Router, Route, Redirect,NavLink } from 'react-router-dom'
import Meishi from "./meishi"
import Xiang from "./xiang"





function App() {
  
 

  return (
    <div className="news">
  <Router>
    <Route path="/meishi" component={Meishi}></Route>
    <Route path="/xiang" component={Xiang}></Route>
    <NavLink to="/meishi"></NavLink>
    <NavLink to="/xiang"></NavLink>
    <Redirect to="/meishi"></Redirect>
  </Router>
    </div>

   
  )
}

export default App;
