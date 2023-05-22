// js data

// 1. String : "", '', ``
// 2. Number
// 3. Boolean : true, false
// 4. undefined
// 5. null
// 6. Array : []
// 7. Object : {}

const pi = 3.14159265358979;
console.log(pi);

const str = pi.toFixed(2); // 몇 번째 자리까지 유지할 지 결정하는 메소드이다.
console.log(str);
console.log(typeof str);

// 전역 함수 : parseInt, parseFloat - global

const integer = parseInt(str); // 정수 (소수점 필요 X)
const float = parseFloat(str); // 소수점 자리 유지

console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);

// 자주 사용하는 메소드

console.log(`abs : ${Math.abs(-12)}`); // 12
console.log(`min : ${Math.min(2, 8)}`); // 2
console.log(`max : ${Math.max(2, 8)}`); // 8
console.log(`ceil : ${Math.ceil(3.14)}`); // 정수 단위로 올림 처리하기.
console.log(`floor : ${Math.floor(3.14)}`); // 정수 단위로 내림 처리하기.
console.log(`round : ${Math.round(3.14)}`); //정수 단위로 반올림 처리하기.
console.log(`random : ${Math.random()}`); // 랜덤하게 숫자 가져오기.

// 0 ~ 9 사이의 정수의 숫자를 난수 설정하기.

console.log(Math.floor(Math.random() * 10));
