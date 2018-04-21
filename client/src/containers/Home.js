/**
 * Created by Aus on 2018/2/28.
 */
import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="user-container">
                    <img src="" alt="" className="user-head"/>
                    <div className="user-info">
                        <p className="info username">zby</p>
                        <p className="info gender">男</p>
                        <p className="info birthday">1993-12-08</p>
                        <p className="info birthday">北京</p>
                    </div>
                </div>
            </div>
        )
    }
}