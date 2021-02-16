function createSuspectObject(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log(`My name is ${name}`);
        }
    };
};

let suspects = ["Miss Scarlet", "Colonel Mustanrd", "Mr. White"];

const _ = {};
_.each = function(list, callback) {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    } else {
        for (let key in list) {
            callback(list[key], key, list)
        }

    }

}

_.each(['sally', 'georgie', 'pete'], function(name, i, list) {
    if (name[i+1]) {
        console.log(name, 'is younger than', name[i+1])
    } else {
        console.log(name, 'is the oldest')
    }
})