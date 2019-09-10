import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "../src/pages/Saved"
import Searched from "../src/pages/Searched"
import NoMatch from "../src/pages/NoMatch"
import "./App.css";

class App extends Component {



  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Saved} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/searched" component={Searched} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
