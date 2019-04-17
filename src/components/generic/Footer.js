import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/generic.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Button } from 'reactstrap';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render () {
        console.log(window.location.pathname);
         return (
           <div>
            {(window.location.pathname === "/") ?

            <div className="footer">
                <Button className="back"><i class="fas fa-arrow-left"></i>  Back</Button>
            </div>
            :
            <div></div> }
          </div>
        )

    }
}

export default Footer;
