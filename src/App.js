import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Success from './Components/success'; // Import the Success component
import Main from './Components/main';

class App extends Component {
  render() {

    return (
      
      <Router>
        <div className='container'>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </Router>
      
    );
  }
}

export default App;
