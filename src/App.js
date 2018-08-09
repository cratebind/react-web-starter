import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './images/cratebind-logo.png';

const Styles = styled.div`
  .App-starter {
    text-align: center;
  }

  .App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }
`;

class App extends Component {
  render() {
    return (
      <Styles>
        <div className="App-starter">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React Starter</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Styles>
    );
  }
}

export default App;
