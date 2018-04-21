/**
 * Created by Aus on 2018/4/21.
 */
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function singleColumnLayoutHOC (Component) {
    return class SingleColumnLayout extends React.Component {
        render () {
            return (
                <div className="single-column-layout-container">
                    <Header/>
                    <div className="content-container">
                        <Component {...this.props} />
                    </div>
                    <Footer/>
                </div>
            )
        }
    }
}