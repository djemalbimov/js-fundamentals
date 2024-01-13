function longestEqualSequence(arr) {
    let longestSeq = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let currentSecuence = [currentNum];
        for (let j = i + 1; j < arr.length; j++) {
            nextNum = arr[j];
            if (currentNum == nextNum) {
                currentSecuence.push(nextNum);
            } else {
                break;
            }
        }
        if (currentSecuence.length > longestSeq.length) {
            longestSeq = currentSecuence;
        }
    }
    console.log(longestSeq.join(' '));
}

longestEqualSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
longestEqualSequence([1, 1, 1, 2, 3, 1, 3, 3]);
longestEqualSequence([4, 4, 4, 4]);
longestEqualSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);