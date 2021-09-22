import React from 'react'
import withLayout from 'hocs/withLayout'
import './adminLayout.scss'
import Movie from 'containers/admin/Movie/Movie'
import User from 'containers/admin/User/User'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
function AdminLayout() {
    const currentUser = useSelector((state) => state.authReducer.currentUser)
    if (currentUser.maLoaiNguoiDung !== "QuanTri") {
        alert("Bạn Không Có Quyền Truy Cập!");
        return <Redirect to="/" />
    }
    return currentUser.maLoaiNguoiDung === "QuanTri" ? (
        <>
            {/* <h1>Page Admin</h1> */}
            <div className=" admin">
                <div className=" admin__left ">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Movie</a>
                        <a className="nav-link " id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">User</a>

                    </div>
                </div>
                <div className="admin__right ">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><Movie /></div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><User /></div>
                    </div>
                </div>
            </div>
        </>
    ) : (<Redirect to="/" />)
}
export default withLayout(AdminLayout)
