function mathPower(n, exponent) {

    let product = 1;

    for (let i = 0; i < exponent; i++) {
        product *= n;
    }

    console.log(product);

}

mathPower(2, 8);
mathPower(3, 4);