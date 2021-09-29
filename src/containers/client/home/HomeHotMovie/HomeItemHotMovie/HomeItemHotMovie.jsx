import React, { Component } from "react";
import "./HomeItemHotMovie.scss";
export default class HomeItemHotMovie extends Component {

  render() {
    const { hinhAnh, hot, tenPhim, moTa } = this.props.movie;
    return (
      hot && (
        <div className="col-6 item__phim_main">
          <div className="row d-flex item__phim">
            <div className="col-9">
              <h5>{tenPhim}</h5>
              <p className='item__moTa'>
                {moTa}
              </p>
            </div>
            <div className="col-3">
              <img src={hinhAnh} />
            </div>
          </div>
        </div>
      )
    );
  }
}
