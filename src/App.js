import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllDetailProject from './components/AllDetailProject/AllDetailProject';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
