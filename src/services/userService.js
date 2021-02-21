import axios from 'axios'
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
    },

    async getUserById(user_id){
        const response = await axios.get(url + "/users/" + user_id)
        return response.data
    },

    async updateUser(user_id, data){
        const response = await axios.put(url + "/users/" + user_id, data)
        return response.data
    },

    async deleteUser(user_id){
        const response = await axios.delete(url + "/users/" + user_id)
        return response
    }
}