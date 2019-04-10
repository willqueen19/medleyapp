import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/TwoSurveyCard.js';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../assets/MPant-1.jpeg';
import img2 from '../../assets/MPant-2.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';
import * as imageConstants from '../../constants/mens-pant-const.js';

class MensPants extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectPants = this.selectPants.bind(this);
    this.selectShorts = this.selectShorts.bind(this);
    this.selectImgs = this.selectImgs.bind(this);
  }

  selectPants() {
      this.props.actions.selectPantsType(surveyConstants.pants);
  }

  selectShorts() {
      this.props.actions.selectPantsType(surveyConstants.shorts);
  }

  selectImgs() {
    var img1;
    var img2;
    // TODO modern classic, trend and divided need to be added (premium quality and conscious as well?)
      if (this.props.mensCollection === surveyConstants.hm_men) {
        if (this.props.shirtType === surveyConstants.long_sleeve)
        {
          img1 = imageConstants.hml1;
          img2 = imageConstants.hml2;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve) {
          img1 = imageConstants.hms1;
          img2 = imageConstants.hms2;
        }
      }
      else if (this.props.mensCollection === surveyConstants.logg) {
        if (this.props.shirtType === surveyConstants.long_sleeve)
        {
          img1 = imageConstants.loggl1;
          img2 = imageConstants.loggl2;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve) {
          img1 = imageConstants.loggs1;
          img2 = imageConstants.loggs2;
        }
      }
      else if (this.props.mensCollection === surveyConstants.basics) {
        if (this.props.shirtType === surveyConstants.long_sleeve)
        {
          img1 = imageConstants.basl1;
          img2 = imageConstants.basl2;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve) {
          img1 = imageConstants.bass1;
          img2 = imageConstants.bass2;
        }
      }
      else {
        img1 = imageConstants.placehold1;
        img2 = imageConstants.placehold2;
      }
      return [img1, img2];
  }

  render () {
    var imgs = this.selectImgs();
    return (
      <Container className="survey survey2">
      <Row>
        <h1>What style of pants do you prefer?</h1>
        <CardDeck className="carddeck carddeck2">
          <Col sm = "2" xs = "0"></Col>
          <SurveyCard surveyImage={imgs[0]} surveyTitle={"Shorts"} surveyNext={'/men/colors'} passedFunction={this.selectShorts}/>
          <SurveyCard surveyImage={imgs[1]} surveyTitle={"Pants"} surveyNext={'/men/colors'} passedFunction={this.selectPants}/>
        </CardDeck>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
        mensCollection: state.surveyReducer.mensCollection,
        shirtType: state.surveyReducer.shirtType,
        pantsType: state.surveyReducer.pantsType
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (MensPants);
