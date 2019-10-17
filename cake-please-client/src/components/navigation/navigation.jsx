import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from '../AuthGateway/Register';
import Login from '../AuthGateway/Login'
import Recipes from '../Recipes/Recipes';
import Home from '../Home/Home';
import './navigation.css';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            username: null,
            recipes: []
        }
    }
    Main = () => (
        <div>
          <Route 
            exact path="/"  
            component={Home} />
          <Route 
            path="/recipes"    
            component={Recipes} 
            exact
            />
        </div>
      );
    render(){
        return(
            <div>
                <nav id="nav-bar">
                    <main>
                        <Link to="/tutorials">Tutorials</Link>
                        <Link to="/gallery">Inspiration Gallery</Link>
                        <Link to="/recipes" recipes={this.props.recipes}>Recipes</Link>
                    </main>    
                        <Route exact path = "/recipes" render={(props) =>
                            <Recipes {...props}
                                recipes={this.props.recipes}
                                addRecipe={this.props.addRecipe}
                                username={this.props.username}
                                deleteRecipe={this.props.deleteRecipe}
                                updateRecipe={this.props.updateRecipe}
                            />
                        }/>
                        
                    
                    <div className="AuthGateway">
                        <Register 
                            loggedIn={this.props.loggedIn}
                            username={this.props.username}
                            handleRegistration={this.props.handleRegistration}
                            />
                        <Login 
                            loggedIn={this.props.loggedIn}
                            username={this.props.username}
                            handleLogin={this.props.handleLogin}
                            />
                    </div>
                </nav>
                
            </div>
            ) 
    }
}

export default Navigation;