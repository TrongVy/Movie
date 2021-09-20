import movieApi from "apis/movieApi"

export const actFormDate = (formDate) => {
    return(
        movieApi.postMovies(formDate).then( res => {
            console.log(res.data.content)
        })
        .catch( error => {
            console.log(error.response?.data)
        })
    )
}