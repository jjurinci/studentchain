import axios from 'axios'
import config from './config.js'

const url = config.dmlUrl

export default {
    async postReview(data){
        const response = await axios.post(url + "/reviews", data)
        return response.data
    },

    async updateReview(review_id, data){
        const response = await axios.put(url + "/reviews/" + review_id, data)
        return response.data
    },

    async getReviewsBySolutionid(solution_id){
        const response = await axios.get(url + "/reviews/solution/" + solution_id)
        return response.data
    }
}