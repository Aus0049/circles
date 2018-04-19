/**
 * Created by Aus on 2018/4/19.
 */
import React from 'react'
import './footer.scss'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div className="footer-container">
                <div className="footer-box">
                    Copyright © Aus 赵彬宇
                </div>
            </div>
        );
    }
}

export default Footer;