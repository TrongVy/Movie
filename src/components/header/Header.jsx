import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import './header.scss'
import "./navbar.scss";
import { actLogout } from "containers/shared/Auth/module/action";
class Header extends Component {
  handleLogOut = () => {
    this.props.logOut();
    // sau khi click vào logout quay trở về trang Chủ
    // this.props.history.push('/') lấy từ withRouter
    this.props.history.push("/");
  };
  render() {
    // console.log(this.props.currentUser)
    return (
      <header className="header">
        <div className="header__content"></div>
        <div className="nav row">
          <div className="nav__logo col-4">
            {/* <img  className="" src="./image/logo.png" alt="" /> */}
            <img
              className=""
              src="http://cinestar.com.vn/pictures/moi/9Logo/white-2018.png"
              alt=""
            />
          </div>

          <nav className="nav_pc col-8">
            <div className="nav_pc__input">
              <input type="text" placeholder="Đừng Tìm.." />
              <div className="nav_pc__input__icon">
                <button>
                  {" "}
                  <img src="./image/icon-search.png" alt="" />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-1 nav_pc__iconHome">
                <Link to="/">
                  <i className="fa fa-home"></i>
                </Link>
              </div>
              <div className="col-11  nav_pc__list" style={{ display: "flex" }}>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/khuyenmai">Khuyến Mãi</Link>
                  </li>
                  {this.props.currentUser ? (
                    <li>
                      <div>
                        <Link
                          className="nav_mobile__list__link"
                          onClick={() => this.handleLogOut()}
                          to="#"
                        >
                          Logout
                        </Link>
                      </div>
                    </li>
                  ) : (
                    <li>
                      <Link to="/login" className="nav_mobile__list__link">
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
                <div className="header__user">
                  {this.props.currentUser ? (
                    <li>
                      <Link to="/thongTinNguoiDung">
                        <i className="fa fa-user-circle"></i>
                        {this.props.currentUser.taiKhoan}
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </nav>

          <label htmlFor="nav_mobile-input" className="nav-bars-btn">
            <i className="fa fa-align-justify text-danger"></i>
          </label>
          <input
            hidden
            className="nav__input"
            type="checkbox"
            id="nav_mobile-input"
          />
          <label htmlFor="nav_mobile-input" className="nav_overlay"></label>

          <nav className="nav_mobile">
            <label htmlFor="nav_mobile-input" className="nav_mobile__close">
              <i className="fa fa-times"></i>
            </label>
            <ul className="nav_mobile__list">
              <li>
                <Link to="/" className="nav_mobile__list__link">
                  home
                </Link>
              </li>
              <li>
                <Link to="/khuyenmai" className="nav_mobile__list__link">
                  Khuyến Mãi
                </Link>
              </li>
              {this.props.currentUser ? (
                <li>
                  <Link
                    className="nav_mobile__list__link"
                    onClick={() => this.handleLogOut()}
                  >
                    LogOut{" "}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="nav_mobile__list__link">
                    LogIn
                  </Link>
                </li>
              )}
            </ul>
            <div className="header__user">
              {this.props.currentUser ? (
                <li>
                  <Link to="/thongTinNguoiDung">
                    <i className="fa fa-user-circle"></i>
                    {this.props.currentUser.taiKhoan}
                  </Link>
                </li>
              ) : (
                ""
              )}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  logOut: () => {
    dispatch(actLogout());
  },
});
//withRouter dung de lay props cua router
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
