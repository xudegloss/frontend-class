// 형 변환

const a = 1;
const b = "1";

console.log(a === b);

// Truthy 참 같은 값
// true, {}, [], 1, 2, "false", -12, "3.14" ...

// Falsy 거짓 같은 값
// false, "", null, undefined, 0, -0, NaN
// Not A Number

if ("false") {
  console.log(123);
}
