// Reverse a string
let stringToReverse = 'hello world';
let reversedString = stringToReverse.split('').reverse().join('');
document.getElementById('reverse-string').innerText = `Reversed string: ${reversedString}`;

// Find the highest and lowest value in an array
let numbers = [90, 10, 100, 30, 89];
let highestValue = Math.max(...numbers);
let lowestValue = Math.min(...numbers);
document.getElementById('highest-lowest').innerText = `Highest: ${highestValue}, Lowest: ${lowestValue}`;

// Sort an array
let sortedNumbers = [...numbers].sort((a, b) => a - b);
document.getElementById('sorted-array').innerText = `Sorted array: ${sortedNumbers}`;

// Display first 3 elements in an array in UI
let firstThreeElements = numbers.slice(0, 3);
document.getElementById('first-three-elements').innerText = `First 3 elements: ${firstThreeElements}`;

// Remove 4th element and add 2 elements there
let modifiedArray = [...numbers];
modifiedArray.splice(3, 1, 55, 65);
document.getElementById('modified-array').innerText = `Modified array: ${modifiedArray}`;

// Event Listeners on input field
let inputField = document.getElementById('inputField');
let eventOutput = document.getElementById('event-output');

inputField.onkeydown = () => eventOutput.innerText = 'Key Down Event';
inputField.onkeyup = () => eventOutput.innerText = 'Key Up Event';
inputField.onkeypress = () => eventOutput.innerText = 'Key Press Event';

// On load event
function handleOnLoad() {
    alert('Page has loaded');
}

// Add background color to div element
function addBackgroundColorToDiv() {
    let colorDiv = document.getElementById('color-div');
    colorDiv.style.backgroundColor = 'lightblue';
}

// Generate random background color for body
function generateRandomBackgroundColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
