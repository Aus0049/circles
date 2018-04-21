/**
 * Created by Aus on 2018/2/28.
 */
import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import {dynamicWrapper, RouteWithSubRoutes} from "./helper";
import Home from '../containers/Home';
import NotFound from '../containers/site/NotFound';
import AppContainer from '../layout/AppContainer';
import singleColumnLayoutHOC from '../layout/singleColumnLayoutHOC';
import {actionCreator as layoutActionCreators} from '../store/actions/layout';

// 路由json化
const routerConfig = [
    {
        path: '/home',
        component: dynamicWrapper(['layout'], [layoutActionCreators], singleColumnLayoutHOC, Home)
    }
];

export default class Routes extends React.Component {
    render() {
        return (
            <AppContainer>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    {/*/!*<Route path="/home" component={Home} />*!/*/}
                    {/*/!*<Route path="/sign-in" component={SignIn} />*!/*/}
                    {/*/!*<Route path="/about" component={About} />*!/*/}
                    {routerConfig.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                    <Route component={NotFound} />
                </Switch>
            </AppContainer>
        );
    }
}