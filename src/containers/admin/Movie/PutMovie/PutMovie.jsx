import React, {useEffect, useState} from "react";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { laythongTinPhim } from "./module/action";

export default function PutMovie(props) {
  const ThongTinPhim = props.hangdleMovie
  const [Image, setImage] = useState('')
  // const dispatch = useDispatch()
  // useEffect( () => {
  //   let {hangdleMovie} = props
  //   dispatch(laythongTinPhim(hangdleMovie))
  // })

  // const ThongTinPhim  = useSelector((state) => state.ThongTinPhim.ThongTinPhim);

  // console.log(ThongTinPhim)
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tenPhim: ThongTinPhim?.tenPhim,
      biDanh: ThongTinPhim?.biDanh,
      trailer: ThongTinPhim?.trailer,
      hinhAnh: null,
      moTa: ThongTinPhim?.moTa,
      maNhom: ThongTinPhim?.maNhom,
      ngayKhoiChieu: ThongTinPhim?.ngayKhoiChieu,
      danhGia: ThongTinPhim?.danhGia,
      hot: ThongTinPhim?.hot,
      dangChieu: ThongTinPhim?.dangChieu,
      sapChieu: ThongTinPhim?.sapChieu,
    },
    onSubmit: (value) => {
      // console.log("value", moment(value.ngayKhoiChieu).format("DD/MM/YYYY"));
      console.log("value", value);

      // form data

      let formData = new FormData();

      for (let key in value) {
        formData.append(key, value[key]);
      }
      //call api
      // dispatch(actFormDate(formData));
    },
  });

  // custom hình
  const handleChangeImage = (e) => {
    let image = e.target.files[0];
    if(e.target.files[0]) {
      formik.setFieldValue('hinhAnh', e.target.files[0])
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      setImage(reader.result)
      reader.onload = function(e) {
        setImage(e.target.result)
      }
    }
    formik.setFieldValue("hinhAnh", image);
  };

  return (
    <div>
      <div>
        <div
          className="modal fade"
          id="staticBackdrop"
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
                          value={formik.values.tenPhim}
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
                          // value={formik.values.hinhAnh}
                        />
                        <img width={100} src={Image === '' ? ThongTinPhim?.hinhAnh : Image} alt="..." />
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
                          value={formik.values.biDanh}
                          onChange={formik.handleChange}
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
                          value={formik.values.trailer}
                          onChange={formik.handleChange}
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
                            checked={formik.values.dangChieu}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div className="form-group col-4">
                          <h5>Sắp chiếu</h5>
                          <input
                            type="checkbox"
                            className="form-control"
                            name="sapChieu"
                            checked={formik.values.sapChieu}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div className="form-group col-4">
                          <h5>Hot</h5>
                          <input
                            type="checkbox"
                            className="form-control"
                            name="hot"
                            checked={formik.values.hot}
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
                          value={formik.values.danhGia}
                          onChange={formik.handleChange}
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
                          value={formik.values.maNhom}
                          onChange={formik.handleChange}
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
                          value={formik.values.ngayKhoiChieu}
                          onChange={formik.handleDate}
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
                          value={formik.values.moTa}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
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
