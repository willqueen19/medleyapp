import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/generic/Header';
import Landing from './components/generic/LandingPage'
import Survey from './components/generic/SurveyPage'
import Recommend from './components/generic/RecommendationPage';
import Order from './components/generic/OrderPage'
import GenderSelection from "./components/generic/GenderSelection";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
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
                    <Link to="/gender/">Gender</Link>
                  </li>
                  <li>
                    <Link to="/recommend/">Recommend</Link>
                  </li>
                  <li>
                    <Link to="/order/">Order</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/" exact component={ Landing } />
              <Route path="/survey/" component={ Survey } />
              <Route path="/gender/" component={ GenderSelection }/>
              <Route path="/recommend/" component={ Recommend }/>
              <Route path="/order/" component={ Order } />

            </div>
          </Router>
      </div>
    );
  }
}

export default App;
