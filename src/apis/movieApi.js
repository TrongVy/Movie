import { GROUP_ID } from "settings/apiConfig"
import callApi from "utils/callApi"

const movieApi = {
    fetchAllMovies() {
        return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    },
    fetchMovieDetailApi(movieId) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    },
    // lay danh sach phong ve
    bookMovieTicketsApi(maLichChieu) {
        return callApi(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    },
    // dat ve
    datVeApi(thongTinDatVe, token) {
        return callApi("QuanLyDatVe/DatVe", "POST", thongTinDatVe, token)
    }
}
export default movieApi;