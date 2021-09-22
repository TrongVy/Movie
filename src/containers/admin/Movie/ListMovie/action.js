const { default: movieApi } = require("apis/movieApi")

const actDeleteFilm = (maPhim, token) => {
    return async() => {
        try {
            await movieApi.deleteMovie(maPhim, token)
            alert('xóa thành công')
        }
        catch(err) {
            console.log(err.response?.data, token)
        }
    }
}
export default actDeleteFilm