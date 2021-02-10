const game = {
    suspects : [
        {
            name: "Rusty", 
            color: 'orange'
        }, {
            name: 'Miss Scarlet',
            color: 'red'
        }
    ]
}


function loopArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function findSuspects() {
    for (let i = 0; i < game.suspects.length; i++) {
        for (let key in game.suspects[i]) {
            if (game.suspects[i][key] === "Rusty") {
                console.log("Found 'em!");
            } else {
                console.log("Next time...");
            }
        }
    }
}
loopArray(game.suspects);
findSuspects(game);