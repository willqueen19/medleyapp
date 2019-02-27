import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from "reactstrap";
import RecCard from './RecommendationCard.js';
import placeholdImg from '../../assets/MW-1.jpeg';
import placeholdLogo from '../../assets/placeHoldLogo.svg'
import hmLogo from '../../assets/hm-logo.png'
import {bindActionCreators} from "redux";
import * as recommendationActions from "../../actions/recommendActions";
import {connect} from "react-redux";
import * as surveyConstants from '../../constants/survey-constants';


class Recommend extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        this.getClothes = this.getClothes.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
    }

    componentWillMount() {

        // TODO: call function for every type of clothing, then only grab categories that have results

        this.props.actions.getShirts(this.props.gender, this.props.mensCollection);
        this.props.actions.getPants(this.props.gender, this.props.mensCollection);
        this.props.actions.getSweaters(this.props.gender, this.props.mensCollection);
        this.props.actions.getJackets(this.props.gender, this.props.mensCollection);



    }

    getClothes() {

        this.props.actions.getShirts(this.props.gender, this.props.mensCollection);
        this.props.actions.getPants(this.props.gender, this.props.mensCollection);
        this.props.actions.getSweaters(this.props.gender, this.props.mensCollection);
        this.props.actions.getJackets(this.props.gender, this.props.mensCollection);

        /*
        if (this.props.gender === surveyConstants.mens) {

            this.props.actions.getShirts(this.props.gender, this.props.mensCollection);
            this.props.actions.getPants(this.props.gender, this.props.mensCollection);
            this.props.actions.getSweaters(this.props.gender, this.props.mensCollection);
            this.props.actions.getJackets(this.props.gender, this.props.mensCollection);

        } else if (this.props.gender === surveyConstants.womens) {

            this.props.actions.getSweaters(this.props.gender, this.props.mensCollection);
            this.props.actions.getJackets(this.props.gender, this.props.mensCollection);

            if (this.props.womensClothingType === surveyConstants.two_piece) {
                this.props.actions.getShirts(this.props.gender, this.props.mensCollection);
                this.props.actions.getPants(this.props.gender, this.props.mensCollection);
            } else if (this.props.womensClothingType === surveyConstants.one_piece) {
                this.props.actions.getDresses(this.props.mensCollection);
            }

        }
        */

    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render () {

        var shirts = this.props.shirts;
        var pants = this.props.pants;
        var sweaters = this.props.sweaters;
        var jackets = this.props.jackets;

        var shirt = shirts[this.getRandomInt(shirts.length)];
        var pant =  pants[this.getRandomInt(pants.length)];
        var sweater =  sweaters[this.getRandomInt(sweaters.length)];
        var jacket =  jackets[this.getRandomInt(jackets.length)];

        // TODO: ideally should only render card for categories with more than 0 items in them
        var shirtImage;
        var shirtName = 'Shirt';
        var shirtPrice = '';
        var pantImage;
        var pantName = 'Pants';
        var pantPrice = '';
        var sweaterImage;
        var sweaterName = 'Sweater';
        var sweaterPrice = '';
        var jacketImage;
        var jacketName = 'Jacket';
        var jacketPrice = '';

        if (shirt != null && pant != null && sweater != null && jacket != null) {
            shirtImage = shirt.images[0].url;
            shirtName = shirt.name;
            shirtPrice = shirt.price.formattedValue;
            pantImage = pant.images[0].url;
            pantName = pant.name;
            pantPrice = pant.price.formattedValue;
            sweaterImage = sweater.images[0].url;
            sweaterName = sweater.name;
            sweaterPrice = sweater.price.formattedValue;
            jacketImage = jacket.images[0].url;
            jacketName = jacket.name;
            jacketPrice = jacket.price.formattedValue;
        } else {
            shirtImage = placeholdLogo;
            pantImage = placeholdLogo;
            sweaterImage = placeholdLogo;
            jacketImage = placeholdLogo
        }

        return(
          <div className="recommendations">
            <h1>Here's what we found for you</h1>
            <CardDeck className="carddeck carddeckRec">
              <RecCard resultsImage={shirtImage} resultsName={shirtName} resultsPrice={shirtPrice} />
              <RecCard resultsImage={pantImage} resultsName={pantName} resultsPrice={pantPrice} />
              <RecCard resultsImage={sweaterImage} resultsName={sweaterName} resultsPrice={sweaterPrice} />
              <RecCard resultsImage={jacketImage} resultsName={jacketName} resultsPrice={jacketPrice} />
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
        sweaters: state.recommendReducer.sweaters,
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
