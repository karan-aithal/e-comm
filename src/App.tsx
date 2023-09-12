import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Main></Main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
    </div>
  );
}

export default App;
