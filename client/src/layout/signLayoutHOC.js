/**
 * Created by Aus on 2018/4/27.
 */
import React from 'react';

export default function signLayoutHOC (Component) {
    return class SignLayout extends React.Component {
        render () {
            return (
                <div className="sign-layout-container">
                    <div className="content-container">
                        <Component {...this.props} />
                    </div>
                    <div className="footer">Copyright © Aus 赵彬宇</div>
                </div>
            )
        }
    }
}