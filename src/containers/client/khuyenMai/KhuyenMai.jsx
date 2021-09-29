import React, { Component } from 'react'
import TheThanhVien from './TheThanhVien/TheThanhVien'
import UuDai from './UuDai/UuDai'
import ScrollToTop from "react-scroll-to-top";

export default class KhuyenMai extends Component {
    render() {
        return (
            <div>
                 <ScrollToTop smooth color="#6f00ff" />
                <div style={{background: 'url(./img-khuyenMai/bg-body.png)', height:'100%', paddingTop:'6.3rem'}}>
                    <TheThanhVien />
                    <UuDai />
                </div>
            </div>
        )
    }
}
