function manipulateArray(commands) {
    let arrayToManipulate = commands[0].split(' ').map(Number);

    for (let i = 1; i < commands.length; i++) {
        let command = commands[i].split(' ');

        switch (command[0]) {
            case 'Add':
                arrayToManipulate.push(Number(command[1])); break;
            case 'Remove':
                let numToRemove = Number(command[1]);
                arrayToManipulate = arrayToManipulate.filter(num => num !== numToRemove); break;
            case 'RemoveAt':
                let indexToRemove = Number(command[1]);
                arrayToManipulate.splice(indexToRemove, 1); break;
            case 'Insert':
                let numberToInsert = Number(command[1]);
                let insertIndex = Number(command[2]);
                arrayToManipulate.splice(insertIndex, 0, numberToInsert); break;

        }
    }

    console.log(arrayToManipulate.join(' '));
}

manipulateArray(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']);
manipulateArray(['6 12 2 65 6 42','Add 8','Remove 12','RemoveAt 3','Insert 6 2']);