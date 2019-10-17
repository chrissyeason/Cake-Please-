import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewRecipe from './NewRecipe/NewRecipe';
import CakePleaseLogo from './Cake_Please-logo.png';
import Home from '../Home/Home';
import ShowRecipe from './ShowRecipe/ShowRecipe';
import './Recipes.css';
// import LemonTarts from '../Recipes/lemon-tarts.jpg';
import LemonCake from '../Recipes/Recipes-Lemon-header.jpg';

function Recipes(props) {
console.log(props, "this is props")

    const recipes = props.recipes.map(function(recipe, id){
    return( <li key={id}>
                
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
            </li>
        )
    })
    return(
        <div>
            <img src={LemonCake} id="lemon-cake"/>
            <Link to="/"><img src={CakePleaseLogo} id="logo-recipes"/></Link>
            
            <div className="add-recipe">
               
                <NewRecipe 
                    addRecipe={props.addRecipe}
                    username={props.username}/>
            </div>
            
            <div id="recipe-container">
                <ul className="recipes-info">
                    {recipes}
                </ul>    
            </div>    
        </div>
    )
}



export default Recipes;