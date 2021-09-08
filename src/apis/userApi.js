
import callApi from "utils/callApi"

const userApi = {
    //user: tai Khoan,mat khau
    loginApi(user) {
        return callApi(`QuanLyNguoiDung/DangNhap`, "POST", user)
    },

}

export default userApi;