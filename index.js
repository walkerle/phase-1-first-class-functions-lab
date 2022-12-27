// Code your solution in this file!

const namesArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (array) => {
    const newArray = array.slice(0, 2);

    return newArray;
}

const returnLastTwoDrivers = (array) => {
    const newArray = array.slice(-2);
    
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (value) {
        return multiplier * value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// function selectDifferentDrivers(array, driverFunction) {
//     if (driverFunction == returnFirstTwoDrivers) {
//         return returnFirstTwoDrivers(array);
//     } else {driverFunction == returnLastTwoDrivers
//         return returnLastTwoDrivers(array);
//     }
// }

function selectDifferentDrivers(array, driverFunction) {
    return driverFunction(array);
}

console.log(selectDifferentDrivers(namesArray, returnLastTwoDrivers));