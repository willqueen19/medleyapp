import React, { Component } from 'react';

import './css/generic.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return (
            <div>
                  <button> <img className="back-button" < img src="Symbol-back-button.png" alt="Logo" onClick={this.myfunction} /></button>
            </div>
        )
    }
}

myfunction() {
      console.log("CLICKED");
}

export default Header;
