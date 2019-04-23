import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BrowserHistory from 'react-router';
import { Provider } from 'react-redux';
import store from "./store/index";
import {connect} from "react-redux";


import Header from './components/generic/Header';
import Footer from './components/generic/Footer';
import Landing from './components/generic/LandingPage'
import Survey from './components/generic/SurveyMensWomens'
import Recommend from './components/generic/RecommendationPage';
import Sizing from './components/generic/SizingPage'
import OrderPage from './components/generic/OrderPage'
import WomensOccasion from "./components/survey-womens/WomensOccasion";
import MensOccasion from "./components/survey-mens/MensOccasion";
import WomensValues from "./components/survey-womens/WomensValues";
import WomensStyle from "./components/survey-womens/WomensStyles";
import WomensType from "./components/survey-womens/WomensType";
import WomensColors from "./components/survey-womens/WomensColors";
import MensValues from "./components/survey-mens/MensValues";
import MensStyles from "./components/survey-mens/MensStyles";
import MensCasual from "./components/survey-mens/MensCasual";
import MensShirts from "./components/survey-mens/MensShirts";
import MensPants from "./components/survey-mens/MensPants";
import MensColors from "./components/survey-mens/MensColors";

window.store = store;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
        <div className="App">
          <Provider store={ store }>
              <Header/>
              <Router basename={process.env.PUBLIC_URL}>
                <div className="app-body">
                  <Route path={process.env.PUBLIC_URL + "/"} exact component={ Landing } />
                  <Route path="/survey/" component={ Survey } />
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
                  <Route path="/sizing/" component={ Sizing }/>
                  <Route path="/order/" component={ OrderPage }/>
                </div>
              </Router>
              <Footer />
          </Provider>
      </div>
    );
  }
}

export default App;
