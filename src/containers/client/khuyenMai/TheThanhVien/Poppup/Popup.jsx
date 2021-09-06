import "./popup.scss";
import React, { Component } from "react";

export default class Popup extends Component {
  render() {
    return (
      <div
        className="modal fade "
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title text-center w-100" id="staticBackdropLabel">
                Membership Terms &amp; Conditions
              </h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{backgroundColor:'#e00d7a'}}
              >
              </button>
            </div>
            <div className="modal-body text-left">
              <p>
                <strong>Thẻ C’Friend: </strong>
              </p>
              <p>
                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được cấp lần đầu khi
                mua 2 vé xem phim bất kỳ tại Cinestar.
              </p>
              <p>
                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tích lũy điểm
                theo giá trị mua hàng hóa dịch vụ như sau
              </p>
              <p>
                <img className="img-fluid w-100" src="http://cinestar.com.vn/pictures/webimages/3Khuyenmai/member/point.jpg" />
              </p>
              <p>
                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được giảm 10% trực tiếp
                trên giá trị hóa đơn bắp nước khi mua tại quầy.
              </p>
              <p>
                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tặng 1 vé xem phim 2D
                vào tuần sinh nhật (tính từ Thứ Hai đến Chủ Nhật) với số điểm
                tích lũy tối thiểu 500 điểm.
              </p>
              <p>
                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tham gia các chương
                trình dành cho thành viên.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                ĐÓNG
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
