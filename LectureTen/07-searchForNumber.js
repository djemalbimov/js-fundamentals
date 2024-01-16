function searchForNumbers(arr1, arr2) {
    let takeCount = arr2[0];
    let deleteCount = arr2[1];
    let searchNumber = arr2[2];

    let takenArray = arr1.slice(0, takeCount);
    takenArray.splice(0, deleteCount);

    let count = takenArray.filter(num => num == searchNumber).length;

    console.log(`Number ${searchNumber} occurs ${count} times.`);
}

searchForNumbers([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumbers([7, 1, 5, 8, 2, 7], [3, 1, 5]);