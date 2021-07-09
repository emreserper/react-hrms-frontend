import axios from "axios"

export default class jobAdvertisementService{
    getCandidate(){
     
        return axios.get(`${process.env.REACT_APP_API_URL}/candidates/getall`)
    }
}