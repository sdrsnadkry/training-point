function callbackFunction(sum) {
    console.log("This function return sum of 2 number", sum);
}

function parentFunction(num1, numb2, callback) {
    const sumOfNumbers = num1 + numb2;
    callback(sumOfNumbers);
}

function childFunction() {
    parentFunction(4, 4, callbackFunction);
}