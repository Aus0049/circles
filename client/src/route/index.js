/**
 * Created by Aus on 2018/2/28.
 */
import React from 'react';
import {Route, Redirect} from "react-router-dom";
import Layout from '../layout';
import Home from '../containers/home';

export default class Routes extends React.Component {
    render() {
        return (
            <Layout>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route path="/home" component={Home} />
            </Layout>
        );
    }
}