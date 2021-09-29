import React from "react";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { actFormDate } from "./action";

export default function PostMovie() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: {},
      moTa: "",
      maNhom: "",
      ngayKhoiChieu: "",
      danhGia: "",
      hot: false,
      dangChieu: false,
      sapChieu: false,
    },
    onSubmit: (value) => {
      // console.log("value", moment(value.ngayKhoiChieu).format("DD/MM/YYYY"));
      // console.log("value", value);

      // form data

      let formData = new FormData();

      for (let key in value) {
        formData.append(key, value[key]);
      }
      //call api
      dispatch(actFormDate(formData, dispatch));
    },
  });

  // custom hình
  const handleChangeImage = (e) => {
    let image = e.target.files[0];
    formik.setFieldValue("hinhAnh", image);
  };

  // set date
  const handleChangeDate = (e) => {
    formik.setFieldValue(moment(e.target.value).format('DD/MM/YYYY'))
  }

  return (
    <div>
      <button
        className="btn btn-dark float-left mt-4 mb-4"
        data-toggle="modal"
        data-target="#staticBack"
      >
        Thêm Phim
      </button>

      <div>
        <div
          className="modal fade"
          id="staticBack"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div
                className="modal-header text-center"
                style={{ display: "block" }}
              >
                <h5 className="modal-title" id="staticBackdropLabel">
                  Modal Movie
                </h5>
              </div>
              <div className="modal-body">
                {/* form in here */}
                <form onSubmitCapture={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <h5>Tên phim</h5>
                        <input
                          type="text"
                          className="form-control"
                          name="tenPhim"
                          placeholder='Ten Phim'
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <h5>Hình ảnh</h5>
                        <input
                          type="file"
                          name="hinhAnh"
                          accept=".png, .jpg, .gif"
                          multiple
                          className="form-control"
                          onChange={handleChangeImage}
                        />
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
                          onChange={formik.handleChange}
                          placeholder='ten-phim'
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
                          onChange={formik.handleChange}
                          placeholder='url youtube'
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
                            value={(formik.initialValues.dangChieu = true)}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div className="form-group col-4">
                          <h5>Sắp chiếu</h5>
                          <input
                            type="checkbox"
                            className="form-control"
                            name="sapChieu"
                            value={(formik.initialValues.sapChieu = true)}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div className="form-group col-4">
                          <h5>Hot</h5>
                          <input
                            type="checkbox"
                            className="form-control"
                            name="hot"
                            value={(formik.initialValues.hot = true)}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <h5>Đánh giá</h5>
                        <input
                          type="number"
                          min={0}
                          max={10}
                          className="form-control"
                          name="danhGia"
                          onChange={formik.handleChange}
                          placeholder='0 -> 10'
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
                          onChange={formik.handleChange}
                          placeholder='Từ GP01 -> GP15'
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
                          onChange={handleChangeDate}
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
                          onChange={formik.handleChange}
                          placeholder='Một bộ phim rất hay và giàu cảm súc'
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" >
                      Thêm
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
