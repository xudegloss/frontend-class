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

console.log(numbers);
console.log(fruits);

console.log(numbers.length); // 4
console.log(fruits.length); // 3
console.log([1, 2].length); // 2
console.log([].length); // 빈 배열 : 0

// concat()

console.log(numbers.concat(fruits));
// 하지만, 원본 데이터는 건드리지 않는다. (원본 데이터 수정 X)
// 수정되는 경우도 있기 때문에, 기억하기.

// foreach() : 특정한 callback 함수를 반복 실행하는 메소드이다.
// array는 자주 사용하지 않는 매개 변수 > 어차피 참조할 거니까 ! (변수에 직접적으로 데이터 연결됨.)

fruits.forEach(function (element, index, array) {
  console.log(element, index, array);
}); // 익명 함수인 callback

// map

const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`);
});

console.log(a); // 반환되는 값이 없다.

const b = fruits.map((fruit, index) => {
  // 객체로 반환하는 방법
  // * 많이 사용되는 방법);

  ({
    id: index,
    name: fruit,
  });
  // 반환되는 값이 있다. (forEach와 가장 큰 차이점)
});

console.log(b); // 반환된 값은 배열로 반환된다.
