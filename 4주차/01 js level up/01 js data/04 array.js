// js data

// 1. String : "", '', ``
// 2. Number
// 3. Boolean : true, false
// 4. undefined
// 5. null
// 6. Array : []
// 7. Object : {}

const numbers = [1, 2, 3, 4]; // Zero-Based Numbering 으로 데이터 접근 가능하다.
const fruits = ["Apple", "Banana", "Cherry"]; // 각각의 데이터는 element (또는 item), 요소이다.

// map : 원본 데이터의 개수와 동일하다.

const a = numbers.map((number) => number < 3); // Boolean

console.log(a);
console.log(numbers);

// filter : 특정 기준에 따라서 필터링된 값을 반환한다. 원본 데이터 개수와 다를 수도 있다.

const b = numbers.filter((number) => number < 3); // 조건을 만족하는 값

console.log(b);
console.log(numbers);

// map, filter는 원본 데이터를 훼손하지 않고, 새로운 데이터를 만들어서 반환한다.

// find, findIndex

const c = fruits.find((fruit) => /^B/.test(fruit));
// 정규표현식 (대문자 B로 시작하는 문자 데이터 의미한다. 대문자 B로 시작하는 데이터 반환하기. * 메소드는 종료된다.)

console.log(c);

const d = fruits.findIndex((fruit) => /^B/.test(fruit));
// 정규표현식 (대문자 B로 시작하는 문자 데이터 의미한다. 대문자 B로 시작하는 데이터 반환하기. * 메소드는 종료된다.)

console.log(d); // 배열에서 zero-based 기준 1 이기 때문에, 1을 반환한다.

// includes

const e = numbers.includes(3);
console.log(e);

const f = fruits.includes("pizza");
console.log(f);

// push, unshift
// 원본 데이터가 수정된다 !!!!!

numbers.push(5); // 가장 뒤에 넣는다.
console.log(numbers);

numbers.unshift(0); // 가장 앞에 넣는다.
console.log(numbers);

// reverse
// 원본 데이터가 수정된다 !!!!!

numbers.reverse();
fruits.reverse();

console.log(numbers);
console.log(fruits);

// splice
// 원본 데이터가 수정된다 !!!!!

numbers.splice(2, 1); // index , index에 있는 값을 지우는 횟수 (여기서는 1번 지워라.)
console.log(numbers); // 배열 데이터에서 특정 아이템들을 지우는 경우에 많이 이용된다.

numbers.splice(2, 0);
console.log(numbers);

numbers.splice(2, 0, 999); // 마지막 인수는 추가하고 싶은 값
// 인덱스 2에서 아무 것도 지우지 않고 999를 추가하라는 의미
console.log(numbers);

// 특정 아이템을 추가할 수 있는 기능

const newFruits = ["Apple", "Banana", "Cherry"];
newFruits.splice(2, 0, "Orange");
console.log(newFruits);
