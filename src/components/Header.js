import React from 'react';
import {Link} from "react-router-dom";

import image from '../images/logo-no-bg-white.png';

import {Tabs, Tab} from '@material-ui/core';

import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <a href="/"><img src={image} className="img-link" alt="Finona Logo"></img></a>
            <Tabs value={props.location.pathname}>
                <Tab label="Home" value ="/" component={Link} to="/" />
                <Tab label="Product" value="/product" component={Link} to="/product" />
                <Tab label="Order" value="/order" component={Link} to="/order" />
            </Tabs>
        </div>
    )
};

export default Header;