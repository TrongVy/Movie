import axios from "axios";

const { BASE_URL } = require("settings/apiConfig")

//cac function dung chung,lap lai...
const callApi = (endpoint,method='GET',data=null) => {
        return axios({
            url : `${BASE_URL}/${endpoint}`,
            method ,
            data
        })
}
export default callApi;