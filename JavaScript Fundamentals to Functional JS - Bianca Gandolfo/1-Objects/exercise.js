let game = {};

game.murderer = "??";

game["weapons"] = [
    {type: "knife", location: "library"},
    {type: "candlestick", location: "kitchen"},
    {type: "pistol", location: "bedroom"}
];

game.characters = [];
game.characters[0] = "Miss Scarlet";
game.characters.push("Mr. Green");

console.log(game);
console.log(game.murderer);
console.log(game.weapons);