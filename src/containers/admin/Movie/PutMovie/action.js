import movieApi from "apis/movieApi";
import { actFetchAllMovie } from "containers/client/home/module/action";

export const actUpdateMovie = (formData, token) => {
  return async(dispatch) => {
      try {
          const result = await movieApi.upDateMovie(formData, token);
          alert('Update success')
          console.log(result.data.content)
          dispatch(actFetchAllMovie())
      }
      catch(error) {
          console.log(error.response?.data)
      }
  }
};
