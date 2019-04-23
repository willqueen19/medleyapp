import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/generic.css';
//import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Button } from 'reactstrap';
import $ from 'jquery';
import {bindActionCreators} from "redux";


class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    /*
                {($("*:contains('Build an Outfit')").length > 0) ?
                <div></div>
            :
                < div className="footer">
                    <Button className="back"><i className="fas fa-arrow-left"></i>  Back</Button>
                </div>}
     */

    render () {
        console.log($);
        var pathname = window.location.href;
         return (
           <div>

          </div>
        )

    }
}

export default Footer;
