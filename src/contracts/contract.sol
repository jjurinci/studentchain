pragma solidity ^0.7.4;

contract ProblemContract{
    
    mapping (string => address payable) problem_buyer;
    mapping (string => uint)            problem_price;
    mapping (string => address payable) problem_solver;
    
    
    function createProblem (string memory problem_id) public payable{
        require(problem_buyer[problem_id] == address(0), "That problem is already created.");
        problem_buyer[problem_id] = msg.sender;
        problem_price[problem_id] = msg.value;
    }
    
    function solveProblem(string memory problem_id) public{
        require(msg.sender != problem_buyer[problem_id], "You cannot solve your own problem.");
        problem_solver[problem_id] = msg.sender;
    }
    
    function reviewProblem(string memory problem_id, bool solution_accepted) public payable{
        require(msg.sender == problem_buyer[problem_id], "Only owner can review his problem.");
        
        uint price = problem_price[problem_id];
        if(solution_accepted) problem_solver[problem_id].transfer(price);
        else problem_buyer[problem_id].transfer(price);
    }
}