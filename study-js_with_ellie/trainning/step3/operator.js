'use strict';


// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators

console.log(1 + 1);     // add
console.log(1 - 1);     // substract
console.log(1 / 1);     // divide
console.log(1 * 1);     // multiply
console.log(5 % 2);     // remainder
console.log(2 ** 3);    // exponent

// 3. Increment and decrement operators

let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

// postIncrement = counter;
// counter = counter + 1
const postIncrement = counter++;
console.log(`preIncrement : ${postIncrement}, counter : ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;

x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators

console.log(10 < 6 );   // less than
console.log(10 <= 6 );  // less than or equal
console.log(10 > 6 );   // greater than
console.log(10 >= 6 );  // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first true value

// or 연산자는 앞에 있는 값이 true이면 그 값대로 멈춘다.
// 함수를 호출하는게 마지막에 있는게 좋다? 효율적이다. 상황에 따라 다름
console.log(`or: ${value1 || value2 || check()}`);

// %% (and), finds the first false value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject, something

// if (nullableObject != null) {
//     nullableObject.something;
// }


function check() {
    for(let i = 0; i < 10; i++) {
        // wasting time
        console.log('😀');
    }
    return true;
}

// ! (not)
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log('* == loose equality, with type conversion');
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 웬만하면 이렇게 쓰는게 좋다.
console.log('* === strict equality, no type conversion');
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// Object equality by reference
console.log('* Object equality by reference');

const YJ1 = { name : 'YeongJun'};
const YJ2 = { name : 'YeongJun'};
const YJ3 = YJ1;

console.log(YJ1 == YJ2);        // false
console.log(YJ1 === YJ2);       // false ref가 다르기 때문이다.
console.log(YJ1 === YJ3);       // true

// equality - puzzler

console.log('* equality - puzzler')

console.log(0 == false);            // true
console.log(0 === false);           // false
console.log('' == false);           // true
console.log('' === false);          // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false

//  8. Conditional operaors : if
//  if, else if, else

console.log('* if, else if, else')

const name = 'hi';
if (name === 'YJ') {
    console.log('Welcome YJ!');
} else if (name === 'coder') {
    console.log("You are amazing coder");
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;

console.log(name === 'YJ' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

console.log('* switch')

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;

}

// 11. Loops
// while loop, while the condition is true,
// body code is executed.

let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.

do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (let i = 0; i < 11; i++) {
    if(i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}

