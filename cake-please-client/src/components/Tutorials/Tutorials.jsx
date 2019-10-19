import React from 'react';
import CookiesBaking from './cookies-baking.jpg';
import './tutorials.css';

function Tutorials(){
    return(
        <div className="tutorial">
            <img src={CookiesBaking} style={{width: '100vw'}} />
            <h1>Tutorials are Coming</h1>
        </div>
    )
}
export default Tutorials;