import axios from 'axios'
import config from './config.js'

const url = config.dmlUrl

export default {
    async getAllProblems(){
        const response = await axios.get(url + "/problems")
        return response.data.data
    },

    async getProblemById(problem_id){
        const response = await axios.get(url + "/problems/" + problem_id)
        return response.data
    },

    async postProblem(data){
        const response = await axios.post(url + "/problems", data)
        return response.data
    },

    async updateProblem(problem_id, data){
        const response = await axios.put(url + "/problems/" + problem_id, data)
        return response.data 
    },

    async deleteProblem(problem_id){
        const response = await axios.delete(url + "/problems/" + problem_id)
        return response
    },

    async getProblemsByBuyerId(buyer_id){
        const response = await axios.get(url + "/problems/buyer/" + buyer_id)
        return response.data
    },

    async getProblemsByCurrentSolverId(current_solver_id){
        const response = await axios.get(url + "/problems/solver/" + current_solver_id)
        return response.data
    }
}