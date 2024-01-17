function createHeroRegister(arr) {
    let heroes = [];

    for (let heroData of arr) {
        let [name, level, itemsString] = heroData.split(' / ');
        let items = itemsString.split(', ');

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}

createHeroRegister(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara']);
createHeroRegister(['Batman / 2 / Banana, Gun','Superman / 18 / Sword','Poppy / 28 / Sentinel, Antara']); 