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
import {shirt} from "../../constants/survey-constants";


class Recommend extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };

        this.getRandomInt = this.getRandomInt.bind(this);
    }

    async componentWillMount() {

        // TODO: call function for every type of clothing, then only grab categories that have results
        var gender = this.props.gender;
        var collection;
        if (this.props.gender === surveyConstants.mens) {
            collection = this.props.mensCollection;
        } else if (this.props.gender === surveyConstants.womens) {
            collection = this.props.womensCollection;
        }

        await this.props.actions.getClothingItem(surveyConstants.shirt, gender, collection);
        await this.props.actions.getClothingItem(surveyConstants.pants, gender, collection);
        await this.props.actions.getClothingItem(surveyConstants.one_piece, gender, collection);
        await this.props.actions.getClothingItem(surveyConstants.outerwear, gender, collection);
        await this.props.actions.getClothingItem(surveyConstants.shoes, gender, collection);
        await this.props.actions.getClothingItem(surveyConstants.accessory, gender, collection);
        this.setState({
            loaded: true
        });

    }

    /*

    componentDidMount() {

        this.setState({
            shirts: this.props.shirts,
            pants: this.props.pants,
            onePieces: this.props.onePieces,
            outerwear: this.props.outerwear,
            shoes: this.props.shoes,
            accessories: this.props.accessories
        });
    }

    */

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render () {

        // TODO: Add if statement checking for collection, this would allow us to select the only present
        // TODO: the categories that were avail for each collection

        let shirts      = this.props.shirts;
        let pants       = this.props.pants;
        let onePieces   = this.props.onePieces;
        let outerWear   = this.props.outerwear;
        let shoes       = this.props.shoes;
        let accessories = this.props.accessories;
        let allClothes = [shirts, pants, onePieces, outerWear, shoes, accessories];
        var nonEmptyClothes = [];
        var i;

        console.log('is app loaded', this.state.loaded);

        for (i = 0; i < allClothes.length; i ++) {
            if (allClothes[i].length !== 0) {
                nonEmptyClothes.push(allClothes[i]);
            }
        };

        //once

        console.log('all arrays', allClothes);
        console.log('populated arrays', nonEmptyClothes);



        /*
        var shirt = shirts[this.getRandomInt(shirts.length)];
        var pant =  pants[this.getRandomInt(pants.length)];
        var sweater =  sweaters[this.getRandomInt(sweaters.length)];
        var jacket =  jackets[this.getRandomInt(jackets.length)];\
        */

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

        /*

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
        }

        */

        shirtImage = placeholdLogo;
        pantImage = placeholdLogo;
        sweaterImage = placeholdLogo;
        jacketImage = placeholdLogo;

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
        onePieces: state.recommendReducer.onePieces,
        outerwear: state.recommendReducer.outerwear,
        shoes: state.recommendReducer.shoes,
        accessories: state.recommendReducer.accessories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(recommendationActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Recommend);
