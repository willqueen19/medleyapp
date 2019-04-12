import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../assets/MCas-1.jpeg';
import img2 from '../../assets/MCas-2.jpeg';
import img3 from '../../assets/MVal-1.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';

class MensCasual extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

    this.selectOutdoorsy = this.selectOutdoorsy.bind(this);
    this.selectHomewear = this.selectHomewear.bind(this);
    this.selectSustainable = this.selectSustainable.bind(this);
  }

  selectOutdoorsy() {
      this.props.actions.selectMensCollection(surveyConstants.logg);
  }

  selectHomewear() {
      this.props.actions.selectMensCollection(surveyConstants.basics);
  }

  selectSustainable() {
    this.props.actions.selectMensCollection(surveyConstants.conscious);
  }

  render () {
    return (
      <Container className="survey survey3">
      <h1>Which of these best describes you?</h1>
      <Row>

        <CardDeck className="carddeck carddeck3">
          <SurveyCard surveyImage={img1} surveyTitle={"I prefer a laid-back style"} surveyNext={'/men/shirt'} passedFunction={this.selectOutdoorsy}/>
          <SurveyCard surveyImage={img2} surveyTitle={"I like to stick with the basics"} surveyNext={'/men/shirt'} passedFunction={this.selectHomewear}/>
          <SurveyCard surveyImage={img3} surveyTitle={"I prefer sustainable clothing items"} surveyNext={'/men/shirt'} passedFunction={this.selectSustainable}/>
        </CardDeck>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
        gender: state.surveyReducer.gender
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (MensCasual);
