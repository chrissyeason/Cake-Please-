import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CakePleaseLogo from './Cake_Please-logo.png';
import BerryCake from './BerryCake.jpg';
import Popsicles from './popsicles.jpg';
import Cupcakes from './cupcakes.jpg';
import './home.css';

function Home(props) {
        return(
            <div>
                <div className="container-top">
                    <img src = {BerryCake} id="cake-photo" alt="blackberry cake"/>
                    
                    <img src={CakePleaseLogo} id="logo" alt="cake please logo" />
                    <h6 id="site-description">Allowing cake and dessert artists to collaborate through tutorials, recipes, and photo inspiration.</h6>
                    <img src={Popsicles} id="popsicles-img" alt="popsicles" />
                </div>
                <div className="container-bottom">
                    <div id="tutorials">
                        <h4>Tutorials</h4>
                        <p>Check out our tutorials before you kick off your next 
                            project or upload your own video to help the cake 
                            community grow.</p>
                    </div>
                    <div id="inspiration">
                        <h4>Inspiration</h4>
                        <p>Get inspiration from this gallery of photos
                            uploaded by fellow cake lovers or upload your own and
                            inspire others.
                        </p>
                    </div>
                    <div id="recipes">
                        <h4>Recipes</h4>
                        <p>Find your next confectionery project or share
                            a favorite of your own for others to enjoy.
                        </p>
                    </div>
                    <img src={Cupcakes} id="cupcakes" alt="cupcakes" />
                </div> 
                    <div className="footer">
                        <p id="hire-footer">Website created by Chrissy Eason. Hire her!</p>
                    </div>
                
            </div>
        )
    }

export default Home;