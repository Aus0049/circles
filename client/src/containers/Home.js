/**
 * Created by Aus on 2018/2/28.
 */
import React, { Component } from 'react';
import Icon from 'component-font-awesome';

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">

                <div className="left-container">
                    <div className="panel user-container">
                        <img src="" alt="" className="user-head" />
                        <div className="user-info">
                            <p className="info username">zby</p>
                            <p className="info gender">男</p>
                            <p className="info birthday">1993-12-08</p>
                            <p className="info birthday">北京</p>
                        </div>
                    </div>
                </div>

                <div className="right-container">
                    <ul className="feed-list">
                        <li className="panel article-item">
                            <div className="author-box">
                                <img src="" alt="" className="author-head" />
                                <p className="author-name">Aus</p>
                                <p className="author-bio">This is bio</p>
                            </div>
                            <div className="content">
                                This is content.
                            </div>
                            <ul className="article-options">
                                <li className="option"><Icon type="comments" /> 评论</li>
                                <li className="option"><Icon type="thumbs-up" /> 点赞</li>
                                <li className="option"><Icon type="external-link" /> 转发</li>
                            </ul>
                        </li>
                        <li className="panel article-item">
                            <div className="author-box">
                                <img src="" alt="" className="author-head" />
                                <p className="author-name">Aus</p>
                                <p className="author-bio">This is bio</p>
                            </div>
                            <div className="content">
                                This is content.
                            </div>
                            <ul className="article-options">
                                <li className="option"><Icon type="comments" /> 评论</li>
                                <li className="option"><Icon type="thumbs-up" /> 点赞</li>
                                <li className="option"><Icon type="external-link" /> 转发</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}