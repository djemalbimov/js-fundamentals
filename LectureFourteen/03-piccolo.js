function manageParkingLot(arr) {
  let parkingLot = new Map();

  for (let entry of arr) {
    let [direction, carNumber] = entry.split(', ');

    if (direction == 'IN') {
      parkingLot.set(carNumber, true);
    } else if (direction == 'OUT') {
      parkingLot.delete(carNumber);
    }
  }

  let sortedCars = [...parkingLot.keys()].sort((a, b) => a.localeCompare(b));

  if (sortedCars.length == 0) {
    console.log('Parking Lot is Empty');
  } else {
    sortedCars.forEach(carNumber => {
      console.log(carNumber);
    });
  }
}

manageParkingLot(['IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU']);
manageParkingLot(['IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'OUT, CA1234TA']);