//const repeatString = function() {

//};

function repeatString(string, num) {
    chosenString = "";
    i = 0;
    if (num < 0) {
        return "ERROR";
    }

    while (i < num) {
        chosenString += string;
        i++;
    }
    return chosenString;
}

// Do not edit below this line
module.exports = repeatString;
