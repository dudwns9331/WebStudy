"use strict";

// Q1. make a string out of an array

{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(" ");
  //  구분자를 넣어서 사이에 출력될 값을 지정할 수 있음

  console.log(result);
}

// Q2. make an array out of a string

{
  const fruits = "apple, banana, orange";
  const result = fruits.split(",");
  //   문자열은 구분자를 없애면서 split으로 합칠 수 있다.
  console.log(result);
}

// Q3 make this array look like this: [ 5, 4, ,3 ,2, 1]

{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();

  console.log(result);
}

// Q4 make new array without the first tow elements

{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

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

// Q5. find a student with the score 90

{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students

{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make ana array containing only the students' scores
// result should be : [45, 80, 90, 66, 68]
// 배열의 값을 이용해서 원하는 값으로 변형시킨다.
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is sa student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'

{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'

{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
