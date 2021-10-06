import movieApi from "apis/movieApi"
import { actFetchAllMovie } from "containers/client/home/module/action"

export const actFormDate = (formDate, dispatch) => {
    return(
        movieApi.postMovies(formDate).then( res => {
            // console.log(res.data.content)
            alert('Thêm thành công')
            dispatch(actFetchAllMovie())
        })
        .catch( error => {
            alert(error.response?.data.content)
            console.log(error.response?.data)
        })
    )
}