function printAndSum(start, end) {
    let numStr = '';
    let sum = 0;

    for (let num = start; num <= end; num++) {
        numStr += num + ' ';
        sum += num;
    }
    console.log(numStr);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);