import React from 'react';
import CherryCake from './cherry-cake.jpg';
import './gallery.css';
import logo from './Cake_Please-logo.png';
function Gallery(){
    return(
        <div className="gallery">
            <img src={CherryCake} style={{width: '100vw'}} />
            <h1>Gallery is Coming!</h1>
            <div className="footer">
                <img src={logo} id="footer-logo"/>
                <p id="hire-footer">Website created by Chrissy Eason. Hire her!</p>
            </div>
        </div>
    )
}

export default Gallery;