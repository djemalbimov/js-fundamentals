function negativeOrPositiveNumbers(arr) {

    let result = [];

    for (let numAsString of arr) {
        let num = Number(numAsString);

        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (let num of result) {
        console.log(num);
    }
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);