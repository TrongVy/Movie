import React, { Component } from "react";
import ListMovie from "./ListMovie/ListMovie";
import PostMovie from "./postMovie/PostMovie";

export default class Movie extends Component {
  render() {
    return (
      <div className="container">
        <div style={{backgroundColor:'pick'}}>
          <h1
            style={{
              textAlign: "left",
              color: "#44003ae6",
            }}
          >
            Quản Lý Phim
          </h1>
          <form className="form-inline my-2 my-lg-0 float-right mt-3">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <PostMovie />
        <ListMovie />
      </div>
    );
  }
}
