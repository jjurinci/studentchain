import axios from 'axios'
import config from './config.js'

const url = config.dmlUrl

export default {
    async getAllCategories(){
        const response = await axios.get(url + "/categories")
        return response
    }
}