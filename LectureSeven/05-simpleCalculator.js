function simpleCalculator(a, b, operator) {

    if (operator == 'add') {
        console.log(a + b);
    } else if (operator == 'subtract') {
        console.log(a - b);
    } else if (operator == 'multiply') {
        console.log(a * b);
    } else if (operator == 'divide') {
        console.log(a / b);
    }

}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');