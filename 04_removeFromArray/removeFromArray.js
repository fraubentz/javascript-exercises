const removeFromArray = function(list, ...n) {
    return list.filter(val => !n.includes(val));
    //return filtered;
    //let newArray = [];
    //for (let i = 0; i < list.length; i++) {
        //for (j of n) {
            //if (list[i] !== j) {
                //newArray.push(list[i]);
            //}
        //}
    //}
    //return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
