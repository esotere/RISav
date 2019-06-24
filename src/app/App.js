import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "../services/axios"
import Member from "../components/member/member"
// import HttpService from "../services/http-service"

const axios = new Axios();
// const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
    // Bind functions *May not be necessary with ES6 arrow functions
    this.loadData = this.loadData.bind(this);
    this.loadData();

    // http.getMembersList();    
  };
  
  loadData = () => {
    axios.getMembersList().then(members => {
      console.log(members)
    }, err => {

    });    
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
        </header>
        
          <div className="App-main">
              <Member />
          </div>
        
      </div>
    );
  }
}

export default App;
