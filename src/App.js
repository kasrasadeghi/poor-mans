import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }

  componentDidMount() {
    // reimplementing react router ish, backward state (back button)
    window.onpopstate = (e) => {
      this.setState({})
    }
  }

  render() {
    // destructuring of objects by name
    let {current} = this.state;
    return (
      <div className="App">
      <pre>{window.location.href}</pre>
      <button onClick={() => {
          // reimplementing react router ish, forward state, (forward button)
          window.history.pushState({}, "", "#root");
          this.setState({});
        }}>stuff</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child
          what="what"
          updateF={(n) => this.setState({current: current + n})} // concise updating of dictionaries (state)
        />
        <ViewerOfCurrent thingToRender={this.state.current}/>

      </div>
    );
  }
}

const Child = ({what, updateF}) =>
  <div>
    {what}
    <button onClick={() => updateF(5)}>inc</button>
    <button onClick={() => updateF(-7)}>dec</button>
  </div>

const ViewerOfCurrent = ({thingToRender}) => <p>{thingToRender}</p>

export default App;
