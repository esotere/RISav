import React, { Component } from 'react';
import "./member.css";

export default class Member extends Component {
    render() {
        return (
            <div className="card info">
                <div className="card-block">
                    <h4 className="card-title">Member Information</h4>
                    <p className="card-text"></p>
                    <form action="/submit" method="post">
    <select id="title">
      <option value="Title">Title</option>
      <option value="Mr.">Mr.</option>
      <option value="Mrs.">Mrs.</option>
      <option value="Miss">Miss</option>
      <option value="Dr.">Dr.</option>
      <option value="Chief">Chief</option>
    </select>
    <input id="name" type="text" name="name" placeholder="name"></input>
    <input id="address" type="text" name="address" placeholder="address"></input>
    <input id="phone" type="number" name="phone number" placeholder="phone number"></input>
    <input id="email" type="email" name="email" placeholder="email"></input>
    <input id="nosp" type="number" name="number of shares purchased" placeholder="number of shares"></input>
    <input id="bank" type="text" name="bank name" placeholder="bank name"></input>
    <input id="acct" type="number" name="bank account number" placeholder="bank account number"></input>
    <input id="bvn" type="number" name="bank verification number" placeholder="bvn"></input>
    <input id="name_nok" type="text" name="name of nok" placeholder="name of nok"></input>
    <input id="relationship" type="text" name="relationship of nok" placeholder="relationship of nok"></input>
    <input id="address_nok" type="text" name="address of nok" placeholder="address of nok"></input>
    <input id="phone_nok" type="number" name="phone number of nok" placeholder="phone number of nok"></input>
    <input id="email_nok" type="email" name="email of nok" placeholder="email of nok"></input>
    <input id="date" type="date" name="creation date" value="yyyy-MM-dd" min="2019-03-26"
      placeholder=""></input>
    <input class="myBtn btn btn-primary" id="submit" type="submit" ></input>
  </form>
                    <a href="#" className="btn btn-secondary button">Update</a>
                </div>
            </div>
        )
    }
}
