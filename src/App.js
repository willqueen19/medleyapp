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

    var publicURL = process.env.PUBLIC_URL;
    return (
        <div className="App">
          <Provider store={ store }>
              <Header/>
              <Router basename={publicURL}>
                <div className="app-body">
                  <Route path={publicURL + "/"} exact component={ Landing } />
                  <Route path={publicURL + "/survey/"} component={ Survey } />
                  <Route path={publicURL + "/women/occasion/"} component={ WomensOccasion } />
                  <Route path={publicURL + "/women/values/"} component={ WomensValues } />
                  <Route path={publicURL + "/women/style/"} component={ WomensStyle } />
                  <Route path={publicURL + "/women/type/"} component={ WomensType } />
                  <Route path={publicURL + "/women/color/"} component={ WomensColors } />
                  <Route path={publicURL + "/men/occasion/"} component={ MensOccasion} />
                  <Route path={publicURL + "/men/value/"} component={ MensValues } />
                  <Route path={publicURL + "/men/style/"} component={ MensStyles } />
                  <Route path={publicURL + "/men/casual/"} component={ MensCasual } />
                  <Route path={publicURL + "/men/shirt/"} component={ MensShirts } />
                  <Route path={publicURL + "/men/pants/"} component={ MensPants } />
                  <Route path={publicURL + "/men/colors/"} component={ MensColors} />
                  <Route path={publicURL + "/recommend/"} component={ Recommend }/>
                  <Route path={publicURL + "/sizing/"} component={ Sizing }/>
                  <Route path={publicURL + "/order/"} component={ OrderPage }/>
                </div>
              </Router>
              <Footer />
          </Provider>
      </div>
    );
  }
}

export default App;
