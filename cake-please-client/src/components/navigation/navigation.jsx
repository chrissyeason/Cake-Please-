import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from '../AuthGateway/Register';
import Login from '../AuthGateway/Login'
import Recipes from '../Recipes/Recipes';
import Home from '../Home/Home';

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
            <div class="container">
                <nav>
                    <main>
                        <Link to="/tutorials">Tutorials</Link>
                        <Link to="/gallery">Inspiration Gallery</Link>
                        <Route exact path = "/recipes" render={(props) =>
                            <Recipes {...props}
                            recipes={this.props.recipes}/>
                        }/>
                        <Link to="/recipes" recipes={this.props.recipes}>Recipes</Link>
                    </main>
                    
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
                </nav>
                
                {/* <Route 
                    exact path="/"  
                    component={Home} />
                <Route 
                    path="/recipes"    
                    component={Recipes} 
                    exact
                    recipes={this.props.recipes}
                    />                */}
            </div>
            ) 
    }
}

export default Navigation;