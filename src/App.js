import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  appCal  from './reducers/reduce'; /* calling from existing reducers folder reduce.js*/
import {createStore} from 'redux'; /* calling from library */

const store = createStore(appCal); /* appCal from reducers folder reduce.js */

store.subscribe(()=>{
  console.log("Subscribe ",store.getState()); /* console view */
});


store.dispatch({type:"INC", playload:10}); /* assign value */
store.dispatch({type:"INC", playload:11}); /* assign value */
store.dispatch({type:"INC", playload:12}); /* assign value */
store.dispatch({type:"DES", playload:12}); /* assign value */
store.dispatch({type:"INC", playload:13}); /* assign value */

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
