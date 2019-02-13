import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/generic/Header';
import Landing from './components/generic/LandingPage'
import Survey from './components/generic/SurveyMensWomens'
import ThreeSurvey from './components/generic/test-3-SurveyPage'
import Recommend from './components/generic/RecommendationPage';
import Order from './components/generic/OrderPage'
import WomensOccasion from "./components/survey-womens/WomensOccasion";
import MensOccasion from "./components/survey-mens/MensOccasion";
import WomensValues from "./components/survey-womens/WomensValues";
import WomensStyle from "./components/survey-womens/WomensStyle";
import WomensType from "./components/survey-womens/WomensType";
import WomensColors from "./components/survey-womens/WomensColors";
import MensValues from "./components/survey-mens/MensValues";
import MensStyles from "./components/survey-mens/MensStyles";
import MensCasual from "./components/survey-mens/MensCasual";
import MensShirts from "./components/survey-mens/MensShirts";
import MensPants from "./components/survey-mens/MensPants";
import MensColors from "./components/survey-mens/MensColors";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Router>
            <div className="app-body">
              <Route path="/" exact component={ Landing } />
              <Route path="/survey/" component={ Survey } />
              <Route path="/survey3/" component={ ThreeSurvey } />

              <Route path="/women/occasion/" component={ WomensOccasion } />
              <Route path="/women/values/" component={ WomensValues } />
              <Route path="/women/style/" component={ WomensStyle } />
              <Route path="/women/type/" component={ WomensType } />
              <Route path="/women/color/" component={ WomensColors } />

              <Route path="/men/occasion/" component={ MensOccasion} />
              <Route path="/men/value/" component={ MensValues } />
              <Route path="/men/style/" component={ MensStyles } />
              <Route path="/men/casual/" component={ MensCasual } />
              <Route path="/men/shirt/" component={ MensShirts } />
              <Route path="/men/pants/" component={ MensPants } />
              <Route path="/men/colors/" component={ MensColors} />

              <Route path="/recommend/" component={ Recommend }/>
              <Route path="/order/" component={ Order } />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
