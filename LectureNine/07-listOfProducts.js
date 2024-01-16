function printNumberedProducts(products) {

    products.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}.${products[i]}`);
    }
}

printNumberedProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
printNumberedProducts(['Watermelon', 'Banana', 'Apples']);