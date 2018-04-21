/**
 * Created by Aus on 2018/4/21.
 */
import React from 'react';
import {Route} from "react-router-dom";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// 动态加载路由
export const dynamicWrapper = (models, layout, component) => {

    const mapStateToProps = (state) => {
        const result = {};

        models.forEach((item)=>{
            result[item] = state[item]
        });

        return result;
    };

    const mapDispatchToProps = (dispatch) => {
        let result = {};

        models.forEach((item)=>{
            result = Object.assign(result, {...bindActionCreators(require(`../store/actions/${item}/index`), dispatch)})
        });

        return result;
    };

    return connect(mapStateToProps, mapDispatchToProps)(layout(component))
};

export const RouteWithSubRoutes = (route) => (
    <Route
        path={route.path}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes}/>
        )}
    />
);