// js data

// 1. String : "", '', ``
// 2. Number
// 3. Boolean : true, false
// 4. undefined
// 5. null
// 6. Array : []
// 7. Object : {}

// new String() 이라는 인스턴스 생성 방식 대신에, 리터럴 방식 이용하여 손쉽게 문자 데이터 생성 가능하다.
// 문자 데이터에 직접적으로 메서드 적용 가능하다.
// String.prototype.indexOf()

const result = "Hello World".indexOf("World");
console.log(result);

// 없는 경우에는 -1 등장한다.

console.log("undefined".indexOf());

// undefined를 찾기 때문에, 0 등장한다.

const str = "0123";
console.log(str.length); // 문자.프로퍼티
console.log("0123".length); // 직접적으로 연결 가능하다.

const sayHello = "Hello world!";

// 없는 경우 -1 등장하기 때문에, -1이 아닌 경우에 false(문자가 없음을 의미)가 나오도록 만들어야 한다.
// -1 !== -1 : false
// 5 !== -1 : true

console.log(sayHello.indexOf("Bye") !== -1); // Boolean data를 반환하는 방법 : 비교 연산자 이용하기.
console.log(sayHello.slice(0, 3)); // indexing, 종료 인덱스 그 직전까지 추출하기.
console.log(sayHello.slice(6, sayHello.length - 1)); // world
console.log(sayHello.replace("world", "Amy"));
console.log(sayHello.replace(" world!", "")); // 문자열 제거도 replace로 가능하다.

// match + 정규 표현식 -> 특정한 문자 일치시켜서 배열 데이터로 반환 가능하고, 원하는 데이터 추출하여 사용 가능하다.

const emailStr = "xudegloss@gmail.com";
console.log(emailStr.match(/.+(?=@)/)[0]); // RegExp 정규 표현식

// 회원가입 시 모든 공백 문자 제거하기.

const spaceStr = "    Hello world   ";
console.log(spaceStr.trim());
