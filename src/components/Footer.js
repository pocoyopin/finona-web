import React from 'react';

import {Typography, Link} from '@material-ui/core';

import logo from '../images/logo-no-bg-white.png';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            {/* create grid */}
            <img src={logo} alt="Finona Logo" className="finona-logo" />
            <div className="grid-box">
                <Typography component='h1' variant='h4'>
                    Follow Us
                </Typography>
                {/* <h1>Follow Us</h1> */}
                <Link href="#" onClick={e => e.preventDefault()} color="textSecondary">
                    Instagram
                </Link>
                {/* <a href="#">Instagram</a> */}
            </div>
            <div className="grid-box">
                <Typography component='h1' variant='h4'>
                    Contact Us
                </Typography>
                {/* <h1>Contact Us</h1> */}
                <Typography component='p' variant='p'>
                    HP & WA: +62811907134
                </Typography>
                {/* <p>HP & WA: +62811907134</p> */}
            </div>

        </div>
    );
};

export default Footer;