import React, {Component} from 'react';
import CakePleaseLogo from './Cake_Please-logo.png';
import BerryCake from './BerryCake.jpg';
import Navigation from '../Navigation/Navigation';
import Popsicles from './popsicles.jpg';
import Cupcakes from './cupcakes.jpg';

class Home extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <img src = {BerryCake}/>
                
                <img src={CakePleaseLogo}></img>
                <h6>Allowing cake and dessert artists to collaborate through tutorials, recipes, and photo inspiration.</h6>
                <img src={Popsicles}/>
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
                <img src={Cupcakes}/>
                <footer>
                    <img src={CakePleaseLogo}/>
                    <p>Website created by Chrissy Eason. Hire her!</p>
                </footer>

            </div>
        )
    }
}

export default Home;