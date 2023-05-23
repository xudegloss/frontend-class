// 깊은 복사와 얕은 복사

const user = {
  name: "Anne",
  age: 26,
  emails: ["xudegloss@gmail.com"],
};

/*

// 참조 : 참조형 데이터에서 문제 생길 수 있다.

const copyUser = user;
console.log(copyUser === user); // true

user.age = 22; // 같은 메모리 주소를 바라보고 있다. 그래서 둘 다 값이 변경된다.
console.log("user", user);
console.log("copyUser", copyUser);

console.log("-----");
console.log("-----");

console.log(copyUser === user); // true

*/

// 의도치않게 변경된거면, 복사라는 개념을 사용해야 한다.

/*

// 얕은 복사 1

const copyUser = Object.assign({}, user); // (대상 객체, 출처 객체), 다른 메모리 주소로 복사하기.
console.log(copyUser === user); // false

user.age = 22;
console.log("user", user);
console.log("copyUser", copyUser);

console.log("-----");
console.log("-----");

console.log(copyUser === user); // false

*/

// 얕은 복사 2

import _ from "lodash"; // 깊은 복사

// const copyUser = { ...user }; // user가 가지고 있던 속성과 값을 전개하여 넣어준다.
const copyUser = _.cloneDeep(user); // 깊은 복제
console.log(copyUser === user); // false

user.age = 22;
console.log("user", user);
console.log("copyUser", copyUser);

console.log("-----");
console.log("-----");

// 얕은 복사에 대한 내용
// user라는 객체 데이터 하나를 복사한 것이고, emails 객체 데이터를 복사한 것은 아니다.
// emails는 같은 메모리 공간을 공유하고 있다.

user.emails.push("ajouunihospitalrn@naver.com"); // 뒤로 밀어넣는다.
console.log(user.emails === copyUser.emails);
console.log("user", user);
console.log("copyUser", copyUser);

// 이런 경우 필요한 것이 깊은 복사이다. (lodash) , ctrl + ` 이용하여 터미널 열고 닫을 수 있다.
