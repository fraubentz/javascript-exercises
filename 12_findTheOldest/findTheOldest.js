const calcAge = function(birth, death){
    if (!death) {
        death = new Date().getFullYear();
    }; 
    return death - birth;
};

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestPerson = calcAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPerson = calcAge(current.yearOfBirth, current.yearOfDeath);
        // returns condition ? value : value2
        // condition is evaluated. If it's truthy then value is returned, otherwise value2.
        // return oldestPerson < currentPerson ? current : oldest;

        if (oldestPerson < currentPerson) {
            return current;
        } else {
            return oldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
