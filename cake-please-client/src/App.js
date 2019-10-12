import React, {Component} from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/navigation';
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
              recipes: parsedResponse.data
          })
            console.log(parsedResponse.data)
  }
handleRegistration = async (formData) =>{
  console.log(formData);
  console.log("registering");
  const registerResponse = await fetch(`http://localhost:3001/user`, {
    method: 'POST',
    body: JSON.stringify(formData),
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const parsedResponse = await registerResponse.json();
  console.log(parsedResponse);
  if(parsedResponse.status.code === 201){
    console.log('registration successful');
    this.setState({
      loggedIn: true,
      username: parsedResponse.data.username
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
          recipes={this.state.recipes}
          />
        <Home />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
