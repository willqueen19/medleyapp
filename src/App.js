import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Router, Route, Switch } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/rec/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Landing} />
            <Route path="/users/" component={Survey} />
            <Route path="/rec/" component={RecommendationScreen} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
