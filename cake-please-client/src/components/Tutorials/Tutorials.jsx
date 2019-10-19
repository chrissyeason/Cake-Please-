import React from 'react';
import CookiesBaking from './cookies-baking.jpg';
import './tutorials.css';
import logo from './Cake_Please-logo.png';

function Tutorials(){
    return(
        <div className="tutorial">
            <img src={CookiesBaking} style={{width: '100vw'}} />
            <h1>Tutorials are Coming</h1>
            <div className="footer">
                <img src={logo} id="footer-logo"/>
                <p id="hire-footer">Website created by Chrissy Eason. Hire her!</p>
            </div>
        </div>
    )
}
export default Tutorials;