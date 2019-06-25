import React, { Component } from 'react';
import "./member.css";

export default class Member extends Component {
    render() {
        return (
            <div className="container ">
            <div className="card info">
                <div className="card-block info2">
                    <h4 className="card-title">Member Information</h4>
                    <p className="card-text"></p>
                    <p className="card-text">ID: {this.props.id} </p>
                    <p className="card-text">Title: {this.props.title} </p>
                    <p className="card-text">Name: {this.props.name} </p>
                    <p className="card-text">Address: {this.props.address} </p>
                    <p className="card-text">phone_number: {this.props.phone_number} </p>
                    <p className="card-text">email: {this.props.email} </p>
                    <p className="card-text">number_of_shares_purchased: {this.props.number_of_shares_purchased} shares </p>
                    <p className="card-text">bank_name: {this.props.bank_name} </p>
                    <p className="card-text">bank_account_number: {this.props.bank_account_number} </p>
                    <p className="card-text">bvn: {this.props.bvn}</p>
                    <p className="card-text">name_of_next_of_kin: {this.props.name_of_next_of_kin} </p>
                    <p className="card-text">relationship_to_nok: {this.props.relationship_to_nok} </p>
                    <p className="card-text">address_of_nok: {this.props.address_of_nok} </p>
                    <p className="card-text">phoneNumber_of_nok: {this.props.phoneNumber_of_nok} </p>
                    <p className="card-text">email_of_nok: {this.props.email_of_nok} </p>
                    <p className="card-text">creation_date: {this.props.creation_date}</p>
                    <button href="#" className="btn btn-secondary button">Update</button>
                </div>
            </div>
            </div>
        )
    }
}
