/**
 * Created by Aus on 2018/2/28.
 */
import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Layout from '../layout';

import Home from '../containers/Home';
import About from '../containers/About';
// import SignIn from '../containers/site/SignIn';
import NotFound from '../containers/site/NotFound';
import Header from '../components/header';
import Footer from '../components/footer';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// 动态加载路由
const dynamicWrapper = (models, component)=>{

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

    return connect(mapStateToProps, mapDispatchToProps)(component)
};

// 路由json化
const routerConfig = [
    {
        path: '/',
        component: dynamicWrapper(['layout'], Home)
    }
];

const RouteWithSubRoutes = (route) => (
    <Route
        path={route.path}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes}/>
        )}
    />
);

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                {/*<Route exact path="/" render={() => <Redirect to="/home" />} />*/}
                {/*/!*<Route path="/home" component={Home} />*!/*/}
                {/*/!*<Route path="/sign-in" component={SignIn} />*!/*/}
                {/*/!*<Route path="/about" component={About} />*!/*/}
                {/*<Route component={NotFound} />*/}
                {routerConfig.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </Switch>
        );
    }
}