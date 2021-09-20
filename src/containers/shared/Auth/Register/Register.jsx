import React, { useState, useEffect } from 'react'
import userApi from 'apis/userApi';
import './register.scss'

// lỗi api lúc đăng kí mã nhóm GP01 nhưng đăng kí thành công thì thông tin được lưu trử bên nhóm GP00

export default function Register(props) {
    const [user, setUser] = useState({
        values: {
            taiKhoan: "",
            soDt: "",
            email: "",
            matKhau: "",
            maNhom: "GP01",
            hoTen: ""
        },
        errors: {
            taiKhoan: "",
            soDt: "",
            email: "",
            matKhau: "",
            maNhom: "",
            hoTen: ""
        },
        isValidEmail: false,
        isValidPassword: false,
        isValidNumber: false,
        isValidString: false,
        isValidForm: false,
        isValidTaiKhoan: false,
        danhSachNguoiDung: []
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
        let { isValidTaiKhoan, isValidEmail, isValidPassword, isValidNumber, isValidString } = user;
        if (value === "") {
            errorsMessage = `${name} Không Được Để Trống!`
        }
        switch (name) {
            case "taiKhoan": {
                // kiểm tra xem tài khoản này đã có người nào sử dụng chưa
                let index = user.danhSachNguoiDung.findIndex((user) => user.taiKhoan === value);
                if (index !== -1) {
                    errorsMessage = "tài khoản đã có người đăng kí"
                }
                isValidTaiKhoan = errorsMessage === "" ? true : false;
                break;
            }
            case "email": {
                const rexgex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                // neu value email ton tai va value email ko thoa dieu kien
                let indexEmail = user.danhSachNguoiDung.findIndex((user) => user.email === value);
                if (indexEmail !== -1) {
                    errorsMessage = 'Email Đã Có Người Đăng Kí';
                }
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
            case "soDt": {
                const reg = /^\d+$/;
                if (value && !value.match(reg)) {
                    errorsMessage = 'enter number';
                }
                isValidNumber = errorsMessage === "" ? true : false;
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


            default:
                break;
        }
        setUser({
            ...user,
            errors: {
                ...user.errors,
                [name]: errorsMessage
            },
            isValidTaiKhoan,
            isValidEmail,
            isValidPassword,
            isValidNumber,
            isValidString,
            isValidForm: isValidTaiKhoan && isValidEmail && isValidNumber && isValidPassword && isValidString
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("values : ", user.values);
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
    useEffect(() => {
        userApi.getAllUsersApi()
            .then((res) => {
                setUser({
                    ...user,
                    danhSachNguoiDung: res.data.content
                })
            })
            .catch((err) => {
                console.log("err", err)
            })
    }, [])
    return (
        <div className=" register ">
            <div className="container register__content ">
                <form onSubmit={handleSubmit} >
                    <h2>Đăng Ký Thành Viên</h2>
                    <div className="row">
                        <div className="form-group col-6">
                            <p className="text-light">Tài Khoản</p>
                            <input type="text" className="form-control" placeholder="Tải Khoản" alt=""
                                name="taiKhoan"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                            />
                            <p className=" font-weight-bold" style={{ color: "#9b0909" }}>{user.errors.taiKhoan}</p>

                        </div>
                        <div className="form-group col-6">
                            <p className="text-light">Mật Khẩu</p>
                            <input type="password" className="form-control" placeholder="Mật Khẩu" alt=""
                                name="matKhau"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                            />
                            <p className=" font-weight-bold" style={{ color: "#9b0909" }}>{user.errors.matKhau}</p>
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-6">
                            <p className="text-light">Email</p>
                            <input type="email" className="form-control" placeholder="Email (chỉ đăng kí được 1 lần)" alt=""
                                name="email"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                            />
                            <p className=" font-weight-bold" style={{ color: "#9b0909" }}>{user.errors.email}</p>
                        </div>
                        <div className="form-group col-6">
                            <p className="text-light">Số Điện Thoại</p>
                            <input type="text" className="form-control" placeholder="Số Điện Thoại" alt=""
                                name="soDt"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                            />
                            <p className=" font-weight-bold" style={{ color: "#9b0909" }}>{user.errors.soDt}</p>
                        </div>
                    </div>

                    <div className="row">

                        <div className="form-group col-6" style={{ display: "none" }}>
                            <p className="text-light">Mã Nhóm (không cần nhập)</p>
                            <input type="text" className="form-control" placeholder="Ma Nhom (GP...)" alt=""
                                name="maNhom"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                                value="GP01"
                            />
                            <p className=" font-weight-bold" style={{ color: "#9b0909" }}>{user.errors.maNhom}</p>
                        </div>
                        <div className="form-group col-12">
                            <p className="text-light">Họ Tên</p>
                            <input type="text" className="form-control" placeholder="Họ Tên (viết không dấu)" alt=""
                                name="hoTen"
                                onChange={handleChange}
                                onBlur={handleErrors}
                                onKeyUp={handleErrors}
                            />
                            <p className=" font-weight-bold" style={{ color: "#9b0909" }}>{user.errors.hoTen}</p>
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
