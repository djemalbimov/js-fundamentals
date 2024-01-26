function rightPlace(string1, symbol, string2) {

    let result = '';

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] == '_') {
            result += symbol;
        } else {
            result += string1[i];
        }
    }

    if (result == string2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');