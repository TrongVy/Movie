import React, { Component } from "react";

export default class UpdateDataMovie extends Component {
  render() {
      console.log(this.props.hangdleMaphim)
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModalMovie"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  UPDATE MOVIE
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <h5>Tên phim</h5>
                        <input
                          type="text"
                          className="form-control"
                          name="tenPhim"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <h5>Hình ảnh</h5>
                        <input type="file" className='form-control pb-3'/>
                        <img src alt="..." />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <h5>Bí danh</h5>
                        <input
                          type="text"
                          className="form-control"
                          name="biDanh"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <h5>Trailer</h5>
                        <input
                          type="url"
                          className="form-control"
                          name="trailer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="row">
                        <div className="form-group col-4">
                          <h5>Đang chiếu</h5>
                          <input
                            type="checkbox"
                            className="form-control"
                            name="dangChieu"
                          />
                        </div>
                        <div className="form-group col-4">
                          <h5>Sắp chiếu</h5>
                          <input
                            type="checkbox"
                            className="form-control"
                            name="sapChieu"
                          />
                        </div>
                        <div className="form-group col-4">
                          <h5>Hot</h5>
                          <input
                            type="checkbox"
                            className="form-control"
                            name="hot"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <h5>Đánh giá</h5>
                        <input
                          type="number"
                          className="form-control"
                          name="danhGia"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <h5>Mã nhóm</h5>
                        <input
                          type="text"
                          className="form-control"
                          name="maNhom"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <h5>Khởi chiếu</h5>
                        <input
                          type="datetime-local"
                          className="form-control"
                          name="ngayKhoiChieu"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <h5>Mô tả</h5>
                        <textarea
                          type="text"
                          className="form-control"
                          name="moTa"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//     fetchUpdateMovie: maPh
// }