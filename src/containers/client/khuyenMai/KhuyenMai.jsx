import React, { Component } from 'react'
import TheThanhVien from './TheThanhVien/TheThanhVien'
import UuDai from './UuDai/UuDai'

export default class KhuyenMai extends Component {
    render() {
        return (
            <div>
                <div style={{background: 'url(./img-khuyenMai/bg-body.png)', height:'100%', paddingTop:'6.3rem'}}>
                    <TheThanhVien />
                    <UuDai />
                </div>
            </div>
        )
    }
}
