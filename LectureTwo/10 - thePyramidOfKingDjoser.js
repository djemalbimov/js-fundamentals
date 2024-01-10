function thePyramidOfKingDjoser(baseSize, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let height = 0;
    let floor = 1;

    for (let curSize = baseSize; curSize > 0; curSize -= 2) {
        height += increment;
        let totolArea = curSize ** 2;

        if (curSize <= 2) {
            gold = totolArea * increment;
        } else {
            let stoneArea = (curSize - 2) ** 2;
            stone += stoneArea * increment;


            if (floor % 5 == 0) {
                let lapisArea = totolArea - stoneArea;
                lapis += lapisArea * increment;
            } else {
                let marbleArea = totolArea - stoneArea;
                marble += marbleArea * increment;
            }
        }
        floor++;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);