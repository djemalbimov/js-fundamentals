function specialNumbers(num) {

    for (let curNum = 1; curNum <= num; curNum++) {
        let curNumAsString = String(curNum);
        let sum = 0;
        for (let i = 0; i < curNumAsString.length; i++) {
            sum += Number(curNumAsString[i])
        }
        if (sum == 5) {
            console.log(`${curNum} -> True`)
        } else if (sum == 7) {
            console.log(`${curNum} -> True`)
        }else if (sum == 11) {
            console.log(`${curNum} -> True`)
        } else { console.log(`${curNum} -> False`) }

    }

}

specialNumbers(20);
specialNumbers(15);