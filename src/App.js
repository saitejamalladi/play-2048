import React, {Component} from 'react';
import Canvas from "./containers/Canvas/Canvas";
import classes from './App.module.css';

class App extends Component {
  render () {
    return (
      <div className={classes.App}>
        <h1>Welcome to  2048.</h1>
        <p>Join the numbers and get to the 2048 tile!</p>
        <Canvas/>
      </div>
    );
  }
 }

export default App;
