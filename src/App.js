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

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Router>
            <div className="app-body">
              <Route path="/" exact component={ Landing } />
              <Route path="/survey/" component={ Survey } />
              <Route path="/recommend/" component={ Recommend }/>
              <Route path="/order/" component={ Order } />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
