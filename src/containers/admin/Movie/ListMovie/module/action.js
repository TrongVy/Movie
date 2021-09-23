import { actFetchAllMovie } from "containers/client/home/module/action"

const { default: movieApi } = require("apis/movieApi")

const actDeleteFilm = (maPhim, token) => {
    return async(dispatch) => {
        try {
            await movieApi.deleteMovie(maPhim, token)
            alert('xóa thành công')
            dispatch(actFetchAllMovie())
        }
        catch(err) {
            console.log(err.response?.data, token)
        }
    }
}
export default actDeleteFilm