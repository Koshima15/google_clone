import React  from 'react';
import './App.css';
import Home from './Home'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
  
      <Router>
      <Switch>
        <Route path="/search">
          <h1>this is search page..</h1>
        </Route>
        <Route path="/home">
          
          <Home/>
        </Route>
      {/* {the home page that has search icons and all stuff} */}
      {/* {search page showing search results} */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
