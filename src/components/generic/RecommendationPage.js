import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from "reactstrap";
import RecCard from './RecommendationCard.js';
import placeholdImg from '../../assets/MW-1.jpeg';
import {bindActionCreators} from "redux";
import * as surveyActions from '../../actions/surveyActions';
import * as recommendationActions from "../../actions/recommendActions";
import {connect} from "react-redux";


class Recommend extends Component {

  constructor(props) {
    super(props);

    console.log('props at recommend page: ', props);

    this.state = {

    };
  }

  componentWillMount() {
      // TODO: This is where the API calls will be added to get item arrays
  }

    render () {
    return(
      <div className="recommendations">
        <h1>Here's what we found for you</h1>
        <CardDeck className="carddeck carddeckRec">
          <RecCard resultsImage={placeholdImg} resultsName={"Results Name"} resultsPrice={"$19.99"} />
          <RecCard resultsImage={placeholdImg} resultsName={"Results Name"} resultsPrice={"$19.99"} />
          <RecCard resultsImage={placeholdImg} resultsName={"Results Name"} resultsPrice={"$19.99"} />
          <RecCard resultsImage={placeholdImg} resultsName={"Results Name"} resultsPrice={"$19.99"} />
        </CardDeck>
        <Link to="/order/">
            <Button className="tryOn">Try on these items</Button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
        gender: state.surveyReducer.gender,
        mensCollection: state.surveyReducer.mensCollection,
        womensCollection: state.surveyReducer.womensCollection,
        color: state.surveyReducer.color,
        shirtType: state.surveyReducer.shirtType,
        pantsType: state.surveyReducer.pantsType,
        womenClothingType: state.surveyReducer.womenClothingType,

        shirts: state.recommendReducer.shirts,
        pants: state.recommendReducer.pants,
        jackets: state.recommendReducer.jackets,
        shoes: state.recommendReducer.shoes

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(recommendationActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Recommend);
