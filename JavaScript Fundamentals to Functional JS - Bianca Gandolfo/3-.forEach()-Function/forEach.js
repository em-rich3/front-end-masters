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


