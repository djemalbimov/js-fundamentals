function wordTracker(arr) {
    let searchedWord = arr.shift().split(' ');
    let occurrences = {};

    for (let word of searchedWord) {
        occurrences[word] = 0;
    }

    for (let word of arr) {
        if (word in occurrences) {
            occurrences[word]++;
        }
    }

    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    for (let [word, repeats] of entries) {
        console.log(`${word} - ${repeats}`);
    }
}

wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
wordTracker(['is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);