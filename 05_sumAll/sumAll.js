const sumAll = function(num, num2) {
    if (num < 0 || num2 < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(num) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    if (num2 < num) {
        const holder = num;
        num = num2;
        num2 = holder;
    }

    // init total sum
    finalSum = 0;
    // loop through integers starting from num and add integer to total
    for (let i = num; i <= num2; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
