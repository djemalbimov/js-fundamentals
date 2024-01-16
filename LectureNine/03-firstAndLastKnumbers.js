function firstAndLastKnumbers(input) {
    let k = input.shift();

    console.log(input.slice(0, k).join(' '));
    console.log(input.slice(-k).join(' '));

}

firstAndLastKnumbers([2, 7, 8, 9]);
firstAndLastKnumbers([3, 6, 7, 8, 9]);