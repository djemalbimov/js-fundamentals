function reverseAnArrayOfNumbers(n, nums) {

    let result = '';

    for (let i = n - 1; i >= 0; i--) {
        result += nums[i] + ' ';

    }
    console.log(result);

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);