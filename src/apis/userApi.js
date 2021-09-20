import callApi from "utils/callApi"

const userApi = {
    loginApi(user) {
        //user: tai Khoan,mat khau
        return callApi(`QuanLyNguoiDung/DangNhap`, "POST", user)
    },
    registerApi(user) {
        return callApi(`QuanLyNguoiDung/DangKy`, "POST", user)
    },
    addUserApi(user, token) {
        return callApi(`QuanLyNguoiDung/ThemNguoiDung`, "POST", user, token)
    },
    deleteUserApi(taiKhoan, token) {
        return callApi(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`, "DELETE", null, token)
    },
    updateUserApi(userUpdate, token) {
        return callApi(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, "PUT", userUpdate, token)
    },
    searchUserApi(tuKhoa, soPhanTuTrenTrang) {
        return callApi(`QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${tuKhoa}&soTrang=1&soPhanTuTrenTrang=${soPhanTuTrenTrang}`)
    }
    ,
    getAllUsersApi() {
        // lỗi api lúc đăng kí mã nhóm GP01 nhưng đăng kí thành công thì thông tin được lưu trử bên nhóm GP00
        return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00`)
    },
    getUsersPagingApi(soTrang) {
        return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=20`)
    },
    // thong tin dat ve
    thongTinNguoiDungApi(token) {
        return callApi("QuanLyNguoiDung/ThongTinTaiKhoan", "POST", null, token)
    }
}

export default userApi;