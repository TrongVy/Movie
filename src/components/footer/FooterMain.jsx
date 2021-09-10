import React, { Component } from 'react'
import Footer1 from './Footer1/Footer1'
import Footer2 from './Footer2/Footer2'

export default class FooterMain extends Component {
    render() {
        return (
            <div style={{backgroundImage: 'url(./img-KhuyenMai/bg-body.png)'}}>
                <Footer1 />
                <Footer2 />
            </div>
        )
    }
}
