import myData from "./myData.json";

// 문자열 데이터로 변경해야 한다.
const user = JSON.stringify(myData);
localStorage.setItem("user", user);

// js에서 이용하기 위하여 parse 이용하여 원래의 데이터로 변경해야 한다.
console.log(JSON.parse(localStorage.getItem("user")));

// remove
// localStorage.removeItem("user");

const str = localStorage.getItem("user");
const obj = JSON.parse(str);

console.log(obj);

// 데이터 속성의 값을 수정하기.

obj.age = 22;
console.log(obj);

// 수정된 데이터를 다시 로컬 스토리지에 보관하기.

localStorage.setItem("user", JSON.stringify(obj)); // 변경된 데이터가 저장된다.
// 기존에 있던 키에 덮어서 이용하면 된다.

// remove
localStorage.removeItem("user");
