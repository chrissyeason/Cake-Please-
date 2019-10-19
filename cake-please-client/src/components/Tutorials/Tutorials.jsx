import React from 'react';
import CookiesBaking from './cookies-baking.jpg';
import './tutorials.css';

function Tutorials(){
    return(
        <div>
            <img src={CookiesBaking} id="cookies-baking" />
            <h1>this is Tutorials</h1>
        </div>
    )
}
export default Tutorials;