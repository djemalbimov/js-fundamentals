function requiredReading(bookPages, read, days) {

    let totalTime = bookPages / read;
    let hoursPerDay = totalTime / days;

    console.log(hoursPerDay);
   
}

requiredReading(212, 20,2);
requiredReading(432, 15, 4);