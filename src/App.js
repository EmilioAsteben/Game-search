import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.css';


import EntryContent from './components/EntryContent';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import Header from './containers/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      
    <Header/>
      
    <div className = "content">
    <EntryContent  />
    <RightSidebar />
    </div>
    
    <Footer />


     
      </div>
    );
  }
}

export default App;
