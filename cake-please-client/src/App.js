import React, {Component} from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/navigation';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Recipes from './components/Recipes/Recipes';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null,
      recipes: []
    }
  }
  componentDidMount(){
    this.getRecipes();
    console.log("recipes did mount")
  }
  getRecipes = async () => {
        const recipes = await fetch(`http://localhost:3001/recipes`);
        const parsedResponse = await recipes.json();
          console.log("this is parsedResponse from getRecipes", parsedResponse)
          this.setState({
              recipes: parsedResponse
          })
            console.log(recipes)
  }
  addRecipe = async (formData) =>{
    const newRecipe = await fetch('http://localhost:3001/recipes',{
      method: 'POST',
      body: JSON.stringify(formData),
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
        'dataType': 'json'
      }
    })
    const parsedResponse = await newRecipe.json();
    console.log(parsedResponse);
    this.setState({
      recipes: [...this.state.recipes, parsedResponse]
    })
  }
  deleteRecipe = async (id) =>{
    const deleteResponse = await fetch(`http://localhost:3001/recipes/${id}`,{
      method: 'DELETE',
      credientials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedResponse = await deleteResponse.json();
    console.log(parsedResponse)
    if(parsedResponse.status === 200){
      this.setState({
        recipes: this.state.recipes.filter(function(recipe){
          return recipe.id !== id;
        })
      })
    }
  }
  updateRecipe = async (id, formData) =>{
    const updatedRecipe = await fetch(`http://localhost:3001/recipes/${id}`,{
      method: 'PUT',
      body: JSON.stringify(formData),
      credientials: 'omit',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'true',
        'accept': 'application/json'
      }
  })
    const parsedResponse = await updatedRecipe.json();
    console.log(parsedResponse, "this is response from update")
    if(parsedResponse.status === 'ok'){
      this.setState({
        recipes: this.state.recipes.map((recipe)=>{
          if(id === recipe.id){
            return parsedResponse.data
          }else{
            return recipe
          }
        })
      })
    }
  }
handleRegistration = async (formData) =>{
  console.log(formData);
  console.log("registering");
  const registerResponse = await fetch(`http://localhost:3001/register`, {
    method: 'POST',
    body: JSON.stringify(formData),
    credentials: "omit",
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': 'true',
      'accept': 'application/json'
    }

  })
  const parsedResponse = await registerResponse.json();
  console.log(parsedResponse);
    this.setState({
      loggedIn: true,
      username: parsedResponse.username
    })
}
  handleLogin = async (formData) =>{
    console.log(formData);
    console.log("logging in");
    
    const registerResponse = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      credentials: 'omit',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log(registerResponse)
    const parsedResponse = await registerResponse.json();
    console.log(parsedResponse, "this is loggedin response")
    if(parsedResponse.status === "created"){
      this.setState({
        loggedIn: true,
        username: parsedResponse.username
      })
    } 
  }
  render(){
    return (
      <div className="App">
        <Navigation 
          loggedIn={this.state.loggedIn} 
          username={this.state.username} 
          handleRegistration={this.handleRegistration}
          handleLogin={this.handleLogin}
          deleteRecipe={this.deleteRecipe}
          updateRecipe={this.updateRecipe}
          recipes={this.state.recipes}
          addRecipe={this.addRecipe}
          />
        <main>
        <Route exact path="/"  render={(props) =>
            <Home {...props}
            recipes={this.state.recipes}
            loggedIn={this.state.loggedIn}
            />
            } />
            
        </main>
        
        {/* <Recipes recipes={this.state.recipes}/> */}
      </div>
    );
  }
}

export default App;
