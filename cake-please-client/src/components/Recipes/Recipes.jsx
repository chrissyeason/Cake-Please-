import React, {Component} from 'react';

class Recipes extends Component {
    constructor(props){
        super(props);
        console.log(props)

    }
    render(){
            // const recipes = this.props.recipes.map((recipe)=>{
            //     return <div key={recipe._id}>
            //         <img src={recipe.image}/>
            //         <h2>{recipe.title}</h2>
            //         <p>{recipe.description}</p>
            //         <h3>{recipe.ingredients}</h3>
            //         <p>{recipe.instructions}</p>
            //     </div>
            // })
            return(
                <div>
                    <h2>this is recipes component</h2>
                    {/* {recipes} */}
                </div>
            )
    }
}

export default Recipes;