import React from 'react';
import CherryCake from './cherry-cake.jpg';
import './gallery.css';

function Gallery(){
    return(
        <div className="gallery">
            <img src={CherryCake} style={{width: '100vw'}} />
            <h1>Gallery is Coming!</h1>
        </div>
    )
}

export default Gallery;