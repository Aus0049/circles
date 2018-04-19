/**
 * Created by Aus on 2018/3/2.
 */
import React from 'react'
import Icon from 'component-font-awesome'
// import {actionCreators} from '../../../containers/site/store/actions'
import {withRouter} from "react-router-dom";
import './header.scss';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopoverShow: false
        };
    }
    render () {
        return (
            <div className="header-container">
                <div className="header-box">
                    <div className="logo">CIRCLES</div>
                    <ul className="link-list">
                        <li className="item"><Icon type="home"/>首页</li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    site: state.site
});

// export default withRouter(connect(mapStateToProps,dispatch=> {return { ...bindActionCreators(actionCreators, dispatch), dispatch }})(Header));
export default withRouter(Header);