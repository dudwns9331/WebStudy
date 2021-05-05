console.log("ObjectDestructuring");

const human = {
  name: "YJ",
  lastName: "Ahn",
  nationality: "Wish i was US",
};

// const name = human.name;
// const lastName = human.lastName;
// const diffName = human.nationality;

// Structuring
// Object에 있는 값들을 기반으로 가져온다.

// Object 키워드에 : 를 넣어서 다른 변수로 저장이 가능하다.
// Object 키워드에 : {} 를 통해서 또 다른 오브젝트를 생성하여 저장 가능하다.
const { name, lastName, nationality: diffName } = human;

console.log(name, lastName, diffName);
