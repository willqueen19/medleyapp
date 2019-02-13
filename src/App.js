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
import GenderSelection from "./components/generic/GenderSelection";
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
              <Route path="/gender/" component={ GenderSelection }/>

              <Route path="/occasion-women/" component={ WomensOccasion } />
              <Route path="/values-women/" component={ WomensValues} />
              <Route path="/style-women/" component={ WomensStyle } />
              <Route path="/type-women/" component={ WomensType } />
              <Route path="/colors-women/" component={ WomensColors } />

              <Route path="/occasion-men/" component={ MensOccasion} />
              <Route path="/value-men/" component={ MensValues } />
              <Route path="/style-men/" component={ MensStyles } />
              <Route path="/casual-men/" component={ MensCasual } />
              <Route path="/shirt-men/" component={ MensShirts } />
              <Route path="/pants-men/" component={ MensPants } />
              <Route path="/colors-men/" component={ MensColors} />

              <Route path="/recommend/" component={ Recommend }/>
              <Route path="/order/" component={ Order } />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
