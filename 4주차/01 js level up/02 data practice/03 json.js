// JSON (Javascript Object Notation)
// 자바스크립트의 객체 표기법

/*

{
  "string": "Anne",
  "number": 123,
  "boolean": true,
  "null": null,
  "object": {},
  "array": []
}

*/

import myData from "./myData.json"; // .json 명시하기.
console.log(myData); // 하나의 문자 데이터

const user = {
  name: "Anne",
  age: 85,
  emails: ["thesecon@gmail.com", "neo@zillinks.com"],
  // 특수 기호 포함된 경우에 따옴표로 묶어주기.
  // (예) "company-name": null,
};

// console.log("user", user);

// json 파일은 하나의 문자 데이터이다.
// stringify : 하나의 문자열 데이터로 경량화시키는 방법

const str = JSON.stringify(user); // stringify(모든 데이터) : json format으로 만들어서 사용 가능하다. (문자열 데이터)
console.log("str", str);
console.log(typeof str);

// parse : json파일을 js에서 제어하고 사용하기 위한 방법

const obj = JSON.parse(str);
console.log("obj", obj);
