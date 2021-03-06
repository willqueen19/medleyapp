import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../assets/MSty-1.jpeg';
import img2 from '../../assets/MSty-2.jpeg';
import img3 from '../../assets/MSty-3.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants'

class MensStyles extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectTrendsetter = this.selectTrendsetter.bind(this);
    this.selectTrendy = this.selectTrendy.bind(this);
  }

  selectTrendsetter() {
    this.props.actions.selectMensCollection(surveyConstants.trend);
  }

  selectTrendy() {
    this.props.actions.selectMensCollection(surveyConstants.divided);
  }

  render () {
    return (
      <Container className="survey survey3">
        <h1>Which of these best describes you?</h1>
        <Row>
          <CardDeck className="carddeck carddeck3">
            <SurveyCard surveyImage={img1} surveyTitle={"I like to take risks"} surveyNext={'/men/shirt'} passedFunction={this.selectTrendsetter}/>
            <SurveyCard surveyImage={img2} surveyTitle={"I like to wear what is in style"} surveyNext={'/men/shirt'} passedFunction={this.selectTrendy}/>
            <SurveyCard surveyImage={img3} surveyTitle={"I like casual, comfortable clothes"} surveyNext={'/men/casual'}/>
          </CardDeck>
        </Row>
        <Row className="rowtryOn">
          <Col sm={{size: 2, offset: 5}}>
            <Link className="tryOn" to='/men/occasion/'>
              <Button className="back"><i className="fas fa-arrow-left"></i> Back</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    collection: state.surveyReducer.gender
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MensStyles);
