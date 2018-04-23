/**
 * Created by Aus on 2018/4/23.
 */
import React, { Component } from 'react';
import Icon from 'component-font-awesome';
import './panel.scss';

// Panel 用户发表说说的组件
export default class Panel extends Component {
    render () {
        return (
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
                    <li className="option"><Icon type="comments" /> 评论（10）</li>
                    <li className="option"><Icon type="thumbs-up" /> 点赞（10）</li>
                    <li className="option"><Icon type="external-link" /> 转发（5000）</li>
                </ul>
            </li>
        );
    }
}