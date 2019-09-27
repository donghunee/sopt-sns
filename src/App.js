import React from 'react';
import './App.css';
import HeaderNav from './components/HeaderNav';
import Posts from './components/Posts'

class App extends React.Component {
  
  render() {
    return (
      <div className="App container">
        <HeaderNav />
        <Posts />
        <div className="container">
          <button className="btn btn-default">Click Me</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>  
    )
  }
}

export default App;
