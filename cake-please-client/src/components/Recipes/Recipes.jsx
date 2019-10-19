import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewRecipe from './NewRecipe/NewRecipe';
import CakePleaseLogo from './Cake_Please-logo.png';
import ShowRecipe from './ShowRecipe/ShowRecipe';
import './Recipes.css';
import Cookies from '../Recipes/cookies-recipe-page.jpg';
import Lemons from '../Recipes/lemons.jpg';

function Recipes(props) {
console.log(props, "this is props")

    const recipes = props.recipes.map(function(recipe){
    return( <div key={recipe.id}>
                
                <ShowRecipe 
                    title={recipe.title}
                    image={recipe.image}
                    description={recipe.description}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    deleteRecipe={props.deleteRecipe}
                    updateRecipe={props.updateRecipe}
                    id={recipe.id}
                    />
            </div>
        )
    })
    
    return(
        <div>
            <div id="recipe-header">
                <img src={Cookies} id="cookies"/>
                <Link to="/"><img src={CakePleaseLogo} className="logo"/></Link>
                
                <div className="add-recipe">
                    <NewRecipe 
                        addRecipe={props.addRecipe}
                        username={props.username}/>
                </div>
                <img src={Lemons} id="lemons"/>
            </div>
            <div id="recipe-container">
                <div className="recipes-info">
                    {recipes}
                </div>    
            </div>   
        </div>
    )
}



export default Recipes;