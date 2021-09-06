import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './banner.scss'
export default class Banner extends Component {
    render() {
        return (
            <>
                <div className="banner ">
                    <div className="row">
                        <div className="col-8 banner__item">
                            <div className="banner__item__content">
                                <img height={50} width={50} src="./image/icon-register.png" alt="" />
                                <Link to="/register">Dang Ky Thanh Vien</Link>
                            </div>
                            <div className="banner__item__content">
                                <img height={50} width={50} src="./image/icon-login.png" alt="" />
                                <Link to="/login">Dang Nhap</Link>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="banner__item__content call">
                                <img height={50} width={50} src="./image/icon-call.png" alt="" />
                                <Link to="#">028 7300 8881</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner__bottom">
                
                </div>
            </>
        )
    }
}
