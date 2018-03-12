/**
 * Created by Aus on 2018/2/28.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreator} from '../store/actions/layout/index';
import layoutHOC from './layoutHOC';

// 拦截器
class Layout extends Component {
    render () {
        return (
            <div className="layout-container">
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    layout: state.layout
});

export default connect(mapStateToProps, dispatch=> {return { ...bindActionCreators(actionCreator,dispatch), dispatch}})(layoutHOC(Layout))