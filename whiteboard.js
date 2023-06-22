const assert=require('assert');
// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// INPUT: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// OUTPUT: "(123) 456-7890"


//=====================================
// Write your function named "solution" here:
function solution(arr){
    arr.splice(0, 0, '(');
    arr.splice(4, 0, ')', ' ');
    arr.splice(9, 0, '-')
    console.log(arr)
    return arr.join('')
}

//=====================================

try{
    assert(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])==="(123) 456-7890")
    assert(solution([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])==="(987) 654-3210")
    assert(solution([6, 6, 2, 2, 4, 4, 3, 3, 1, 1])==="(662) 244-3311")
    assert(solution([1, 2, 7, 7, 7, 7, 8, 8, 9, 9])==="(127) 777-8899")
    assert(solution([2, 0, 2, 4, 5, 6, 1, 1, 1, 1])==="(202) 456-1111")
    console.log("PASSED")
}catch{
    console.log("FAILED")
}