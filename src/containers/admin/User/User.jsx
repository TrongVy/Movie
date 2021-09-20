import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "./AddUser";
import { actGetAllUser } from "./module/action";
import "./user.scss";
export default function User() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  console.log("user", user);
  useEffect(() => {
    dispatch(actGetAllUser());
  }, []);
  return (
    <div className="admin-user">
      <h2>User</h2>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#modelId"
        >
          Thêm Người Dùng
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{ backgroundColor: "#800000", color: "white" }}
              >
                <h5 className="modal-title">Thêm Người Dùng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" style={{ backgroundColor: "black" }}>
                <AddUser />
              </div>
              <div
                className="modal-footer"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
