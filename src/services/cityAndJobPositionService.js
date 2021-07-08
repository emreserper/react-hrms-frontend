import axios from "axios"

export default class cityAndJobPositionService{
    getJobPosition(){
        return axios.get(`${process.env.REACT_APP_API_URL}/job-positions/getall`)
    }
  
}