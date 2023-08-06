const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    if(num1 < 0 || num2 < 0 ){
        return 'ERROR';
    }


    let largestNumber = Math.max(num1, num2);
    let smallestNumber = Math.min(num1, num2);

    let totalSum = smallestNumber

    for(let i=totalSum+1; i<=largestNumber;i++){
        totalSum += i
    }

    return totalSum;

};

// Do not edit below this line
module.exports = sumAll;
