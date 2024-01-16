function sumFirstAndLast(arr) {

    let firs = arr.shift();
    let last = arr.pop();

    console.log(Number(firs) + Number(last));

}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);