// 비교 연산자

const a = 1;
const b = 1;

console.log(a === b); // 서로 같은지 확인하는 연산자

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(2, "2"));

console.log(a !== b); // 서로 다른 것인지 확인하는 연산자, 불일치 연산자
console.log(a < b);
console.log(a <= b);

// 논리 연산자

const c = 1 === 1;
const d = "AB" === "AB";
const e = false;

console.log(c);
console.log(d);
console.log(e);

// And, Or, Not

console.log("&&: ", c && d && e); // 구분 가능한 문자 이용하여 콘솔 관리하기.
console.log("||: ", c || d || e);
console.log("!:", !c); // 부정 연산자 (not)
