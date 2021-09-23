import React, { Component } from "react";
import ListMovieAdmin from "./ListMovie/ListMovieAdmin";
import PostMovie from "./postMovie/PostMovie";

export default class Movie extends Component {
  render() {
    return (
      <div className="container">
        <h1
          style={{
            textAlign: "left",
            color: "#44003ae6",
          }}
        >
          Quản Lý Phim
        </h1>
        <PostMovie />
        <ListMovieAdmin />
      </div>
    );
  }
}
