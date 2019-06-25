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
    this.memberList = this.memberList.bind(this);
    this.loadData();

    // http.getMembersList();    
  };
  
  loadData = () => {
    let self = this;
    axios.getMembersList().then(data => {
      console.log(data);
      self.setState({members: data})
    }, err => {

    });    
  }

  memberList = () => {
    const list = this.state.members.map( member => 
      <div className="" key={member._id}>
      <Member id={member.id} title={member.title} name={member.name} address={member.address} phone_number={member.phone_number} 
              email={member.email} number_of_shares_purchased={member.number_of_shares_purchased} bank_name={member.bank_name} 
              bank_account_number={member.bank_account_number} bvn={member.bvn} name_of_next_of_kin={member.name_of_next_of_kin} relationship_to_nok={member.relationship_to_nok}
              address_of_nok={member.address_of_nok} phoneNumber_of_nok={member.phoneNumber_of_nok} email_of_nok={member.email_of_nok} creation_date={member.creation_date}/>

      </div>
    )
    return (list);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
        </header>

        {this.memberList()}
        
          {/* <div className="App-main">
              <Member id="21458745445" title="Mr" name="One Punch" address="6308 Morocco st" phone_number="202 555 7855" 
              email="onepunch@example.com" number_of_shares_purchased="2000" bank_name="Union Bank" 
              bank_account_number="78547852365479" bvn="5454542121" name_of_next_of_kin="Genos" relationship_to_nok="student"
              address_of_nok="232 Liberia st" phoneNumber_of_nok="202 555 4411" email_of_nok="genos@example.com" creation_date="06/22/2019"/>

              <Member id="21458745445" title="Mr" name="One Punch" address="6308 Morocco st" phone_number="202 555 7855" 
              email="onepunch@example.com" number_of_shares_purchased="2000" bank_name="Union Bank" 
              bank_account_number="78547852365479" bvn="5454542121" name_of_next_of_kin="Genos" relationship_to_nok="student"
              address_of_nok="232 Liberia st" phoneNumber_of_nok="202 555 4411" email_of_nok="genos@example.com" creation_date="06/22/2019"/>
          </div> */}
        
      </div>
    );
  }
}

export default App;
