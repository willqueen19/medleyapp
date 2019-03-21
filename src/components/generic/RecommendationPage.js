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
            itemIndexes: [],
            gender: null,
            collection: null,
            womensClothingType: null,
            shirtType: null,
            pantsType: null
        };

        this.setCardRenderState = this.setCardRenderState.bind(this);
        this.setItemsState = this.setItemsState.bind(this);
        this.getItemsForCollection = this.getItemsForCollection.bind(this);
        this.setItemsAndIndexes = this.setItemsAndIndexes.bind(this);
        this.changeSingleIndex = this.changeSingleIndex.bind(this);
        this.getCards = this.getCards.bind(this);
        this.getCard = this.getCard.bind(this);
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
            //loaded: true,
            //items: [this.props.shirts, this.props.pants, this.props.onePieces, this.props.outerwear, this.props.shoes, this.props.accessories]
            gender: gender,
            collection: collection,
            womensClothingType: this.props.womensClothingType,
            shirtType: this.props.shirtType,
            pantsType: this.props.pantsType
        });



    }

    componentDidMount() {
        var itemsForCollection = this.getItemsForCollection(this.props.shirts, this.props.pants, this.props.onePieces, this.props.outerwear, this.props.shoes, this.props.accessories);
        console.log('items for collection in Component did mount', itemsForCollection);

        //this.setItemsState(itemsForCollection);
    }

    verifyDataLoaded(matrix) {

    }

    setCardRenderState() {
        this.setState({
            cardsRendered: true
        });
    };

    setItemsState(items) {
        this.setState( {
            items: items
        })
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
        } else if (gender === surveyConstants.womens) {
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
        if (numPopArrays === totalPopArrays) {
            return [itemsForCollection, true];
        } else {
            return [[], false];
        }


    }

    //getItemsForTastes(c)

    setItemsAndIndexes(items) {
        var indexes = [];
        var i;
        if (items instanceof Array && items.length > 0 && this.state.itemIndexes.length === 0) {
            for (i = 0; i < items.length; i++) {
                var index;
                if (items[i].length === 1) {
                    index = 0;
                } else {
                    index = this.getRandomInt(items[i].length);
                }
                indexes.push(index);
            }
            this.setState({
                items: items,
                itemIndexes: indexes,
            });
        }
    }

    changeSingleIndex(key) {
        console.log('change single index is being triggered');
        var i;
        var newIdexes = this.state.itemIndexes;
        for (i = 0; i < this.state.items.length; i++) {
            if (i === key) {
                newIdexes[i] = this.getRandomInt(this.state.items[i].length);
            }
        }
        this.setState({
            itemIndexes: newIdexes
        });
    }

    getCards() {
        var items = this.state.items;
        var itemIndexes = this.state.itemIndexes;
        var cards = [];
        if (items.length > 0 && itemIndexes.length > 0 && items.length === itemIndexes.length) {
            var i;
            for (i = 0; i < items.length; i++) {
                const index = i;
                var itemsForType = items[i];
                var indexForType = itemIndexes[i];
                var item = itemsForType[indexForType];
                var card = <RecCard key={index}
                                    resultsImage={item.images[0].url}
                                    resultsName={item.name}
                                    resultsPrice={item.price.formattedValue}
                                    onClick={() => this.changeSingleIndex(index)}/>;
                cards.push(card);
            }
            return <CardDeck className='carddeck carddeckRec'>{cards}</CardDeck>;
        } else {
            return <Spinner/>
        }
    }

    getCard(key, item) {
        var card = <RecCard key={key} resultsImage={item.images[0].url} resultsName={item.name} resultsPrice={item.price.formattedValue} />
        return card;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render () {
        // TODO: Getting new item will be done by calling the function on the item type, therefore each card can have its own behavior
        //console.log('all items', [this.props.shirts, this.props.pants, this.props.onePieces, this.props.outerwear, this.props.shoes, this.props.accessories]);
        var itemsResult = this.getItemsForCollection(this.props.shirts, this.props.pants, this.props.onePieces, this.props.outerwear, this.props.shoes, this.props.accessories);
        var itemsForCollection = itemsResult[0];
        var itemsAreLoaded = itemsResult[1];
        //console.log('this is your collection', itemsForCollection);

        if (itemsAreLoaded === true) {
            this.setItemsAndIndexes(itemsForCollection);
        }

        var cards = this.getCards();

        return(
          <div className="recommendations">
            <h1>Here's what we found for you</h1>
              {cards}
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
