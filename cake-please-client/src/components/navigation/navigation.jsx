import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from '../AuthGateway/Register';
import Login from '../AuthGateway/Login'
import Recipes from '../Recipes/Recipes';
import Home from '../Home/Home';
import Tutorials from '../Tutorials/Tutorials';
import './navigation.css';
import Gallery from '../Gallery/Gallery';

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
            path="/tutorials"  
            component={Tutorials} 
            exact
            />
        <Route 
            path="/recipes"    
            component={Recipes} 
            exact
            />
            
        </div>
      );
    render(){
        return(
            <Router>
                <div>
                <nav id="nav-bar">
                    <main>
                        <Link to="/">Home</Link>
                        <Link to="/tutorials">Tutorials</Link>
                        <Link to="/gallery">Inspiration Gallery</Link>
                        <Link to="/recipes" recipes={this.props.recipes}>Recipes</Link>
                    </main>  
                    
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
                <Switch>
                    <Route 
                        exact path="/"  
                        component={Home} />
                    <Route 
                        path="/tutorials"  
                        component={Tutorials} 
                        
                        />
                    <Route 
                        path = "/recipes" render={(props) =>
                        <Recipes {...props}
                            recipes={this.props.recipes}
                            addRecipe={this.props.addRecipe}
                            username={this.props.username}
                            deleteRecipe={this.props.deleteRecipe}
                            updateRecipe={this.props.updateRecipe}
                        />
                    }/>
                    <Route 
                        path="/gallery"
                        component={Gallery}
                        />
                </Switch>
                </div>
            </Router>
            ) 
    }
}

export default Navigation;