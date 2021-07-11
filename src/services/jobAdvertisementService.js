import axios from "axios"

export default class jobAdvertisementService{
    getJobAdvertisement(){
     
        return axios.get(`${process.env.REACT_APP_API_URL}/jobAdvertisements/getAllIsActiveTrue`)
    }
    getById(id){
        return axios.get(`${process.env.REACT_APP_API_URL}/jobAdvertisements/getJobAdvertisementById?id=`+id)

    }
    getAllSorted(){
        return axios.get(`${process.env.REACT_APP_API_URL}/jobAdvertisements/getallDesc`)

    }
}