import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewRecipe from './NewRecipe/NewRecipe';
import CakePleaseLogo from './Cake_Please-logo.png';
import Home from '../Home/Home';
import './Recipes.css';

class Recipes extends Component {
    constructor(props){
        super(props);
        console.log(props, "this is props")

    }
    // Main = () => (
    //     <div>
    //       <Route exact path="/" component={Home} />
    //     </div>
    //   );
    render(){
            const recipes = this.props.recipes.map((recipe)=>{
               return <div key={recipe._id}>
                        <img src={recipe.image}/>
                        <h2>{recipe.title}</h2>
                        <p>{recipe.description}</p>
                        <h3>{recipe.ingredients}</h3>
                        <p>{recipe.instructions}</p>
                    </div>
            })
            return(
                <div>
                    <Link to="/"><img src={CakePleaseLogo} id="logo-recipes"/></Link>
                    <h2>Recipes</h2>
                    <NewRecipe 
                        addRecipe={this.props.addRecipe}
                        username={this.props.username}/>
                        <div className="recipes-info">
                            {recipes}
                        </div>    
                </div>
            )
    }
}

export default Recipes;