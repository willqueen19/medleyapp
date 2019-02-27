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
import * as surveyConstants from '../../constants/survey-constants';


class Recommend extends Component {

    constructor(props) {
        super(props);

        console.log('props at recommend page: ', props);

        this.state = {
            gender: this.props.gender,
            mensCollection: this.props.mensCollection,
            womensCollection: this.props.womensCollection,
            shirtType: this.props.shirtType,
            pantsType: this.props.pantsType,
            womensClothingType: this.props.womensClothingType,
            color: this.props.color,
            // TODO: these don't need to be stored in the state
            shirts: [],
            pants: [],
            shoes: [],
            sweaters: [],
            jackets: [],
            dress: []
        };

        this.getClothes = this.getClothes.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
    }

    componentWillMount() {

        this.props.actions.getShirts(this.state.gender, this.state.mensCollection);
        this.props.actions.getPants(this.props.gender, this.props.mensCollection);
        this.props.actions.getSweaters(this.props.gender, this.props.mensCollection);
        this.props.actions.getJackets(this.props.gender, this.props.mensCollection);

        //console.log('state gender', this.props.gender);
        //console.log('state mensCollection', this.props.mensCollection);

    }

    getClothes() {

        console.log('state in getclothes', this.state);

        this.props.actions.getShirts(this.props.gender, this.props.mensCollection);
        this.props.actions.getPants(this.props.gender, this.props.mensCollection);
        this.props.actions.getSweaters(this.props.gender, this.props.mensCollection);
        this.props.actions.getJackets(this.props.gender, this.props.mensCollection);

        //this.props.actions.getShirts(this.state.gender, this.state.mensCollection);
        //this.props.actions.getPants(this.props.gender, this.props.mensCollection);
        //this.props.actions.getSweaters(this.props.gender, this.props.mensCollection);
        //this.props.actions.getJackets(this.props.gender, this.props.mensCollection);

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

        console.log('THIS IS THE SHIRT', shirt);

        // TODO: ideally should only render card for categories with more than 0 items in them
        var shirtImage;
        var pantImage;
        var sweaterImage;
        var jacketImage;
        var shirtName = '';
        var pantName = '';
        var sweaterName = '';
        var jacketName = '';
        var shirtPrice = '';
        var pantPrice = '';
        var sweaterPrice = '';
        var jacketPrice = '';

        if (shirt != null && pant != null && sweater != null && jacket != null) {
            shirtImage = shirt.images[0].url;
            pantImage = pant.images[0].url;
            sweaterImage = sweater.images[0].url;
            jacketImage = jacket.images[0].url;
            shirtName = shirt.name;
            pantName = pant.name;
            sweaterName = sweater.name;
            jacketName = jacket.name;
            shirtPrice = shirt.price.formattedValue;
            pantPrice = pant.price.formattedValue;
            sweaterPrice = sweater.price.formattedValue;
            jacketPrice = jacket.price.formattedValue;
        } else {
            shirtImage = placeholdImg;
            pantImage = placeholdImg;
            sweaterImage = placeholdImg;
            jacketImage = placeholdImg
        }

        console.log('shirts', shirts);
        console.log('pants', pants);
        console.log('sweaters', sweaters);
        console.log('jackets', jackets);

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

        array: state.recommendReducer.array,
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
