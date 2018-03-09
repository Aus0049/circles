/**
 * Created by Aus on 2018/3/2.
 */
import React from 'react'
import Icon from 'component-font-awesome'
import {Popover} from 'antd-mobile'
// import {actionCreators} from '../../../containers/site/store/actions'
import {withRouter} from "react-router-dom";
import './header.scss';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Item = Popover.Item;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopoverShow: false
        };
        // this.handleVisibleChange = this.handleVisibleChange.bind(this);
        // this.handleSelect = this.handleSelect.bind(this);
    }
    getOverLayDOM () {
        // const {username, phone} = this.props.site;
        const overlayDOM = [];

        // if(username && phone){
        //     overlayDOM.push(
        //         <Item key="signOut" value="signOut" icon={<Icon type="sign-out"/>} >注销</Item>,
        //         <Item key="add" value="add" icon={<Icon type="plus"/>} >发朋友圈</Item>
        //     );
        // } else {
        //     overlayDOM.push(
        //         <Item key="signIn" value="signIn" icon={<Icon type="sign-in"/>} >登录</Item>,
        //         <Item key="signUp" value="signUp" icon={<Icon type="user-plus"/>} >注册</Item>
        //     );
        // }
        overlayDOM.push(
            <Item key="signOut" value="signOut" icon={<Icon type="sign-out"/>} >注销</Item>,
            <Item key="add" value="add" icon={<Icon type="plus"/>} >发朋友圈</Item>
        );

        return overlayDOM;
    }
    render () {
        const {isPopoverShow} = this.state;
        const overlayDOM = this.getOverLayDOM();

        return (
            <div className="header-container">
                <div className="header-left">
                    <Icon type="bars" />
                </div>
                <div className="header-title">朋友圈</div>
                <div className="header-right">
                    <Popover
                        mask
                        visible={isPopoverShow}
                        overlay={overlayDOM}
                        // onVisibleChange={this.handleVisibleChange}
                        // onSelect={this.handleSelect}
                    >
                        <div>
                            <Icon type="ellipsis-h" />
                        </div>
                    </Popover>
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