// Exercise 1: Your Favorite Food
// ----------------------------------
let breakfast="Garba";
let lunch = "Foutou";
console.log(`I eat ${breakfast} at every ${lunch}`);

// Exercise 2: Series
// --------------------------
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength= myWatchedSeries.length;
let myWatchedSeriesSentence = `${myWatchedSeries[0]},${myWatchedSeries[1]},${myWatchedSeries[2]}`;
console.log(`I watched ${myWatchedSeriesLength} : ${myWatchedSeriesSentence}`)
// Part II
myWatchedSeries[2] = "friends";
myWatchedSeries.push("Black panther");
myWatchedSeries.unshift("Blacklist");
myWatchedSeries.splice(0, 1);
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);

// Exercice 3
// ------------------------
let temperature = 12;
let fahrenheit = (((temperature/5) * 9) + 32);
console.log(`${temperature} *C is ${fahrenheit}`);

// Exercise 4
// ----------------------
let c;
let a = 34;
let b = 21;

console.log(a+b)
// Prediction: It will output 55, because 21 and 34 are numbers
// Actual: 55

a = 2;
console.log(a+b) //second expression
// Prediction: It will output 23, because 2 and 21 are numbers
// Actual: 23

// La valeur de c : undefined
console.log(3 + 4 + '5');
// Renvoie 75, cette synthaxe est incorrecte et concataine la somme 7 et le caractere 5

// EXERCISE 5
// ------------------------------
typeof(15);
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: number
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false

// EXERCISE 6
// --------------------------------

5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction:
// Actual:

5 % 10
// Prediction: 0
// Actual: 0

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction: ""
// Actual: ""

" " + 0
// Prediction: 0
// Actual: 0

true + true
// Prediction: 2
// Actual: 2

true + false 
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill" 
// Prediction: NaN
// Actual: NaN