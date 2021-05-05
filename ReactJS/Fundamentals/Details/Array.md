# Detail of Array #4

## map Example

```js
const dayss = ["MON", "TUE", "WED", "THURS", "FRI"];

// map의 인자에 index도 포함된다.

/*
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
*/

// 새로운 배열을 만들어 반환한다.
const smilingDays = dayss.map((day) => `👦${day}`);
```

[map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

<br/>

## filter Example

```js
let posts = ["HI", "HELLO", "BYE"];

// 새로운 배열을 만들어 return 한다.
// posts = posts.filter((post) => post == "BYE");

/*
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
*/
```

[filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

<br/>

## forEach, include Example

```js
// forEach, include

/*

     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     * 
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
*/

posts.forEach((post) => console.log(post));

// 배열에 push라는 함수는 내장되어 있음
posts.push("new");

console.log(posts);

let greetings = ["Hi", "Hello", "Howdy", "Suup"];

// includes는 해당 배열에 요소가 있는지 검사한다. in
/*
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     * @param searchElement The element to search for.
     * @param fromIndex The position in this array at which to begin searching for searchElement.
  includes(searchElement: T, fromIndex?: number): boolean;
*/

if (!greetings.includes("Hello")) {
  greetings.push("Hello");
}
```

[forEach](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다.

[includes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)메서드는 배열이 특정 요소를 포함하고 있는지 판별한다.
