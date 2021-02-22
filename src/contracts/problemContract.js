import web3 from './web3'

const address = '0x6ae0c293E4e2d5b878020743Eea06A73433132F2'
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "problem_id",
				"type": "string"
			}
		],
		"name": "createProblem",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "problem_id",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "solution_accepted",
				"type": "bool"
			}
		],
		"name": "reviewProblem",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "problem_id",
				"type": "string"
			}
		],
		"name": "solveProblem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const instance = new web3.eth.Contract(abi, address);

export default instance;