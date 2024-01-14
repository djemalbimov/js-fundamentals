function loadingBar(number) {
    let numOfBars = number / 10;
    let remainingBars = 10 - numOfBars;

    let loadingBar = '%'.repeat(numOfBars) + '.'.repeat(remainingBars);

    if (numOfBars == 10) {
        console.log(`100% Complete!`);
    } else {
        console.log(`${number}% [${loadingBar}]`);
        console.log(`Still loading...`);

    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);