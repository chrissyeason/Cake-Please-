import React, {Component} from 'react';

class Navigation extends Component {
    constructor(){
        super();
        this.state = {
            loggedIn: false,
            username: null
        }
    }
    render(){
        return(
            <div>
                <h3>this is navigation component</h3>
            </div>
            ) 
    }
   
}

export default Navigation;