
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import './login.css'
import { connect } from 'react-redux';
import { actLogin } from '../module/action';
class Login extends Component {
    state = {
        values: {
            taiKhoan: "",
            matKhau: ""
        },
        errors: {
            taiKhoan: "",
            matKhau: ""
        },
        // isValidTaiKhoan: "",
        // isValidMatKhau: "",
        isValidForm: false
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        // console.log('name :', name, 'value : ', value)
        this.setState({
            values: {
                ...this.state.values,
                [name]: value
            }
        })
    }
    handleErrors = (e) => {
        const { name, value } = e.target;
        let { isValidForm } = this.state;
        // console.log(name, value);
        let errorsMessage = "";
        // validate rong
        if (value === "") {
            errorsMessage = `* ${name} không được để trống *`;
            isValidForm = false
        } else {
            isValidForm = true
        }
        this.setState({

            errors: {
                ...this.state.errors,
                [name]: errorsMessage,
            },
            isValidForm
        })
    }
    handleSubmit = (e) => {
        const { isValidForm, values } = this.state;
        e.preventDefault();
        if (isValidForm) {
            console.log("submit", this.state.values);
            //truyen props history sang action
            this.props.login(values, this.props.history)
        }
    }

    render() {
        if (this.props.loading) { return <p>loading...</p> };
        // console.log(this.props)
        return !this.props.currentUser ? (
            <div
                onSubmit={this.handleSubmit}
                className="pageLogin" >
                <form className="login">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card_login">
                            <div className="card-header">
                                <h3>Sign In</h3>
                                <div className="d-flex justify-content-end social_icon">
                                    {/* <span><i className="fab fa-facebook-square" /></span>
                                <span><i className="fab fa-google-plus-square" /></span>
                                <span><i className="fab fa-twitter-square" /></span> */}
                                </div>
                            </div>
                            <div className="card-body">
                                <div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Tai Khoan"
                                            name="taiKhoan" onChange={this.handleChange}
                                            onBlur={this.handleErrors}
                                            onKeyUp={this.handleErrors}
                                        />

                                    </div>
                                    <p className="text-light">{this.state.errors.taiKhoan}</p>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key" /></span>
                                        </div>
                                        <input
                                            type="password" name="matKhau" onChange={this.handleChange}
                                            className="form-control" placeholder="Mat Khau"
                                            onBlur={this.handleErrors}
                                            onKeyUp={this.handleErrors}
                                        />
                                    </div>
                                    <p className="text-light">{this.state.errors.matKhau}</p>
                                    <div className="row align-items-center remember">
                                        <input type="checkbox" />Remember Me
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn  login_btn mr-2" >Đăng Nhập</button>
                                        <Link to="register" type="button" className="btn  login_btn" >Đăng Ký</Link>
                                    </div>
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <Link to="/" type="button"  >Trang Chủ</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        ) : (<Redirect to="/" />)
    }
}

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    currentUser: state.authReducer.currentUser
})
const mapDispatchToProps = (dispatch) => ({
    login: (user, history) => {
        dispatch(actLogin(user, history))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)