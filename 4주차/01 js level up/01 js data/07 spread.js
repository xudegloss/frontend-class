// 전개 연산자 Spread

const fruits = ["Apple", "Banana", "Cherry", "Orange"];
console.log(fruits);
console.log(...fruits); // 문자 데이터 형태로 출력된다. 전개하여 출력된다.

// 쉼표로 구분된 각각의 아이템으로 구분된다.
// console.log("Apple", "Banana", "Cherry")와 동일한 형태로 출력된다.

const toObject = (a, b, ...c) => {
  // 나머지 아이템 전부 c로 들어가는 개념으로 이용한다. (나머지 매개 변수 = rest parameter)
  // c에는 배열 데이터로 받는다.

  ({ a, b, c }); // 축약형으로 작성하기.
};

// a: a,
// b: b,
// c: c,

// 속성의 이름 === 변수의 이름 : 하나만 남기기

console.log(toObject(...fruits)); // 인수가 많을 때 유리하다.

// {a: 'Apple', b: 'Banana', c: 'Cherry'}
// console.log(toObject("Apple", "Banana", "Cherry"));
// console.log(toObject(fruits[0], fruits[1], fruits[2]));
