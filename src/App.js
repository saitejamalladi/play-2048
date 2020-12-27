import React, {Component} from 'react';
import classes from './App.module.css';
import GAM2048 from "./containers/GAM2048/GAM2048";

class App extends Component {
  render () {
    return (
      <div className={classes.App}>
        <GAM2048/>
      </div>
    );
  }
 }

export default App;
