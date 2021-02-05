// 순수 자바스크립트를 사용하는데에는 단어를 사용하는게 좋다.
// added ECMAScript 5
// 상식적인 범주에서 사용이 가능, 성능도 개선된다.
'use strict';


// 2. variable
// let (added in ES6) let은 ES6에서 추가되었다.
// 글로벌 값은 정해서 쓰는게 좋다. let만 사용한다.
// var는 선언하기 전에도 값을 할당할 수 있게 해주고 출력도 해준다.
// var hoisting이라고 한다. 어디에 선언했냐에 상관없이 제일 위로 끌어 올려준다.
// block scope이 없다.

let globalName = 'global name';

{ 
    let name = 'yeongjun';
    console.log(name);
    name = 'hello';
    console.log(name);
        
}

console.log(name);
console.log(globalName);

{
    age = 4;
    var age;
}

console.log(age);


// 3. constants
// 상수 변경이 불가능
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;



// Note!
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// 변경이 불가능한 데이터 타입
// Mutable data types : all objects by default are mutable in JS
// 대부분 모든 오브젝트는 수정이 가능하다.
// favor immutable data tpye always for a few reasons:
// - security
// - thread safty
// - reduce human mistakes


// 4. Variable types
// primitive, sigle item: number, string, boolean, null, undefind, symbol
// let 은 메모리에 바로 올라간다.
// object는 ref를 메모리에 올린다. -> ref는 나머지 값에 대한 주소를 가진다.
// object, box container
// function, first-class function 함수를 변수에 전달이 가능하다.
// number type -> 타입 추론을 통해서 자동으로 들어감



const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// type은 number 이다.

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string) 백틱으로 묶고 ${}를 이용한다.
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// console.log(`value: ` + helloBob + ' type: ' + typeof helloBob)


// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null : object이다.
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for object
// 두 개의 심볼은 다르다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);         // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// 5. Dynamic typing : dynamically typed language

let text = 'hello';
console.log(text.charAt(0));
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type: ${typeof text}`);
console.log(text.charAt(0));

// 