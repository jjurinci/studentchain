import axios from 'axios'
import config from './config.js'

const url = config.dmlUrl

export default {
    async postSolution(data){
        const response = await axios.post(url + "/solutions", data)
        return response
    },

    async updateSolution(solution_id, data){
        const response = await axios.put(url + "/solutions/" + solution_id, data)
        return response
    },

    async getSolutionsBySolverId(solver_id){
        const response = await axios.get(url + "/solutions/solver/" + solver_id)
        return response
    },
    async getSolutionsByProblemId(problem_id){
        const response = await axios.get(url + "/solutions/problem/" + problem_id)
        return response

    },

    async getSolutionsByMultipleProblemIds(problem_ids){
        const response = await axios.post(url + "/solutions/multiple_problems", problem_ids)
        return response
    }
}