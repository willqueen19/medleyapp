import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../assets/WOcc-1.jpeg';
import img2 from '../../assets/WOcc-2.jpeg';
import img3 from '../../assets/WOcc-3.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';

class WomensOccasion extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectParty = this.selectParty.bind(this);
    this.selectWork = this.selectWork.bind(this);
  }

  selectParty() {
    this.props.actions.selectWomensCollection(surveyConstants.party);
  }

  selectWork() {
    this.props.actions.selectWomensCollection(surveyConstants.modern_classic);
  }

  render () {
    return (
      <Container className="survey survey3">
      <h1>What's the occasion?</h1>
      <Row>

        <CardDeck className="carddeck carddeck3">
          <SurveyCard surveyImage={img1} surveyTitle={"Party"} surveyNext={'/women/type'} passedFunction={this.selectParty}/>
          <SurveyCard surveyImage={img2} surveyTitle={"Work"} surveyNext={'/women/type'} passedFunction={this.selectWork}/>
          <SurveyCard surveyImage={img3} surveyTitle={"Everyday Wear"} surveyNext={'/women/values'}/>
        </CardDeck>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    collection: state.surveyReducer.collection
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (WomensOccasion);
