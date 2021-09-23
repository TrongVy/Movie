import React, { useEffect, useState } from 'react'
import userApi from 'apis/userApi';
import { useSelector } from 'react-redux'
import './seatPlant.scss'
import Loading from 'containers/shared/Loading';
export default function LichSuDatVe() {
    const [state, setState] = useState({
        thongTingNguoiDung: ""
    })
    const { currentUser } = useSelector((state) => state.authReducer);
    console.log("thong tin tai khoan :", currentUser.accessToken);
    useEffect(() => {
        userApi.thongTinNguoiDungApi(currentUser.accessToken)
            .then((res) => {
                console.log(res.data.content);
                // setTimeout(() => {
                setState({ thongTingNguoiDung: res.data.content })
                // }, 500)
            })
            .catch((err) => {
                console.log("loi", err)
            })
    }, [])
    if (state.thongTingNguoiDung === "") return <Loading />
    return state.thongTingNguoiDung !== "" ? (
        <div className="dat__ve" style={{ marginTop: "100px" }}>

            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 text-left dat__ve__left">
                    <h2>Thông Tin Người Dùng</h2>
                    <div>
                        <p><span className="font-weight-bold">Tài Khoản</span>  :  {state.thongTingNguoiDung.taiKhoan}</p>
                        <p><span className="font-weight-bold">Email</span>  :  {state.thongTingNguoiDung.email}</p>
                        <p><span className="font-weight-bold">Số Điện Thoại</span>  :  {state.thongTingNguoiDung.soDT}</p>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12  dat__ve__right">
                    <h2>Lịch Sử Đặt Vé</h2>

                    {state.thongTingNguoiDung.thongTinDatVe.map((ve, index) => {
                        return (
                            <div key={index}>
                                <div className="row mb-4">
                                    <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 dat__ve__right-2 mt-2">
                                        <img height={200} width={150} src={ve.hinhAnh} alt="" />
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6  text-left dat__ve__right-5 ">
                                        <p><span className="font-weight-bold">Tên Phim</span> : {ve.tenPhim}</p>
                                        <p><span className="font-weight-bold">Giá Vé</span>  : {ve.giaVe}</p>
                                        <p><span className="font-weight-bold">Mã Vé</span>  : {ve.maVe}</p>
                                        <p><span className="font-weight-bold">Ngày Đặt</span>  : {ve.ngayDat}</p>
                                        <p><span className="font-weight-bold">Thời Lượng Phim</span>  : {ve.thoiLuongPhim} Phút</p>
                                    </div>
                                    <div clasName="col-xl-5 col-lg-12 col-md-12 col-sm-12 lichSuDatGhe " >
                                        {ve.danhSachGhe.map((ghe, index) => {
                                            return (
                                                <div key={index} className=" dat__ve__right-last ">
                                                    <p className="text-light">Ghế {ghe.tenGhe}-{ghe.tenCumRap}-{ghe.tenHeThongRap}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    ) : ""
}
