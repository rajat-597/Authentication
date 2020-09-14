import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import {BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
function App() {
  return (
      <Router>
    <React.Fragment>
    <ul className="align">    
              <li>    
                <Link to={'/Login'} className="align2">Login</Link>    
              </li>    
              <li>    
                <Link to={'/Signup'} className="align2">Sign Up</Link>    
              </li>      
            </ul>    
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Registration} />
      </Switch>
    </React.Fragment>
    </Router>
  );
};

export default App;
