let apple: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in object

let now: Date = new Date();

// Array
let color: string[] = ["sd", "sdf"];
let myNumbers: number[] = [3, 23, 42];
let truth: boolean[] = [true, false];

class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function

const logNumber: (i: number | string) => void = (i: number | string) => {
  console.log(i);
};

//when to use annotation
// 1) Funtion that return the 'any' type;

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later

let word = ["red", "gtre", "blue"];
let foundWord: boolean; // declared

for (let i = 0; i < word.length; i++) {
  if (word[i] === "red") {
    foundWord = true; // initialized
  }
}

// 3)Variable whose type cannot be inferred correctly;
let numbers = [-10, 1, -43];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
