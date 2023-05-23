// js data

// 1. String : "", '', ``
// 2. Number
// 3. Boolean : true, false
// 4. undefined
// 5. null
// 6. Array : []
// 7. Object : {}

// assign

const userAge = {
  // key : value
  name: "Anne",
  age: 26,
};

const userEmail = {
  name: "Anne",
  email: "anne@gmail.com",
};

const target = Object.assign(userAge, userEmail);

console.log(target);
console.log(userAge);
console.log(target === userAge); // true
// 생긴 것이 같아서 true가 뜬 것이 아니다. (같은 메모리 주소라서)

const a = { k: 123 };
const b = { k: 123 };

console.log(a === b); // false
// 생긴 것은 동일하지만, 다른 객체이다. 그래서 false이다. (다른 메모리 주소라서)

// 원본 데이터 유지하며, 데이터 복사하는 방법

const newTarget = Object.assign({}, userAge, userEmail);

console.log(newTarget);
console.log(userAge); // 원본 데이터를 유지하며 새로운 객체 만들 수 있다.
// (메모리 주소 다르기 때문에, 생김새 같아도 false가 뜬다.)

// Keys

const user = {
  name: "Amy",
  age: 26,
  email: "xudegloss@gmail.com",
};

const keys = Object.keys(user);
console.log(keys);

// const values = Object.values(user);
// console.log(values);

// forEach는 반환되는 값이 없기 때문에 map 이용하기.

const values = keys.map((key) => user[key]); // 인덱싱 방법 : 객체[키], 배열은 배열[인덱스] 이용하기.
console.log(values);
