import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Landing from './components/generic/LandingPage'
import Survey from './components/generic/SurveyPage'
import Recommend from './components/generic/RecommendationPage';
import Order from './components/generic/OrderPage'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Landing</Link>
                  </li>
                  <li>
                    <Link to="/survey/">Survey</Link>
                  </li>
                  <li>
                    <Link to="/users/">Recommend</Link>
                  </li>
                  <li>
                    <Link to="/order/">Order</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/" exact component={ Landing } />
              <Route path="/survey/" component={ Survey } />
              <Route path="/rec/" component={ Recommend }/>
              <Route path="/order/" component={ Order } />

            </div>
          </Router>
      </div>
    );
  }
}

export default App;
