import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import img1 from '../../assets/WSty-1.jpeg';
import img2 from '../../assets/WSty-2.jpeg';
import img3 from '../../assets/WSty-3.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';

class WomensStyle extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="survey survey3">
        <h1>Which of these best describes your style?</h1>
        <CardDeck>
          <SurveyCard surveyImage={img1} surveyTitle={"Trendsetter"} surveySubtitle={"I like to take risks with my style"} surveyNext={'/women/type'} />
          <SurveyCard surveyImage={img2} surveyTitle={"Trendy"} surveySubtitle={"I like to wear what is in style"} surveyNext={'/women/type'}/>
          <SurveyCard surveyImage={img3} surveyTitle={"Casual"} surveySubtitle={"I like comfortable, everyday wear"} surveyNext={'/women/type'}/>
        </CardDeck>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    collection: state.surveyReducer.collection
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (WomensStyle);
