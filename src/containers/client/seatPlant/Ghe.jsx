import React from 'react'
import { Fragment } from 'react'
import './seatPlant.scss'
export default function Ghe(props) {
    const renderGhe = () => {
        return props.danhSachGhe.map((ghe, index) => {
            const { danhSachGheDangDat, datVe, currentUser, dsgNguoiKhacDangDat } = props;
            let classGhe = ghe.loaiGhe === "Vip" ? "gheVip" : "";
            let classGheDaDat = ghe.daDat ? "gheDaDat" : "";
            let classGheDangDat = "";
            let classGheMinhDaDat = "";
            if (currentUser.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheMinhDaDat = "gheMinhDaDat";
            }
            let gheDuocChon = danhSachGheDangDat.findIndex((item) => item.stt === ghe.stt);
            if (gheDuocChon !== -1) {
                classGheDangDat = "gheDangDat";
            }
            return (
                <Fragment key={index}>
                    <button className={`ghe
                      ${classGhe} ${classGheDangDat}
                       ${classGheMinhDaDat} ${classGheDaDat}
                       `}
                        disabled={ghe.daDat}
                        onClick={() => datVe(ghe)}
                    >
                        {ghe.daDat ? (classGheMinhDaDat != "" ? <i class="fa fa-user-check"></i> : <i class="fa fa-times"></i>) : ghe.stt}

                    </button>
                    {(index + 1) % 14 === 0 ? <br className="br" /> : ""}
                </Fragment >
            )
        })
    }
    return (
        <div className="list_ghe" style={{ padding: "10px" }}>
            {renderGhe()}
        </div>
    )
}
