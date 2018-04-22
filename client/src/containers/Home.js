/**
 * Created by Aus on 2018/2/28.
 */
import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">

                <div className="user-container panel">
                    <img src="" alt="" className="user-head"/>
                    <div className="user-info">
                        <p className="info username">zby</p>
                        <p className="info gender">男</p>
                        <p className="info birthday">1993-12-08</p>
                        <p className="info birthday">北京</p>
                    </div>
                </div>

                <div className="feed-container panel">
                    <ul className="feed-list">
                        <li className="article-item">
                            <div className="author-box">
                                <img src="" alt="" className="author-head"/>
                                <p className="author-name">aby</p>
                                <p className="author-bio">的撒的撒</p>
                            </div>
                            <div className="content">
                                sadsadsadsadsada撒
                            </div>
                            <ul className="article-options">
                                <li className="option">
                                    评论
                                </li>
                                <li className="option">
                                    点赞
                                </li>
                                <li className="option">
                                    转发
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}