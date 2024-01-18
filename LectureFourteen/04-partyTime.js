function partyGuests(input) {
    let guests = input.slice(0, input.indexOf('PARTY'));
    let comingGuests = input.slice(input.indexOf('PARTY') + 1);

    let vipGuests = [];
    let regularGuests = [];

    guests.forEach((guest) => {
        if (guest[0] >= '0' && guest[0] <= '9') {
            vipGuests.push(guest);
        } else {
            regularGuests.push(guest);
        }
    });

    comingGuests.forEach((guest) => {
        if (vipGuests.includes(guest)) {
            vipGuests.splice(vipGuests.indexOf(guest), 1);
        } else if (regularGuests.includes(guest)) {
            regularGuests.splice(regularGuests.indexOf(guest), 1);
        }
    });

    let notComingGuests = vipGuests.concat(regularGuests);
    console.log(notComingGuests.length);
    console.log(notComingGuests.join('\n'));
}

partyGuests(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
partyGuests(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);

