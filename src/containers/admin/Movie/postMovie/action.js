import movieApi from "apis/movieApi"
import { actFetchAllMovie } from "containers/client/home/module/action"

export const actFormDate = (formDate, dispatch) => {
    return(
        movieApi.postMovies(formDate).then( res => {
            console.log(res.data.content)
            dispatch(actFetchAllMovie())
        })
        .catch( error => {
            console.log(error.response?.data)
        })
    )
}