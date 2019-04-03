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
            items: [],
            itemIndexes: [],
            gender: null,
            collection: null,
            womensClothingType: null,
            shirtType: null,
            pantsType: null
        };

        this.getItemsForCollection = this.getItemsForCollection.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
    }

    componentWillMount() {

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
            gender: gender,
            collection: collection,
            womensClothingType: this.props.womensClothingType,
            shirtType: this.props.shirtType,
            pantsType: this.props.pantsType
        });
    }

    // Returns all item catergories that have items (this is just organizing the payloads from the database)
    getItemsForCollection(shirts, pants, onePieces, outerwear, shoes, accessories) {
        var gender = this.state.gender;
        var collection = this.state.collection;
        var womensClothingType = this.props.womenClothingType;
        var shirtType = this.props.shirtType;
        var pantsType = this.props.pantsType;
        var color = this.props.color;
        var itemsForCollection = [];

        // SELECTING CORRECT ITEMS FOR COLLECTION
        if (gender === surveyConstants.mens) {
            if (collection === surveyConstants.premium_quality) {
                itemsForCollection = [shirts, pants, outerwear, shoes, accessories];
            } else if (collection === surveyConstants.modern_classic) {
                itemsForCollection = [shirts, pants, outerwear];
            } else if (collection === surveyConstants.conscious) {
                itemsForCollection = [shirts, pants, outerwear];
            } else if (collection === surveyConstants.hm_men) {
                itemsForCollection = [shirts, pants, outerwear];
            } else if (collection === surveyConstants.trend) {
                itemsForCollection = [shirts, pants, outerwear, shoes, accessories];
            } else if (collection === surveyConstants.divided) {
                itemsForCollection = [shirts, pants, outerwear];
            } else if (collection === surveyConstants.logg) {
                itemsForCollection = [shirts, pants];
            } else if (collection === surveyConstants.basics) {
                // fixed but needs resizing due to image pixelation
                itemsForCollection = [shirts, pants];
            }
        } else if (gender === surveyConstants.womens) {
            var mainItems = [];
            if (womensClothingType === surveyConstants.one_piece) {
                mainItems = [onePieces];
            } else if (womensClothingType === surveyConstants.two_piece) {
                mainItems = [shirts, pants];
            }

            if (collection === surveyConstants.party) {
                itemsForCollection = mainItems.concat([outerwear, shoes]);
            } else if (collection === surveyConstants.modern_classic) {
                itemsForCollection = mainItems.concat([outerwear]);
            } else if (collection === surveyConstants.conscious) {
                itemsForCollection = mainItems.concat([outerwear, accessories]);
            } else if (collection === surveyConstants.premium_quality) {
                itemsForCollection = mainItems.concat([outerwear, shoes, accessories]);
            } else if (collection === surveyConstants.trend) {
                itemsForCollection = mainItems.concat([outerwear, shoes, accessories]);
            } else if (collection === surveyConstants.divided) {
                itemsForCollection = mainItems.concat([outerwear, shoes, accessories]);
            } else if (collection === surveyConstants.logg) {
                itemsForCollection = mainItems.concat([outerwear]);
            }
        }

        var numPopArrays = 0;
        var n;
        for (n = 0; n < itemsForCollection.length; n++) {
            if (itemsForCollection[n].length > 0) {
                numPopArrays += 1;
            }
        }

        var totalPopArrays = itemsForCollection.length;
        var itemsLoaded = false;
        if (numPopArrays === totalPopArrays) {
            itemsLoaded = true
        }

        //Mens clothing filtering
        let filteredItems = itemsForCollection;
        if (itemsLoaded === true && gender === surveyConstants.mens) {
            var shirtsTypeFilterArray;
            var pantsTypeFilterArray;
            if (shirtType === surveyConstants.short_sleeve) {
                shirtsTypeFilterArray = surveyConstants.shortSleeveCats;
            } else if (shirtType === surveyConstants.long_sleeve) {
                shirtsTypeFilterArray = surveyConstants.longSleeveCats;
            }

            if (pantsType === surveyConstants.shorts) {
                pantsTypeFilterArray = surveyConstants.shortsCats;
            } else if (pantsType === surveyConstants.pants) {
                pantsTypeFilterArray = surveyConstants.pantsCats;
            }

            var s;
            var shirtsForFilter = filteredItems[0];
            var filteredShirts = [];
            for (s = 0; s < shirtsForFilter.length; s++) {
                var shirt = shirtsForFilter[s];
                if (shirt.mainCategoryCode && shirtsTypeFilterArray.includes(shirt.mainCategoryCode)) {
                    filteredShirts.push(shirt);
                }
            }
            filteredItems[0] = filteredShirts;

            var p;
            var pantsForFilter = filteredItems[1];
            var filteredPants = [];
            for (p = 0; p < pantsForFilter.length; p++) {
                var pant = pantsForFilter[p];
                if (pantsTypeFilterArray.includes(pant.mainCategoryCode)) {
                    filteredPants.push(pant);
                }
            }
            filteredItems[1] = filteredPants
        }

        if (color = surveyConstants.dark_colors) {

        }

        //Color Filtering


        return [filteredItems, itemsLoaded];
    }



    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render () {
        var itemsResult = this.getItemsForCollection(this.props.shirts, this.props.pants, this.props.onePieces, this.props.outerwear, this.props.shoes, this.props.accessories);
        var cardDeck;

        if (itemsResult[1] === true) {
            var cards = [];
            var i;
            for (i = 0; i < itemsResult[0].length; i++) {
                cards.push(<RecCard itemKey={i} items={itemsResult[0][i]}/>)
            }
            cardDeck = <div>
                <CardDeck className='carddeck carddeckRec'>{cards}</CardDeck>
                <Link to="/sizing/">
                    <Button className="tryOn">Try on these items</Button>
                </Link>
            </div>
        } else {
            cardDeck = <Spinner/>;
        }

        return(
          <div className="recommendations">
            <h1>Here's what we found for you</h1>
              {cardDeck}
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
        accessories: state.recommendReducer.accessories,
        currentOutfit: state.recommendReducer.currentOutfit
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(recommendationActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Recommend);
