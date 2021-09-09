import React, { useState } from 'react'
import userApi from 'apis/userApi';
import './register.scss'
export default function Register(props) {
    const [user, setUser] = useState({
        values: {
            taiKhoan: "",
            soDT: "",
            email: "",
            matKhau: "",
            maNhom: "",
            hoTen: ""
        },
        errors: {
            taiKhoan: "",
            soDT: "",
            email: "",
            matKhau: "",
            maNhom: "",
            hoTen: ""
        },
        isValidEmail: false,
        isValidPassword: false,
        isValidNumber: false,
        isValidString: false,
        isValidForm: false
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(value)
        setUser({
            ...user,
            values: {
                ...user.values,
                [name]: value
            }
        })
    }

    const handleErrors = (e) => {
        const { name, value } = e.target;
        let errorsMessage = "";
        let { isValidEmail, isValidPassword, isValidNumber, isValidString } = user;
        if (value === "") {
            errorsMessage = `${name} Không Được Để Trống!`
        }
        switch (name) {
            case "email": {
                const rexgex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                // neu value email ton tai va value email ko thoa dieu kien
                if (value && !value.match(rexgex)) {
                    errorsMessage = 'invalid email';
                }
                isValidEmail = errorsMessage === "" ? true : false;
                break;
            }
            case "matKhau": {
                if (value && (value.length < 6 || value.length > 10)) {
                    errorsMessage = 'password from 6 to 10';
                }
                isValidPassword = errorsMessage === "" ? true : false;
                break;
            }
            case "hoTen": {
                const regexName = /^[a-zA-Z ]{2,}$/g;
                if (value && !regexName.test(value)) {
                    errorsMessage = 'enter string';
                }
                isValidString = errorsMessage === "" ? true : false;
                break;
            }
            case "soDT": {
                const reg = /^\d+$/;
                if (value && !value.match(reg)) {
                    errorsMessage = 'enter number';
                }
                isValidNumber = errorsMessage === "" ? true : false;
                break;
            }

            default:
                break;
        }
        setUser({
            ...user,
            errors: {
                ...user.errors,
                [name]: errorsMessage
            },
            isValidEmail,
            isValidPassword,
            isValidNumber,
            isValidString,
            isValidForm: isValidEmail && isValidNumber && isValidPassword && isValidString
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("values : ", user.isValidForm);
        // post api add user
        if (user.isValidForm) {
            userApi.registerApi(user.values)
                .then((res) => {
                    if (res.status === 200) {
                        alert('dang ky thanh cong')
                        props.history.push('./')
                    }
                    console.log(res)
                })
                .catch(error => {
                    alert('dang ky that bai')
                    console.log(error)
                })
        }
    }
    return (
        <div className=" register ">
            <div className="container register__content">
                <form onSubmit={handleSubmit} >
                    <h2>Đăng Ký Thành Viên</h2>
                    <div className="row">
                        <div className="form-group col-6">
                            <input type="text" className="form-control" placeholder="Tai Khoan (khong duoc trung)" alt=""
                                name="taiKhoan"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                            />
                            <p className="text-light">{user.errors.taiKhoan}</p>

                        </div>
                        <div className="form-group col-6">
                            <input type="password" className="form-control" placeholder="Mat Khau" alt=""
                                name="matKhau"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                            />
                            <p className="text-light">{user.errors.matKhau}</p>
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-6">
                            <input type="email" className="form-control" placeholder="Email (khong duoc trung)" alt=""
                                name="email"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                            />
                            <p className="text-light">{user.errors.email}</p>
                        </div>
                        <div className="form-group col-6">
                            <input type="text" className="form-control" placeholder="So Dien Thoai" alt=""
                                name="soDT"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                            />
                            <p className="text-light">{user.errors.soDT}</p>
                        </div>
                    </div>

                    <div className="row">

                        <div className="form-group col-6">
                            <input type="text" className="form-control" placeholder="Ma Nhom (GP...)" alt=""
                                name="maNhom"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                            />
                            <p className="text-light">{user.errors.maNhom}</p>
                        </div>
                        <div className="form-group col-6">
                            <input type="text" className="form-control" placeholder="hoTen" alt=""
                                name="hoTen"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                            />
                            <p className="text-light">{user.errors.hoTen}</p>
                        </div>
                    </div>


                    <div className="form-group">
                        <button className="btn btn-info" disabled={!user.isValidForm}>Đăng Ký</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
