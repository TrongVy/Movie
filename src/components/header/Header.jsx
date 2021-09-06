import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './header.scss'
import './navbar.scss'
export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__content"></div>
                <div className="nav row">
                    <div className="nav__logo col-4">
                        <img className="img-fluid" src="./image/logo.png" alt="" />
                    </div>

                    <nav className="nav_pc col-8">
                        <div className="nav_pc__input" >
                            <input type="text" placeholder="Đừng Tìm.." />
                            <div className="nav_pc__input__icon">
                                <button> <img src="./image/icon-search.png" alt="" /></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 nav_pc__iconHome">
                                <Link to="/">
                                    <i className="fa fa-home"></i>
                                </Link>
                            </div>
                            <div className="col-11  nav_pc__list">
                                <ul>

                                    <li>
                                        <Link to="/">home</Link>
                                    </li>
                                    <li>
                                        <Link to="/theater">theater</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">about</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <label htmlFor="nav_mobile-input" className="nav-bars-btn">
                        <i className="fa fa-align-justify text-danger"></i>
                    </label>
                    <input hidden className="nav__input" type="checkbox" id="nav_mobile-input" />
                    <label htmlFor="nav_mobile-input" className="nav_overlay"></label>

                    <nav className="nav_mobile">
                        <label htmlFor="nav_mobile-input" className="nav_mobile__close">
                            <i className="fa fa-times"></i>
                        </label>
                        <ul className="nav_mobile__list">
                            <li>
                                <Link to="/" className="nav_mobile__list__link">home</Link>
                            </li>
                            <li>
                                <Link to="/theater" className="nav_mobile__list__link">theater</Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav_mobile__list__link">about</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="nav_mobile__list__link">contact</Link>
                            </li>
                            <li>
                                <Link to="/login" className="nav_mobile__list__link">login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
