function theatrePromotions(day, age) {

    let prize = 0;

    if (age >= 0 && age <= 18) {
        switch (day) {
            case 'Weekday': prize = 12; console.log(`${prize}$`); break;
            case 'Weekend': prize = 15; console.log(`${prize}$`); break;
            case 'Holiday': prize = 5; console.log(`${prize}$`); break;
            default: console.log("Error!"); break;
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case 'Weekday': prize = 18; console.log(`${prize}$`); break;
            case 'Weekend': prize = 20; console.log(`${prize}$`); break;
            case 'Holiday': prize = 12; console.log(`${prize}$`); break;
            default: console.log("Error!"); break;
        }
    } else if (age > 64 && age <= 122) {
        switch (day) {
            case 'Weekday': prize = 12; console.log(`${prize}$`); break;
            case 'Weekend': prize = 15; console.log(`${prize}$`); break;
            case 'Holiday': prize = 10; console.log(`${prize}$`); break;
            default: console.log("Error!"); break;
        }
    } else {
        console.log("Error!");
    }

}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);