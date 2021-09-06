
import callApi from "utils/callApi"

const quanLyNguoiDungApi = {
      //tai Khoan,mat khau
    login(thongTinDangNhap) {
        return callApi(`QuanLyNguoiDung/DangNhap`,  "POST", thongTinDangNhap)
    },

}

export default quanLyNguoiDungApi;