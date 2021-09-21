import userApi from 'apis/userApi'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AddUser from './AddUser'
import ReactPaginate from 'react-paginate';
import './user.scss'
export default function User() {
    const [user, setUser] = useState("");
    const [page, setPage] = useState(1);
    const [userUpdate, setUserUpdate] = useState({})
    const [state, setState] = useState({
        thongTingNguoiDung: "",
        tuKhoa: "",
        danhSachTimKiem: [],
        count: 0
    })
    const { currentUser } = useSelector((state) => state.authReducer);
    // console.log(currentUser)
    useEffect(() => {
        userApi.getUsersPagingApi(page)
            .then((res) => {
                console.log("res: ", res)
                setUser(res.data.content)
            })
            .catch((err) => {
                console.log("err : ", err)
            })
    }, [])
    //chuyển trang
    const handlePageClick = (data) => {
        console.log("number :", data.selected + 1)
        userApi.getUsersPagingApi(data.selected + 1)
            .then((res) => {
                setUser(res.data.content)
            })
            .catch((err) => {
                console.log("err : ", err)
            })
    }
    const deleteUser = (taiKhoan) => {
        console.log("tai khoan : ", taiKhoan);
        console.log('currentUser :', currentUser.accessToken)
        userApi.deleteUserApi(taiKhoan, currentUser.accessToken)
            .then((res) => {
                alert("Xóa Thành Công!")
                userApi.getUsersPagingApi(page)
                    .then((res) => {
                        console.log("res: ", res)
                        setUser(res.data.content)
                    })
                    .catch((err) => {
                        console.log("err : ", err)
                    })
                console.log(res)
            })
            .catch(error => {
                alert("Người Dùng Này Đã Đặt Vé Xem Phim Không Thể Xóa")
                console.log(error)
            })
    }
    //câp nhật tài khoản admin
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserUpdate(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    //update User
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("userUpdate", userUpdate);
        userApi.updateUserApi(userUpdate, currentUser.accessToken)
            .then((res) => {
                console.log(res)
                alert(res.data.message)
                //update thành công call lại api thongTinNguoiDungApi
                userApi.thongTinNguoiDungApi(currentUser.accessToken)
                    .then((res) => {
                        setState({ thongTingNguoiDung: res.data.content })
                    })
                    .catch((err) => {
                        console.log("loi", err)
                    })
            })
            .catch(error => {
                alert("update lỗi")
                console.log(error)
            })
    }
    // lấy thông tin admin
    useEffect(() => {
        userApi.thongTinNguoiDungApi(currentUser.accessToken)
            .then((res) => {
                setState({ thongTingNguoiDung: res.data.content })
            })
            .catch((err) => {
                console.log("loi", err)
            })
    }, [])
    const handleChangeSearch = (e) => {
        let { value } = e.target;
        // console.log(name, value);
        setState(prevState => ({
            ...prevState,
            tuKhoa: value
        }))

    }
    const handleSearch = () => {
        userApi.searchUserApi(state.tuKhoa, Math.round(user.totalCount / 20))
            .then((res) => {
                // console.log("search res :", res.data.content.count)
                setState(prevState => ({
                    ...prevState,
                    danhSachTimKiem: res.data.content.items,
                    count: res.data.content.count
                }))
            })
            .catch((err) => {
                console.log("loi", err)
            })
    }
    // console.log("thongTingNguoiDung", state.thongTingNguoiDung);

    // console.log("tong ket qua tim kiem", state.danhSachTimKiem);

    return (
        <div className="admin-user">
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary mt-3" data-toggle="modal" data-target="#modelId">
                    Thêm Người Dùng
                </button>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{ backgroundColor: "#800000", color: "white", }}>
                                <h5 className="modal-title">Thêm Người Dùng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div className="modal-body" style={{ backgroundColor: "black" }}>
                                <AddUser />
                            </div>
                            <div className="modal-footer" style={{ backgroundColor: "black", color: "white", }}>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <hr />
                    <h4>Thông Tin Admin</h4>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Tài Khoản</th>
                                <th>Họ Tên</th>
                                <th>Email</th>
                                <th>Số Điên Thoại</th>
                                <th>Mã Nhóm</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td scope="row">{state.thongTingNguoiDung.taiKhoan}</td>
                                <td>{state.thongTingNguoiDung.hoTen}</td>
                                <td>{state.thongTingNguoiDung.email}</td>
                                <td>{state.thongTingNguoiDung.soDT}</td>
                                <td>{state.thongTingNguoiDung.maNhom}</td>
                                <td>
                                    <button
                                        data-target="#modelId2"
                                        data-toggle="modal"
                                        className="btn btn-success"
                                    >Sửa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                </div>
                <div style={{ padding: "0px", textAlign: "center" }}>
                    <div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                aria-describedby="helpId" placeholder="nhập tên tài khoản cần tìm"
                                name="tuKhoa"
                                onChange={handleChangeSearch}
                            />
                        </div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId3"
                            onClick={() => handleSearch()}
                        >
                            Tìm
                        </button>
                    </div>
                    <hr />
                    <h4>Danh Sách User</h4>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài Khoản</th>
                                <th>Họ Tên</th>
                                <th>Email</th>
                                <th>Số Điên Thoại</th>
                                <th>Mã Loại Người Dùng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {user !== '' ? user.items.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td scope="row">{user.taiKhoan}</td>
                                        <td>{user.hoTen}</td>
                                        <td>{user.email}</td>
                                        <td>{user.soDt}</td>
                                        <td>{user.maLoaiNguoiDung}</td>
                                        <td>
                                            <button className="btn btn-danger ml-1"
                                                onClick={() => deleteUser(user.taiKhoan)}
                                            >Xóa</button>
                                        </td>
                                    </tr>
                                )
                            }) : ""}
                        </tbody>
                    </table>
                    {/* Phân Trang */}
                    <div>
                        <p>Current Page : {user.currentPage}/{Math.round(user.totalCount / 20)}</p>
                    </div>
                    <div >
                        <ReactPaginate
                            previousLabel={" previous"}
                            nextLabel={"next"}
                            pageCount={Math.round(user.totalCount / 20)}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            pageClassName={"page-item"}
                            pageLinkClassName={'page-link'}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                        />
                    </div>
                </div>
            </div>
            {/* modal update */}
            <div>

                <div className="modal fade" id="modelId2" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Account</h5>
                            </div>
                            <div className="modal-body">
                                {/* // body */}
                                <form onSubmit={handleSubmit} >
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <input type="text" className="form-control" placeholder="Tài Khoản Giữ Nguyên" alt=""
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
                                            <input type="text" className="form-control" placeholder="GP01" alt=""
                                                name="maNhom"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-12">
                                            <input type="text" className="form-control" placeholder="QuanTri" alt=""
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
                                        <button className="btn btn-info">Update Account</button>
                                    </div>

                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* Modal Seảch*/}
                <div className="modal fade" id="modelId3" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{ maxWidth: '100%' }}>
                        <div className="modal-content" style={{ width: "1200px", margin: " 0px 100px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Kết Quả Tìm Kiếm({state.count})</h5>
                            </div>
                            <div className="modal-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tài Khoản</th>
                                            <th>Họ Tên</th>
                                            <th>Email</th>
                                            <th>Số Điên Thoại</th>
                                            <th>Mã Loại Người Dùng</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {state.danhSachTimKiem !== undefined ? state.danhSachTimKiem.map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td scope="row">{user.taiKhoan}</td>
                                                    <td>{user.hoTen}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.soDt}</td>
                                                    <td>{user.maLoaiNguoiDung}</td>
                                                    <td>
                                                    </td>
                                                </tr>
                                            )
                                        }) : ""}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}
