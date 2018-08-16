import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updatePreview = this.updatePreview.bind(this);
    this.readFile = this.readFile.bind(this);
  }
  updatePreview(e) {
    this.setState({
      data: e.target.result
    });
  }
  readFile(e) {
    if (e.target.files.length) {
      const reader = new FileReader();
      reader.onload = this.updatePreview
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Image Preview</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.test.js</code> in TDD fashion.
        </p>
        <input type='file' accept='image/*' onChange={this.readFile}/>
        <img className='preview' src={this.state.data}/>
      </div>
    );
  }
}

export default App;
