// Extract the first five letters from a string
let string1 = ' gfuh ieiuei ';
let firstFiveLetters = string1.trim().substring(0, 5);
document.getElementById('first-five-letters').innerText = `First five letters: ${firstFiveLetters}`;

// Get the length of a string and make it uppercase
let string2 = 'hduej dij';
let upperCaseString2 = string2.toUpperCase();
let lengthOfString2 = upperCaseString2.length;
document.getElementById('uppercase-length').innerText = `Uppercase and length: ${upperCaseString2} (${lengthOfString2})`;

// Take a string, make it lowercase and trim it
let string3 = '   biji jdo   ';
let lowerCaseTrimmedString3 = string3.trim().toLowerCase();
document.getElementById('lowercase-trimmed').innerText = `Lowercase and trimmed: ${lowerCaseTrimmedString3}`;

// Replace specified word in a string
let string4 = 'The quick brown fox jumps over the lazy dog';
let replacedString = string4.replace('fox', 'cat');
document.getElementById('replaced-string').innerText = `Replaced string: ${replacedString}`;

// Random statements in implicit coercion
let implicitCoercion = 89 + 'hello' + 90 / 9;
let booleanCoercion = true || false;
document.getElementById('implicit-coercion').innerText = `Implicit coercion: ${implicitCoercion}, Boolean coercion: ${booleanCoercion}`;

// Create an object for animal
let animal = {
    type: 'Dog',
    name: 'Buddy',
    age: 5,
    sound: 'Bark',
    makeSound: function() {
        return this.sound;
    }
};
document.getElementById('animal-object').innerText = `Animal object: ${JSON.stringify(animal)}`;
