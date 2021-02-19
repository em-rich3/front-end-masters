const weapons = ["candlestick", "lead pipe", "revolver"];

const breakWeapon = function(weapon) {
    return `broken ${weapon}`;
}

let brokenWeapons = weapons.map(breakWeapon);
console.log(brokenWeapons);