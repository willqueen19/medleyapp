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
import {womensLight} from "../../constants/survey-constants";


class Recommend extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            gender: null,
            collection: null,
            womensClothingType: null,
            shirtType: null,
            pantsType: null,
            colorFilterComplex: false
        };

        this.getCorrectItems = this.getCorrectItems.bind(this);
        this.itemsLoaded = this.itemsLoaded.bind(this);
        this.filterMensShirtsPants = this.filterMensShirtsPants.bind(this);
        this.filterComplexColors = this.filterComplexColors.bind(this);
        this.filterSimpleColors = this.filterSimpleColors.bind(this);
        this.getItemsForCollection = this.getItemsForCollection.bind(this);
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

    getCorrectItems(shirts, pants, onePieces, outerwear, shoes, accessories) {
        console.log('SHIRTS', shirts);
        console.log('PANTS', pants);
        console.log('ONEPIECES', onePieces);
        console.log('OUTERWEAR', outerwear);
        console.log('SHOES', shoes);
        console.log('ACCESSORIES', accessories);
        var gender = this.state.gender;
        var collection = this.state.collection;
        var womensClothingType = this.props.womenClothingType;
        var itemsForCollection = [];
        if (gender === surveyConstants.mens) {

            if ([surveyConstants.premium_quality, surveyConstants.trend].includes(collection)) {
                itemsForCollection = [shirts, pants, outerwear, shoes, accessories];
            } else if ([surveyConstants.modern_classic, surveyConstants.conscious, surveyConstants.divided, surveyConstants.logg].includes(collection)) {
                itemsForCollection = [shirts, pants, outerwear];
            } else if ([surveyConstants.basics].includes(collection)) {
                itemsForCollection = [shirts, pants];
            }
        } else if (gender === surveyConstants.womens) {
            var mainItems = [];
            if (womensClothingType === surveyConstants.one_piece) {
                mainItems = [onePieces];
            } else if (womensClothingType === surveyConstants.two_piece) {
                mainItems = [shirts, pants];
            }

            if ([surveyConstants.premium_quality, surveyConstants.trend, surveyConstants.divided].includes(collection)) {
                itemsForCollection = mainItems.concat([outerwear, shoes, accessories]);
            } else if ([surveyConstants.modern_classic, surveyConstants.logg].includes(collection)) {
                itemsForCollection = mainItems.concat([outerwear]);
            } else if ([surveyConstants.party].includes(collection)) {
                itemsForCollection = mainItems.concat([outerwear, shoes]);
            } else if ([surveyConstants.conscious].includes(collection)) {
                itemsForCollection = mainItems.concat([outerwear, accessories]);
            }
        }

        return itemsForCollection;
    }

    itemsLoaded(items) {
        var numPopArrays = 0;
        var n;
        for (n = 0; n < items.length; n++) {
            if (items[n].length > 0) {
                numPopArrays += 1;
            }
        }

        if (numPopArrays === items.length) {
            return true;
        } else {
            return false;
        }

    }

    filterMensShirtsPants(items) {
        if (this.props.gender === surveyConstants.mens) {
            var shirtType = this.props.shirtType;
            var pantsType = this.props.pantsType;
            var filteredItems = items;
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
            filteredItems[1] = filteredPants;

            return filteredItems;
        } else {
            return items;
        }

    }

    filterComplexColors(items) {

    }


    filterSimpleColors(items) {
        var gender = this.props.gender;
        var collection;
        var color = this.props.color;
        var shirtType = this.props.shirtType;
        var pantsType = this.props.pantsType;
        var womensClothingType = this.props.womenClothingType;
        var colors;

        if (gender === surveyConstants.mens) {
            collection = this.props.mensCollection;
        } else if (gender === surveyConstants.womens) {
            collection = this.props.womensCollection;
        }

        console.log(collection + ', ' + color + ', ' + shirtType + ', ' + pantsType + ', ' + womensClothingType);


        if (color === surveyConstants.bright_colors) {
            if (gender === surveyConstants.mens) {
                colors = surveyConstants.mensLight;
            } else if (gender === surveyConstants.womens) {
                colors = surveyConstants.womensLight;
            }
        } else if (color === surveyConstants.dark_colors) {
            if (gender === surveyConstants.mens) {
                colors = surveyConstants.mensDark;
            } else if (gender === surveyConstants.womens) {
                colors = surveyConstants.womensDark;
            }
        } else if (color === surveyConstants.patterns) {
            if (gender === surveyConstants.mens) {
                colors = surveyConstants.mensPatterned;
            } else if (gender === surveyConstants.womens) {
                colors = surveyConstants.womensPattered;
            }
        }


        // TODO Filter by filtering indexes in the following array by way of doing for loop on this array
        var filterIndexes = [];
        if (gender === surveyConstants.mens) {
            if (collection === surveyConstants.premium_quality) {
                if (color === surveyConstants.bright_colors) {
                    if (pantsType === surveyConstants.shorts) {
                        filterIndexes = [0,2];
                    } else {
                        filterIndexes = [0,1,2];
                    }
                } else if (color === surveyConstants.dark_colors) {
                    if (pantsType === surveyConstants.shorts) {
                        filterIndexes = [0,2];
                    } else {
                        filterIndexes = [0,1,2];
                    }
                } else if (color === surveyConstants.patterns) {
                    if (shirtType === surveyConstants.long_sleeve) {
                        filterIndexes = [0];
                    } else {
                        filterIndexes = [];
                    }
                }
            } else if (collection === surveyConstants.modern_classic) {
                if (color === surveyConstants.bright_colors) {
                    if (pantsType === surveyConstants.shorts) {
                        filterIndexes = [0,2];
                    } else {
                        filterIndexes = [0,1,2];
                    }
                } else if (color === surveyConstants.dark_colors) {
                    if (pantsType === surveyConstants.shorts) {
                        filterIndexes = [0,2];
                    } else {
                        filterIndexes = [0,1,2];
                    }
                } else if (color === surveyConstants.patterns) {
                    filterIndexes = [0];
                }
            } else if (collection === surveyConstants.conscious) {
                if (color === surveyConstants.bright_colors) {
                    if (pantsType === surveyConstants.pants) {
                        filterIndexes = [0,1];
                    } else {
                        filterIndexes = [0];
                    }
                } else if (color === surveyConstants.dark_colors) {
                    if (pantsType === surveyConstants.shorts) {
                        filterIndexes = [0,2];
                    } else {
                        filterIndexes = [0,1,2];
                    }
                } else if (color === surveyConstants.patterns) {
                    filterIndexes = [0];
                }
            } else if (collection === surveyConstants.trend) {
                if (color === surveyConstants.bright_colors) {
                    if (shirtType === surveyConstants.long_sleeve) {
                        filterIndexes = [0];
                    } else {
                        filterIndexes = [];
                    }
                } else if (color === surveyConstants.dark_colors) {
                    filterIndexes = [0,1,2];
                } else if (color === surveyConstants.patterns) {
                    if (shirtType === surveyConstants.short_sleeve && pantsType === surveyConstants.shorts) {
                        filterIndexes = [0,1];
                    } else if (shirtType === surveyConstants.long_sleeve && pantsType === surveyConstants.shorts) {
                        filterIndexes = [1];
                    } else if (shirtType === surveyConstants.short_sleeve && pantsType === surveyConstants.pants) {
                        filterIndexes = [0];
                    } else {
                        filterIndexes = [];
                    }
                }
            } else if (collection === surveyConstants.divided) {
                filterIndexes = [0,1,2];
            } else if (collection === surveyConstants.logg) {
                if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                    filterIndexes = [0,1,2];
                } else if (color === surveyConstants.patterns) {
                    if (pantsType === surveyConstants.shorts) {
                        filterIndexes = [0,1];
                    } else {
                        filterIndexes = [0];
                    }
                }
            } else if (collection === surveyConstants.basics) {
                if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                    filterIndexes = [0,1];
                } else if (color === surveyConstants.patterns) {
                    filterIndexes = [];
                }
            }
        } else if (gender === surveyConstants.womens) {
            filterIndexes = [];
        }




        //console.log('prefilteredItems', filteredItems);

        var numToFilter;
        if (gender === surveyConstants.mens) {
            if ([surveyConstants.premium_quality, surveyConstants.trend, surveyConstants.modern_classic, surveyConstants.conscious, surveyConstants.divided, surveyConstants.logg].includes(collection)) {
                numToFilter = 3;
            } else if ([surveyConstants.basics].includes(collection)) {
                numToFilter = 2
            }
        } else if (gender === surveyConstants.womens) {
            if (womensClothingType === surveyConstants.one_piece) {
                numToFilter = 2;

            } else if (womensClothingType === surveyConstants.two_piece) {
                numToFilter = 3;
            }

        }


        var x;
        for (x = 0; x < filterIndexes.length; x++) {
            var itemsToBeFiltered = items[filterIndexes[x]];
            var filteredItemsForIndex = [];
            var y;
            for (y = 0; y < itemsToBeFiltered.length; y++) {
                var item = itemsToBeFiltered[y];
                if (colors.includes(item.articles[0].color.text)) {
                    filteredItemsForIndex.push(item);
                }
            }
            items[filterIndexes[x]] = filteredItemsForIndex;
        }

        // TODO need to implement checker to ensure no empty arrays are passed on
        // TODO need to implement exact rule

        console.log('filteredItems', items);
        return items;
    }

    // Returns all item catergories that have items (this is just organizing the payloads from the database)
    getItemsForCollection(shirts, pants, onePieces, outerwear, shoes, accessories) {
        var gender = this.state.gender;
        var itemsForCollection = this.getCorrectItems(shirts, pants, onePieces, outerwear, shoes, accessories)
        var itemsLoaded = this.itemsLoaded(itemsForCollection);

        var items = [];
        if (itemsLoaded === true) {
            var shirtsPantsFiltered = this.filterMensShirtsPants(itemsForCollection);
            if (this.state.colorFilterComplex) {
                items = this.filterComplexColors(shirtsPantsFiltered);
            } else {
                items = this.filterSimpleColors(shirtsPantsFiltered);
            }
        }

        return [items, itemsLoaded];
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
