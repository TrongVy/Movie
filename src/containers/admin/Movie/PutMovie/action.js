import movieApi from "apis/movieApi";

export const actUpdateMovie = (formData, token) => {
  return async(dispatch) => {
      try {
          const result = await movieApi.upDateMovie(formData, token);
          alert('Update success')
          console.log('result', result.data.content)
      }
      catch(error) {
          console.log(error.response?.data)
      }
  }
};
