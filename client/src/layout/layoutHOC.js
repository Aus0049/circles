/**
 * Created by Aus on 2018/3/12.
 */
import React, { Component } from 'react';
import {actionCreator} from '../store/actions/layout';

// layout 业务逻辑剥离 渲染劫持
function layoutHOC(Layout) {

    return class Enhancer extends Layout {
        componentDidMount() {
            const pathArray = window.location.pathname.split('/');
            if(pathArray.indexOf('sign-in') > -1 || pathArray.indexOf('sign-up') > -1 || pathArray.indexOf('404') > -1) {
                this.props.dispatch(actionCreator.updateLoading(true));
                return;
            }

            this.props.dispatch(actionCreator.fetchUserInfo())
                .then((result)=>{
                    // 显示页面
                    this.props.dispatch(actionCreator.updateLoading(true));
                });
        }

        render() {

           if(this.props.layout.loading){
               return <div>loading</div>;
           }

           return super.render();
        }
    }
}

export default layoutHOC;