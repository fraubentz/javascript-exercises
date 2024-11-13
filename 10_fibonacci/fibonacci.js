const fibonacci = function(num) {
let convertedNum;

if (typeof num !== "number") {
    convertedNum = parseInt(num);
} else {
    convertedNum = num;
}

let afterNum = 1;
let prevNum = 0;

if (convertedNum == 0) return 0;
if (convertedNum < 0) return "OOPS";

for (let i = 2; i <= convertedNum; i++) {
    let summed = afterNum + prevNum;
     prevNum = afterNum;
     afterNum = summed;
}

return afterNum;

};

// Do not edit below this line
module.exports = fibonacci;
