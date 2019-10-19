import React from 'react';
import CherryCake from './cherry-cake.jpg';

function Gallery(){
    return(
        <div>
            <img src={CherryCake} />
            <h1>this is gallery</h1>
        </div>
    )
}

export default Gallery;