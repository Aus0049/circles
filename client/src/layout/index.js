/**
 * Created by Aus on 2018/2/28.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreator} from '../store/actions/layout';
// import '../style/index.scss';

class Layout extends Component {
    render () {
        return (
            <div className="layout-container">
                {this.props.children}
            </div>
        );
    }
}

export default connect(null, dispatch=> {return { ...bindActionCreators(actionCreator,dispatch), dispatch}})(Layout)