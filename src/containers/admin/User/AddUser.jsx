import userApi from 'apis/userApi';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
export default function AddUser() {
    const [user, setUser] = useState({});
    const currentUser = useSelector(state => state.authReducer.currentUser)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user);
        // post api add user
        userApi.addUserApi(user, currentUser.accessToken)
            .then((res) => {
                alert(res.data.message)
            })
            .catch(error => {
                alert("Thất Bại ! kiểm tra lại thông tin nhập")
                console.log(error)
            })
    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="row">
                    <div className="form-group col-6">
                        <input type="text" className="form-control" placeholder="Tài Khoản" alt=""
                            name="taiKhoan"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="form-group col-6">
                        <input type="password" className="form-control" placeholder="Mật Khẩu" alt=""
                            name="matKhau"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-12">
                        <input type="email" className="form-control" placeholder="Email" alt=""
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-6">
                        <input type="text" className="form-control" placeholder="Số Điện Thoại" alt=""
                            name="soDT"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group col-6">
                        <input type="text" className="form-control" placeholder="Mã Nhóm (GP01,GP02..)" alt=""
                            name="maNhom"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-12">
                        <input type="text" className="form-control" placeholder="Mã Loại Người Dùng (QuanTri or KhachHang)" alt=""
                            name="maLoaiNguoiDung"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group col-12">
                        <input type="text" className="form-control" placeholder="Họ Tên" alt=""
                            name="hoTen"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <button className="btn btn-info">Add User</button>
                </div>

            </form>
        </>
    )
}
