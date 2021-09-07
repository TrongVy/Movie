import React, { Component } from "react";
import "./HomeItemNews.scss";
export default class HomeItemNews extends Component {
  render() {
    const { hinhAnh, moTa, hot, tenPhim } = this.props.movie;
    return (
      hot && (
        <div className="col-6">
          <div className="row d-flex item__phim">
            <div className="col-9">
              <h5>{tenPhim}</h5>
              <p style={{overflow:'hidden',height:'10.9rem'}}>{moTa}</p>
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
