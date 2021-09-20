import React, { Component } from "react";
// import { connect } from "react-redux";
// import { laythongTinPhim } from "../Movie/PutMovie/action";

export default class Dashboard extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="static"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
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
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//     fetchMaPhim: (maPhim) => {
//       dispatch(laythongTinPhim(maPhim))
//     }
//   })

//   export default connect(null, mapDispatchToProps)(Dashboard)
