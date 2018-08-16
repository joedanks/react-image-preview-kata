import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Image Preview</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.test.js</code> in TDD fashion.
        </p>
        <input type='file' accept='image/*' onChange={()=>{}}/>
        <img className='preview' src=''/>
      </div>
    );
  }
}

export default App;
