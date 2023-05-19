// 경로 설정 제대로 해주기.

import getType from "./getType.js";

// typeof

console.log(typeof "Hello, World!");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // object
console.log(typeof {});
console.log(typeof []);

// function getType(data) {
//   // 메소드 체이닝
//   return Object.prototype.toString.call(data).slice(8, -1);
// }

// 특정 데이터에서 좀 더 상세한 타입을 얻어낼 수 있다.

console.log(getType(123));
console.log(getType(false));
console.log(getType(null)); // Null
console.log(getType({})); // Object
console.log(getType([])); // Array
