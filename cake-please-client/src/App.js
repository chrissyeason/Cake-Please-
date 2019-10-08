import React, {Component} from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  render(){
    return (
      <div className="App">
        <h1>cake please app</h1>
        <Navigation loggedIn={this.state.loggedIn}/>
      </div>
    );
  }
}

export default App;
