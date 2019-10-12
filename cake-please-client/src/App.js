import React, {Component} from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/navigation';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Recipes from './components/Recipes/Recipes';

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
          console.log("this is parsedResponse", parsedResponse)
          this.setState({
              recipes: parsedResponse
          })
            console.log(recipes)
  }
handleRegistration = async (formData) =>{
  console.log(formData);
  console.log("registering");
  const registerResponse = await fetch(`http://localhost:3001/user`, {
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
    const registerResponse = await fetch('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      credentials: 'omit',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(registerResponse)
    const parsedResponse = await registerResponse.json();
    console.log(parsedResponse, "this is loggedin response")
      this.setState({
        loggedIn: true,
        username: parsedResponse.username
      })
  }
  render(){
    return (
      <div className="App">
        <Navigation 
          loggedIn={this.state.loggedIn} 
          username={this.state.username} 
          handleRegistration={this.handleRegistration}
          handleLogin={this.handleLogin}
          recipes={this.state.recipes}
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
