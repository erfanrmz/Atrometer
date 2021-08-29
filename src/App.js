import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Header/>
    </React.Fragment>
  );
}

export default App;
