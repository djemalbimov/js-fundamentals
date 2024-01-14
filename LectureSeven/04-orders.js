function orders(product, number) {
    switch (product) {
        case "coffee": prise = 1.50 * number; break;
        case "water": prise = 1.00 * number; break;
        case "coke": prise = 1.40 * number; break;
        case "snacks": prise = 2.00 * number; break;
    }

    console.log(prise.toFixed(2));

}

orders("water", 5);
orders("coffee", 2);