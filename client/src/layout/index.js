/**
 * Created by Aus on 2018/2/28.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreator} from '../store/actions/layout';

// 拦截器
class Layout extends Component {
    componentDidMount() {

        const pathArray = window.location.pathname.split('/');
        if(pathArray.indexOf('sign-in') > -1 || pathArray.indexOf('sign-up') > -1 || pathArray.indexOf('404') > -1) return;

        this.props.dispatch(actionCreator.fetchUserInfo());
    }
    render () {
        return (
            <div className="layout-container">
                {this.props.children}
            </div>
        );
    }
}

export default connect(null, dispatch=> {return { ...bindActionCreators(actionCreator,dispatch), dispatch}})(Layout)