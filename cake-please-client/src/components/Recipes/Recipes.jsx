import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewRecipe from './NewRecipe/NewRecipe';
import CakePleaseLogo from './Cake_Please-logo.png';
import Home from '../Home/Home';
import ShowRecipe from './ShowRecipe/ShowRecipe';
import './Recipes.css';

function Recipes(props) {
console.log(props, "this is props")

    const recipes = props.recipes.map(function(recipe, id){
    return( <li key={id}>
                <img src={recipe.image}/>
                <h1>{recipe.id}</h1>
                
                <ShowRecipe 
                    title={recipe.title}
                    image={recipe.image}
                    description={recipe.description}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    deleteRecipe={props.deleteRecipe}
                    id={recipe.id}
                    />
            </li>
        )
    })
    return(
        <div>
            <Link to="/"><img src={CakePleaseLogo} id="logo-recipes"/></Link>
            <h2>Recipes</h2>
            <NewRecipe 
                addRecipe={props.addRecipe}
                username={props.username}/>

                <ul className="recipes-info">
                    {recipes}
                </ul>    
        </div>
    )
}



export default Recipes;