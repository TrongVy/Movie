import quanLyNguoiDungApi from "apis/quanLiNguoiDung";


export const actLogin = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungApi.login(thongTinDangNhap);
            console.log("thongTinDangNhap", result);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: "QuanLyNguoiDung",
                    payload: result
                })
            }

        } catch (errors) {
            console.log("errors", errors);
        }
    }
}