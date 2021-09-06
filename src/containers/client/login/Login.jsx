import { useFormik } from 'formik'
import React from 'react';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import './login.css'
import { actLogin } from './module/action'
export default function Login() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {
            console.log('value', values);
            dispatch(actLogin(values))
        },
    })

    return (
        <div
            onSubmit={formik.handleSubmit}
            className="pageLogin" >
            <form className="login">
                <div className="d-flex justify-content-center h-100">
                    <div className="card_login">
                        <div className="card-header">
                            <h3>Sign In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square" /></span>
                                <span><i className="fab fa-google-plus-square" /></span>
                                <span><i className="fab fa-twitter-square" /></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user" /></span>
                                    </div>
                                    <input type="text" name="taiKhoan" onChange={formik.handleChange} className="form-control" placeholder="Tai Khoan" />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key" /></span>
                                    </div>
                                    <input
                                        type="password" name="matKhau" onChange={formik.handleChange}
                                        className="form-control" placeholder="Mat Khau"

                                    />

                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
                                </div>
                                <div className="form-group">
                                    {/* <input type="submit" defaultValue="Login" className="btn float-right login_btn" /> */}
                                    <button type="submit" className="btn  login_btn mr-2" >Dang Nhap</button>
                                    <Link to="register" type="button" className="btn  login_btn" >Dang Ky</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="#">Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

