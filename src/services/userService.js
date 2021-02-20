import axiso from 'axios'
import config from './config'

const url = config.dmlUrl

export default {
    async login(data){
        const response = await axios.post(url + "/users/login", data)
        return response.data
    },

    async register(data){
        const response = await axios.post(url + "/users/register", data)
        return response.data
    }
}