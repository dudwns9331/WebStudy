# Javascript detail step8

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

- ## Array-Api

<br/>

- ### make a string out of an array

```js
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(" ");
  //  구분자를 넣어서 사이에 출력될 값을 지정할 수 있음

  console.log(result);
}
```

join 을 이용해서 요소 사이 사이에 구분자를 넣어서 출력될 값을 지정할 수 있다.

<br/>
<br/>

- ### make an array out of a string

```js
{
  const fruits = "apple, banana, orange";
  const result = fruits.split(",");
  //   문자열은 구분자를 없애면서 split으로 합칠 수 있다.
  console.log(result);
}
```

split을 통해서 구분자를 기준으로 배열을 나눌 수 있다.

<br/>
<br/>

- ### make this array look like this: [ 5, 4, ,3 ,2, 1]

```js
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();

  console.log(result);
}
```

reverse() 함수를 통해서 배열의 순서를 거꾸로 정렬 할 수 있다.

<br/>
<br/>

- ### make new array without the first tow elements

```js
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}
```

slice 를 통해서 (시작하는 인덱스 포함 ~ 끝나는 인덱스 포함안함) 으로 배열을 잘라서 출력한다.

<br/>
<br/>

- ### find a student with the score 90

```js
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 29, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}
```

find() 함수를 통해서 lambda 형식으로 원하는 조건에 맞는 값을 찾을 수 있다.

<br/>
<br/>

- ### make an array of enrolled students

```js
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}
```

filter() 를 통해서 lambda 형식으로 원하는 값만 출력하도록 할 수 있다.

<br/>
<br/>

- ### make ana array containing only the students' scores

```js
{
  const result = students.map((student) => student.score);
  console.log(result);
}
```

map() 함수를 이용해서 lambda 형식으로 원하는 값으로 변경이 가능하다.

<br/>
<br/>

- ### check if there is sa student with the score lower than 50

```js
const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}
```

some 은 배열 안에 주어진 조건에 맞는 어떤 값이라도 존재하면 true를 반환하고 every는 배열의 모든 값이 조건에 맞아야 true를 리턴한다.

<br/>
<br/>

- ### compute students' average score

```js
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}
```

reduce 를 통해서 prev, curr 값을 받고 이전 값과 최근 값의 합을 구할 수 있다.

[reduce 자세한 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

<br/>
<br/>

- ### make a string containing all the scores

```js
{
  const result = students.map((student) => student.score).join();
  console.log(result);
  // result should be : '45, 80, 90, 66, 88'
}
```

학생의 점수만 가져오고 출력하도록 한다.

<br/>
<br/>

- ### Bonus! do Q10 sorted in ascending order

```js
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .reverse()
    .join();
  console.log(result);
  // result should be: '45, 66, 80, 88, 90'
}
```

.sort((a, b) => a - b) 는 배열을 오름차순으로 정렬하는 것이다. a - b의 값이 크거나 작거나 같으면 리턴 값을 달리하여 오름차순으로 정렬하는 것이다.

[sort() 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
