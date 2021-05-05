console.log("ArrowFunctions");

// 파라미터에 들어가는 변수는 지정해주면 default값으로 지정 가능하다.
function sayHello(name = "name") {
  return "Hello " + name;
}

// Arrow Function을 넣을때는 const 변수를 선언하고 = (파라미터) => { 함수의 내용 및 반환 값} 으로 쓴다.
// Arrow Function은 return 을 한다는 것이 함축되어 있다. (중괄호를 쓰지 않는다는 가정하에)
const sayHello2 = (name) => "Hello " + name;

const YJ = sayHello("YeongJun");

console.log(YJ);
console.log(sayHello2("YeongJun Arrow"));

// index.html의 button을 가져오는 방법이다.
// document.querySelector
const button = document.querySelector("button");

// Arrow Function의 규칙 중 하나는 Argument(인자)가 하나 일때는 괄호를 할 필요가 없다는 것이다.
// 두 개 이상일때는 무조건 괄호를 해야함 ()
const handleClick = (event) => {
  console.log(event);
};

// addEventListener는 "해당 이벤트", handling 하는 함수가 필요하다.
// addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
button.addEventListener("click", handleClick);

// Template Literals
// backTicks ` 를 이용한다.
// 백틱 기호와 함께 ${변수} 를 써서 변수를 쉽게 가져올 수 있다.
// String과 Variable을 쉽게 사용하기 위해서 쓴다.
const sayHello3 = (name) => `Hello ${name}`;
console.log(sayHello3("BackTicks"));
