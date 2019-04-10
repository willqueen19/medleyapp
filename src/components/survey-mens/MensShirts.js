import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/TwoSurveyCard.js';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../assets/MShirt-1.jpeg';
import img2 from '../../assets/MShirt-2.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';
import * as imageConstants from '../../constants/mens-shirt-const.js';

class MensShirts extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectLongSleeve = this.selectLongSleeve.bind(this);
    this.selectShortSleeve = this.selectShortSleeve.bind(this);
    this.selectImgs = this.selectImgs.bind(this);
  }

  selectLongSleeve() {
      this.props.actions.selectShirtType(surveyConstants.long_sleeve);
  }

  selectShortSleeve() {
      this.props.actions.selectShirtType(surveyConstants.short_sleeve);
  }

  selectImgs() {
    var img1;
    var img2;
      // TODO modern classic, trend and divided need to be added
      if (this.props.mensCollection === surveyConstants.premium_quality) {
        img1 = imageConstants.prem1;
        img2 = imageConstants.prem2;
      } else if (this.props.mensCollection === surveyConstants.conscious) {
        img1 = imageConstants.con1;
        img2 = imageConstants.con2;
      } else if (this.props.mensCollection === surveyConstants.hm_men) {
        img1 = imageConstants.hm1;
        img2 = imageConstants.hm2;
      } else if (this.props.mensCollection === surveyConstants.logg) {
        img1 = imageConstants.logg1;
        img2 = imageConstants.logg2;
      } else if (this.props.mensCollection === surveyConstants.basics) {
        img1 = imageConstants.bas1;
        img2 = imageConstants.bas2;
      } else if (this.props.mensCollection === surveyConstants.divided) {
        img1 = imageConstants.div1;
        img2 = imageConstants.div2;
      } else if (this.props.mensCollection === surveyConstants.modern_classic) {
        img1 = imageConstants.mod1;
        img2 = imageConstants.mod2;
      } else {
        img1 = imageConstants.placehold1;
        img2 = imageConstants.placehold2;
      }
      return [img1, img2];
  }

  render () {
      var route;
      if (this.props.mensCollection === surveyConstants.conscious) {
          route = '/men/colors'
      } else {
          route = '/men/pants'
      }

      var imgs = this.selectImgs();
        return (
          <Container className="survey survey2">
          <h1>What style of shirt do you prefer?</h1>
          <Row>

            <CardDeck className="carddeck carddeck2">
              <Col sm = "2" xs = "0"></Col>
              <SurveyCard surveyImage={imgs[0]} surveyTitle={"Long sleeve"} surveyNext={route} passedFunction={this.selectLongSleeve}/>
              <SurveyCard surveyImage={imgs[1]} surveyTitle={"Short sleeve"} surveyNext={route} passedFunction={this.selectShortSleeve}/>
            </CardDeck>
            </Row>
          </Container>
        )
      }
}

function mapStateToProps(state, ownProps) {
    return {
        mensCollection: state.surveyReducer.mensCollection,
        shirtType: state.surveyReducer.shirtType
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (MensShirts);
