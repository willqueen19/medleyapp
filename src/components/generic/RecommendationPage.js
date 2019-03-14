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
import Spinner from "reactstrap/es/Spinner";
import {trend} from "../../constants/survey-constants";

import _ from 'lodash';


class Recommend extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            cardsRendered: false,
            items: [],
            gender: null,
            collection: null,
            womensClothingType: null,
            shirtType: null,
            pantsType: null
        };

        this.setCardRenderState = this.setCardRenderState.bind(this);
        this.getItemsForCollection = this.getItemsForCollection.bind(this);
        this.getItemFromItems = this.getItemFromItems.bind(this);
        this.getNewCard = this.getNewCard.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
    }

    async componentWillMount() {

        // TODO: call function for every type of clothing, then only grab categories that have results
        var gender = this.props.gender;
        var collection;
        if (gender === surveyConstants.mens) {
            collection = this.props.mensCollection;
        } else if (gender === surveyConstants.womens) {
            collection = this.props.womensCollection;
        }

        this.props.actions.getClothingItem(surveyConstants.shirt, gender, collection);
        this.props.actions.getClothingItem(surveyConstants.pants, gender, collection);
        this.props.actions.getClothingItem(surveyConstants.one_piece, gender, collection);
        this.props.actions.getClothingItem(surveyConstants.outerwear, gender, collection);
        this.props.actions.getClothingItem(surveyConstants.shoes, gender, collection);
        this.props.actions.getClothingItem(surveyConstants.accessory, gender, collection);
        this.setState({
            //loaded: true,
            //items: [this.props.shirts, this.props.pants, this.props.onePieces, this.props.outerwear, this.props.shoes, this.props.accessories]
            gender: gender,
            collection: collection,
            womensClothingType: this.props.womensClothingType,
            shirtType: this.props.shirtType,
            pantsType: this.props.pantsType


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

    verifyDataLoaded(matrix) {

    }

    setCardRenderState() {
        this.setState({
            cardsRendered: true
        });
    }

    // Returns all item catergories that have items (this is just organizing the payloads from the database)
    getItemsForCollection(shirts, pants, onePieces, outerwear, shoes, accessories) {
        var gender = this.state.gender;
        var collection = this.state.collection;
        var itemsForCollection = [];
        var totalPopArrays = 0;
        if (gender === surveyConstants.mens) {
            if (collection === surveyConstants.premium_quality) {
                // TODO: Not working
            } else if ([surveyConstants.modern_classic, surveyConstants.conscious, surveyConstants.hm_men].includes(collection)) {
                itemsForCollection = [shirts, pants, outerwear];
                totalPopArrays = 3;
            } else if (collection === surveyConstants.trend) {
                itemsForCollection = [shirts, pants, outerwear, shoes, accessories];
                totalPopArrays = 5;
            } else if (collection === surveyConstants.divided) {
                itemsForCollection = [shirts, pants, outerwear, accessories];
                totalPopArrays = 4;
            } else if (collection === surveyConstants.logg) {
                itemsForCollection = [shirts, pants];
                totalPopArrays = 2;
            } else if (collection === surveyConstants.basics) {
                // TODO: Not working
            }
        } else if (this.state.gender === surveyConstants.womens) {
            if (collection === surveyConstants.party) {
                itemsForCollection = [shirts, pants, outerwear, shoes];
                totalPopArrays = 4;
            } else if (collection === surveyConstants.modern_classic) {
                itemsForCollection = [shirts, pants, onePieces, outerwear];
                totalPopArrays = 4;
            } else if (collection === surveyConstants.conscious) {
                // TODO: query needs to be fixed, only 6 total items being returned
            } else if (collection === surveyConstants.premium_quality) {
                // TODO: Not working
            } else if ([surveyConstants.trend, surveyConstants.divided].includes(collection)) {
                itemsForCollection = [shirts, pants, onePieces, outerwear, shoes, accessories];
                totalPopArrays = 6;
            } else if (collection === surveyConstants.casual) {
                // TODO: Not working
            }
        }

        var numPopArrays = 0;
        var n;
        for (n = 0; n < itemsForCollection.length; n++) {
            if (itemsForCollection[n].length > 0) {
                numPopArrays += 1;
            }
        }

        // TODO: Not entirely sure the following lines of code do anything
        //console.log(itemsForCollection.length);
        //console.log(totalPopArrays);
        if (numPopArrays === totalPopArrays) {
            return itemsForCollection;
        } else {
            return [];
        }

    }

    getItemFromItems(ItemList, color, fit) {

    }

    getNewCard(key, item) {
        var card = <RecCard key={key} resultsImage={item.images[0].url} resultsName={item.name} resultsPrice={item.price.formattedValue} />
        return card;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render () {

        // TODO: Add if statement checking for collection, this would allow us to select the only render cards if all are loaded
        // TODO: the categories that were avail for each collection
        // TODO: Verify all have been loaded by checking total number of populated arrays in final
        // TODO: Getting new item will be done by calling the function on the item type, therefore each card can have its own behavior

        //console.log('all items', [shirts, pants, onePieces, outerwear, shoes, accessories]);
        var itemsForCollection = this.getItemsForCollection(this.props.shirts, this.props.pants, this.props.onePieces,
                                                            this.props.outerwear, this.props.shoes, this.props.accessories);

        var nonEmptyClothes = [];
        var i;
        for (i = 0; i < itemsForCollection.length; i ++) {
            if (itemsForCollection[i].length !== 0) {
                nonEmptyClothes.push(itemsForCollection[i]);
            }
        };

        var c;
        var cards = [];
        if (nonEmptyClothes.length !== 0) {
            for (c = 0; c < nonEmptyClothes.length; c++) {
                var item;
                if (nonEmptyClothes[c].length === 1) {
                    item = nonEmptyClothes[c][0];
                } else {
                    item = nonEmptyClothes[c][this.getRandomInt(nonEmptyClothes.length)];
                }

                cards.push(this.getNewCard(c, item));
            }
        }

        var spinner = <Spinner/>
        var cardDeck = <CardDeck className='carddeck carddeckRec'>{cards}</CardDeck>

        return(
          <div className="recommendations">
            <h1>Here's what we found for you</h1>
              {cards.length === 0 ? spinner : cardDeck}
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
