import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import img1 from '../../assets/MOcc-1.jpeg';
import img2 from '../../assets/MOcc-2.jpeg';
import img3 from '../../assets/MOcc-3.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';

class MensOccasion extends Component {

  constructor(props) {
    super(props);

    console.log(this.props.gender);

    this.state = {

    };
  }

  render () {
    return (
      <div className="survey survey3">
        <h1>What's the occasion?</h1>
        <CardDeck className="carddeck carddeck3">
          <SurveyCard surveyImage={img1} surveyTitle={"Party"} surveyNext={'/men/shirt'} />
          <SurveyCard surveyImage={img2} surveyTitle={"Work"} surveyNext={'/men/shirt'}/>
          <SurveyCard surveyImage={img3} surveyTitle={"Everyday Wear"} surveyNext={'/men/value'}/>
        </CardDeck>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    gender: state.surveyReducer.gender,
    collection: state.surveyReducer.collection
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (MensOccasion);
