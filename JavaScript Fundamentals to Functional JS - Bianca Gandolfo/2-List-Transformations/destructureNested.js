let suspects = [
    {
        name: "Rusty",
        color: "orange"
    }, {
        name: "Miss Scarlet", 
        color: "red"
    }
]

let [color1, color2] = [suspects[0].color, suspects[1].color];

console.log(color1);
console.log(color2);

//OPTION 2

let [{color: firstColor}, {color: secondColor}] = suspects;

console.log(firstColor);
console.log(secondColor);