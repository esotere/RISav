import React, { Component } from 'react';
import "./member.css";

export default class Member extends Component {
    render() {
        return (
            <div className="card info">
                <div className="card-block">
                    <h4 className="card-title"></h4>
                    <p className="card-text">Member Information</p>
                    <a href="#" className="btn btn-secondary button">Update</a>
                </div>
            </div>
        )
    }
}
