import axios from "axios"

export default class employerService{
 
    getById(id){
        return axios.get(`${process.env.REACT_APP_API_URL}/employers/getById?id=`+id)
    }
}