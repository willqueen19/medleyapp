import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from "reactstrap";
import RecCard from './RecommendationCard.js';
import placeholdImg from '../../assets/MW-1.jpeg';


class Recommend extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
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
        <Button className="tryOn">
          <Link to="/order/">Try on these items</Link>
        </Button>
      </div>
    )
  }
}

export default Recommend;
