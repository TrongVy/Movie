import movieApi from 'apis/movieApi'
import Loading from 'containers/shared/Loading'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Ghe from './Ghe'
import Interval from './Interval'

class SeatPlant extends Component {
    state = {
        danhSachPhongVe: "",
        danhSachGheDangDat: [],
        dsgNguoiKhacDangDat: [{ maGhe: 56361 }, { maGhe: 56363 }],
        //dat ve thanh cong 
        isLoadings: false,
    }
    // chọn ghế
    datVe = (ghe) => {
        let { danhSachGheDangDat } = this.state;
        let newGhe = { ...ghe, 'soLuong': 1 };
        if (danhSachGheDangDat !== "") {
            let index = danhSachGheDangDat.findIndex((item) => item.tenGhe === ghe.tenGhe);
            if (index !== -1) {
                danhSachGheDangDat[index].soLuong += 1;
            } else {
                danhSachGheDangDat.push(newGhe);
            }
        }
        this.setState({
            danhSachGheDangDat,
        })
    }
    huyVe = (ghe) => {
        let newList = this.state.danhSachGheDangDat
        let index = newList.findIndex((item) => item.stt === ghe.stt);
        if (index !== -1) {
            newList.splice(index, 1)
        }
        this.setState({
            danhSachGheDangDat: newList
        })
    }
    // sau khi chọn ghế call api,gửi lên server để lưu trử vé đã đặt
    datVeAction = () => {
        const { currentUser } = this.props

        let thongTinDatVe = {
            danhSachVe: this.state.danhSachGheDangDat,
            maLichChieu: this.props.match.params.showtimeId
        }
        // call api dat ve 
        movieApi.datVeApi(thongTinDatVe, currentUser.accessToken)
            .then((res) => {
                alert(res.data.content);
                this.setState({
                    danhSachGheDangDat: [],
                    isLoadings: true
                })
                //đặt vé thành công call lại api phòng vé
                const maLichChieu = this.props.match.params.showtimeId;

                movieApi.bookMovieTicketsApi(maLichChieu)
                    .then((res) => {
                        this.setState({
                            danhSachPhongVe: res.data.content,
                            isLoadings: false
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            })
            .catch((err) => {
                console.log(err)
            })
    }
    clickInterval = () => {
        this.props.history.goBack();
    }
    render() {

        if (this.state.danhSachPhongVe !== "") {
            // console.log(this.state.danhSachPhongVe)
        }
        // console.log("list", this.state.danhSachGheDangDat)
        const { currentUser } = this.props;
        console.log("props :", this.props)
        const { danhSachPhongVe, danhSachGheDangDat, isLoadings, dsgNguoiKhacDangDat } = this.state;
        if (danhSachPhongVe === "" || isLoadings) return <Loading />;
        return danhSachPhongVe !== "" ? (
            <div className="container-fluid seat__plant" style={{ marginTop: "100px" }}>
                <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 seat__plant__left">
                        <div className="mt-5 seat__plant__screen">
                            <img width={800} height={100} src="https://tix.vn/app/assets/img/icons/screen.png" alt="" />
                        </div>
                        <div style={{ width: "100%" }}>
                            <span className="text-light font-weight-bold">  Chưa Đặt  <button className="ghe">STT</button> </span>
                            <span className="text-light font-weight-bold mr-2" style={{ color: "black" }}>  Đang Đặt  <button className="gheDangDat">STT</button> </span>
                            <span className="text-light font-weight-bold "> Đã Đặt  <button className="gheDaDat"> <i className="fa fa-times" style={{ color: "white", fontSize: "18px", padding: "5px" }}></i></button> </span>
                            <span className="text-warning font-weight-bold "> Ghế Vip  <button className="gheVip">STT</button> </span>
                            <span className="text-danger font-weight-bold ">  Bạn Đã Đặt  <button className="gheMinhDaDat"><i className="fa fa-user-check"></i></button> </span>
                            <span className="font-weight-bold ml-5" style={{ color: "black", fontSize: "30px" }}>  <Interval clickInterval={this.clickInterval} />
                            </span>

                        </div>
                        <div>
                            <Ghe
                                danhSachGhe={danhSachPhongVe.danhSachGhe}
                                datVe={this.datVe}
                                danhSachGheDangDat={danhSachGheDangDat}
                                currentUser={currentUser}
                                dsgNguoiKhacDangDat={dsgNguoiKhacDangDat}
                            />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 text-left seat__plant__right mt-5 mb-5">
                        <h3 className="text-center">
                            <span>{danhSachGheDangDat.reduce((sum, ghe) => {
                                return sum += ghe.giaVe
                            }, 0)} VNĐ</span>
                        </h3>
                        <hr />
                        <h4>Tên Phim : {danhSachPhongVe.thongTinPhim.tenPhim}</h4>
                        <p> Địa Điểm :  {danhSachPhongVe.thongTinPhim.tenCumRap}- {danhSachPhongVe.thongTinPhim.tenRap}</p>
                        <p>Ngày Chiếu :  {danhSachPhongVe.thongTinPhim.ngayChieu}</p>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                <div>
                                    {/* Button trigger modal */}
                                    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modelId">
                                        <i class="fa fa-cart-plus">    Ghế Đã Đặt ({danhSachGheDangDat.length})</i>

                                    </button>
                                    {/* Modal */}
                                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header" style={{ color: "black" }}>
                                                    <h5 className="modal-title">Danh Sách Ghế Đang Đặt</h5>

                                                </div>
                                                <div className="modal-body">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Tên Ghế</th>
                                                                <th scope="col">Loại Ghế</th>
                                                                <th scope="col">Giá Vé</th>
                                                                <th scope="col">X</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {danhSachGheDangDat.map((ghe, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>{index + 1}</td>
                                                                        <td scope="row">{ghe.tenGhe}</td>
                                                                        <td>{ghe.loaiGhe}</td>
                                                                        <td>{ghe.giaVe}</td>
                                                                        <td>
                                                                            <button className="btn btn-danger" onClick={() => this.huyVe(ghe)}>Hủy</button>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td colSpan="3">Tổng Tiền</td>
                                                                <td>{danhSachGheDangDat.reduce((sum, ghe) => {
                                                                    return sum += ghe.giaVe
                                                                }, 0)} </td>
                                                                <td></td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-6 text-right">
                                <span>{danhSachGheDangDat.reduce((sum, ghe) => {
                                    return sum += ghe.giaVe
                                }, 0)} VNĐ</span>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <p>Email : <span>{currentUser.email}</span></p>
                        </div>
                        <hr />
                        <div>
                            <p>Số Điện Thoại : <span>{currentUser.soDT}</span></p>
                        </div>
                        <hr />
                        <div>
                            <button className="btn btn-info"
                                onClick={() => this.datVeAction()}
                                disabled={this.state.danhSachGheDangDat.length === 0 ? true : false}
                                style={{ width: "100%" }}
                            >Đặt Vé</button>
                        </div>
                        <div>
                            <Link to='/thongTinNguoiDung' target='_blank' className="btn btn-info mt-2" style={{ width: "100%" }}>Xem Kết Quả Đặt Vé</Link>
                        </div>
                    </div>
                </div>

            </div>
        ) : ""
    }
    componentDidMount() {
        const maLichChieu = this.props.match.params.showtimeId;
        movieApi.bookMovieTicketsApi(maLichChieu)
            .then((res) => {
                // console.log("danh sach ghe : ", res.data.content)
                this.setState({
                    danhSachPhongVe: res.data.content
                })
            })
            .catch((err) => {
                console.log(err)
            });
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.authReducer.currentUser
})
export default connect(mapStateToProps)(SeatPlant)
