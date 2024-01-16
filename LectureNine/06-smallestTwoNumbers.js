function printTwoSmallest(arr) {

    arr.sort((a, b) => a - b);

    console.log(arr[0], arr[1]);
}

printTwoSmallest([30, 15, 50, 5]);
printTwoSmallest([3, 0, 10, 4, 7, 3]);