/**
 * Created by Aus on 2018/4/21.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreator} from '../store/actions/layout/index';

// app拦截器
class AppContainer extends React.Component {
    componentDidMount() {
        // 部分页面不需要用户信息直接显示
        const pathArray = window.location.pathname.split('/');
        if(pathArray.indexOf('sign-in') > -1 || pathArray.indexOf('sign-up') > -1 || pathArray.indexOf('404') > -1) {
            this.props.dispatch(actionCreator.updateLoading(true));
            return;
        }

        // 请求用户信息
        this.props.dispatch(actionCreator.fetchUserInfo())
            .then((result)=>{
                // 显示页面
                this.props.dispatch(actionCreator.updateLoading(true));
            });
    }
    render () {

        if(this.props.layout.loading){
            return <div>loading</div>;
        }

        return (
            <div className="app-container">
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    layout: state.layout
});

export default connect(mapStateToProps, dispatch=> {return { ...bindActionCreators(actionCreator,dispatch), dispatch}})(AppContainer)