import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, CardDeck } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import RecCard from './RecommendationCard.js';
import {bindActionCreators} from "redux";
import * as recommendationActions from "../../actions/recommendActions";
import {connect} from "react-redux";
import * as surveyConstants from '../../constants/survey-constants';
import Spinner from "reactstrap/es/Spinner";
import {dark_colors} from "../../constants/survey-constants";


// TODO need to refresh state when new collections selected
class Recommend extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collection: null,
            colorFilterComplex: false
        };

        this.getCorrectItems = this.getCorrectItems.bind(this);
        this.itemsLoaded = this.itemsLoaded.bind(this);
        this.filterUnnecessaryItems = this.filterUnnecessaryItems.bind(this);
        this.filterComplexColors = this.filterComplexColors.bind(this);
        this.filterSimpleColors = this.filterSimpleColors.bind(this);
        this.getItemsForCollection = this.getItemsForCollection.bind(this);
    }

    componentWillMount() {
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
            collection: collection
        });
    }

    getCorrectItems(shirts, pants, onePieces, outerwear, shoes, accessories) {
        // TODO removed accessories from mens premium quality, mens trend, womens premium quality, womens trend, womens divided, womens conscious
        var gender = this.props.gender;
        var collection = this.state.collection;
        var womensClothingType = this.props.womenClothingType;
        var itemsForCollection = [];
        if (gender === surveyConstants.mens) {

            if ([surveyConstants.premium_quality, surveyConstants.trend].includes(collection)) {
                itemsForCollection = [shirts, pants, outerwear, shoes];
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
                itemsForCollection = mainItems.concat([outerwear, shoes]);
            } else if ([surveyConstants.modern_classic, surveyConstants.logg].includes(collection)) {
                itemsForCollection = mainItems.concat([outerwear]);
            } else if ([surveyConstants.party].includes(collection)) {
                itemsForCollection = mainItems.concat([shoes]);
            } else if ([surveyConstants.conscious].includes(collection)) {
                itemsForCollection = mainItems.concat([outerwear]);
            }
        }

        return itemsForCollection;
    }

    itemsLoaded(items) {
        var numPopArrays = 0;
        for (var n = 0; n < items.length; n++) {
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

    filterUnnecessaryItems(items) {
        var gender = this.props.gender;
        var collection;
        if (gender === surveyConstants.mens) {
            collection = this.props.mensCollection;
        } else if (gender === surveyConstants.womens) {
            collection = this.props.womensCollection;
        }

        var filteredItems = items;
        if (this.props.gender === surveyConstants.mens) {
            var shirtType = this.props.shirtType;
            var pantsType = this.props.pantsType;
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

            var cats = [shirtsTypeFilterArray, pantsTypeFilterArray];

            for (var t = 0; t < 2; t++) {
                var filteredItemsForIndex = [];
                for (var i = 0; i < filteredItems[t].length; i++) {
                    var item = filteredItems[t][i];
                    if (item.mainCategoryCode && cats[t].includes(item.mainCategoryCode)) {
                        filteredItemsForIndex.push(item);
                    }
                }
                filteredItems[t] = filteredItemsForIndex;
            }

            /*
            var shirtsForFilter = filteredItems[0];
            var filteredShirts = [];
            for (var s = 0; s < shirtsForFilter.length; s++) {
                var shirt = shirtsForFilter[s];
                if (shirt.mainCategoryCode && shirtsTypeFilterArray.includes(shirt.mainCategoryCode)) {
                    filteredShirts.push(shirt);
                }
            }
            filteredItems[0] = filteredShirts;

            var pantsForFilter = filteredItems[1];
            var filteredPants = [];
            for (var p = 0; p < pantsForFilter.length; p++) {
                var pant = pantsForFilter[p];
                if (pantsTypeFilterArray.includes(pant.mainCategoryCode)) {
                    filteredPants.push(pant);
                }
            }
            filteredItems[1] = filteredPants;
            */

        } else if (gender === surveyConstants.womens && collection === surveyConstants.premium_quality) {
            for (var x = 0; x < filteredItems.length; x++) {
                var filteredItemsForIndex = [];
                for (var y = 0; y < filteredItems[x].length; y++) {
                    var item = filteredItems[x][y];
                    for (var a = 0; a < item.articles.length; a++) {
                        if (item.articles[a].hasOwnProperty('markers')) {
                            if (item.articles[a].markers[0].text !== 'BABY EXCLUSIVE') {
                                filteredItemsForIndex.push(item);
                            } else if (item.articles[a].markers[0].text === 'BABY EXCLUSIVE') {
                                console.log('this item is baby clothings', item);
                            }
                        }
                    }
                }
                filteredItems[x] = filteredItemsForIndex;
            }
        }

        return filteredItems;

    }

    filterComplexColors(items) {
        // TODO write if needed
    }

    filterSimpleColors(items) {
        var gender = this.props.gender;
        var color = this.props.color;
        var shirtType = this.props.shirtType;
        var pantsType = this.props.pantsType;
        var womensClothingType = this.props.womenClothingType;
        var colors;

        var collection;
        if (gender === surveyConstants.mens) {
            collection = this.props.mensCollection;
        } else if (gender === surveyConstants.womens) {
            collection = this.props.womensCollection;
        }

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
        // TODO In most cases, indexes 1 or 2 are outerwear. Need to think about including patterns in these, might not want patterns
        // TODO need to implement exact rule
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
            if (collection === surveyConstants.party) {
                if (womensClothingType === surveyConstants.one_piece) {
                    filterIndexes = [0];
                } else if (womensClothingType === surveyConstants.two_piece || color === surveyConstants.dark_colors) {
                    if (color === surveyConstants.bright_colors) {
                        filterIndexes = [0,1];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0];
                    }
                }
            } else if (collection === surveyConstants.modern_classic) {
                if (womensClothingType === surveyConstants.one_piece) {
                    if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                        filterIndexes = [0,1];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0,1];
                    }
                } else if (womensClothingType === surveyConstants.two_piece) {
                    if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                        filterIndexes = [0,1,2];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0,1,2];
                    }
                }
            } else if (collection === surveyConstants.conscious) {
                if (womensClothingType === surveyConstants.one_piece) {
                    if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                        filterIndexes = [0,1];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0,1];
                    }
                } else if (womensClothingType === surveyConstants.two_piece) {
                    if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                        filterIndexes = [0,1,2];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0,1,2];
                    }
                }
            } else if (collection === surveyConstants.premium_quality) {
                if (womensClothingType === surveyConstants.one_piece) {
                    if (color === surveyConstants.bright_colors) {
                        filterIndexes = [1];
                    } else if (color === surveyConstants.dark_colors) {
                        filterIndexes = [0,1];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0];
                    }
                } else if (womensClothingType === surveyConstants.two_piece) {
                    if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                        filterIndexes = [0,1,2];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0];
                    }
                }
            } else if (collection === surveyConstants.trend) {
                if (womensClothingType === surveyConstants.one_piece) {
                    if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                        filterIndexes = [0,1];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0,1];
                    }
                } else if (womensClothingType === surveyConstants.two_piece) {
                    if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                        filterIndexes = [0,1,2];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0,1,2];
                    }
                }
            } else if (collection === surveyConstants.divided) {
                if (womensClothingType === surveyConstants.one_piece) {
                    if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                        filterIndexes = [0,1];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0,1];
                    }
                } else if (womensClothingType === surveyConstants.two_piece) {
                    if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                        filterIndexes = [0,1,2];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0,1,2];
                    }
                }
            } else if (collection === surveyConstants.logg) {
                if (womensClothingType === surveyConstants.one_piece) {
                    if (color === surveyConstants.bright_colors || surveyConstants === surveyConstants.dark_colors) {
                        filterIndexes = [0,1];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0,1];
                    }
                } else if (womensClothingType === surveyConstants.two_piece) {
                    if (color === surveyConstants.bright_colors || color === surveyConstants.dark_colors) {
                        filterIndexes = [0,1,2];
                    } else if (color === surveyConstants.patterns) {
                        filterIndexes = [0,1,2];
                    }
                }
            }
        }

        var itemsFiltered = items;
        for (var x = 0; x < filterIndexes.length; x++) {
            var itemsToBeFiltered = itemsFiltered[filterIndexes[x]];
            var filteredItemsForIndex = [];
            for (var y = 0; y < itemsToBeFiltered.length; y++) {
                var item = itemsToBeFiltered[y];
                if (colors.includes(item.articles[0].color.text)) {
                    filteredItemsForIndex.push(item);
                }
            }
            itemsFiltered[filterIndexes[x]] = filteredItemsForIndex;
        }

        return itemsFiltered;
    }

    // Returns all item catergories that have items (this is just organizing the payloads from the database)
    getItemsForCollection(shirts, pants, onePieces, outerwear, shoes, accessories) {
        var itemsForCollection = this.getCorrectItems(shirts, pants, onePieces, outerwear, shoes, accessories);
        var itemsLoaded = this.itemsLoaded(itemsForCollection);

        var items = [];
        if (itemsLoaded === true) {
            var shirtsPantsFiltered = this.filterUnnecessaryItems(itemsForCollection);
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
        console.log(this.props.womensCollection);

        if (itemsResult[1] === true) {
            var cards = [];
            for (var i = 0; i < itemsResult[0].length; i++) {
                cards.push(<RecCard itemKey={i} items={itemsResult[0][i]}/>)
            }
            cardDeck = <div>
                <CardDeck className='carddeck carddeckRec'>{cards}</CardDeck>
                <Link to="/order/">
                    <Button className="tryOn">Try on these items</Button>
                </Link>
            </div>
        } else {
            cardDeck = <div style={{'paddingTop': '18%'}}>
                <Spinner style={{width: '10rem', height: '10rem'}} color="light"/>
            </div>;
        }

        return(
          <Container className="recommendations">
          <Row>
            <h1>Here's what we found for you</h1>
              {cardDeck}
              </Row>
          </Container>
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
