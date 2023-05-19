// 함수 복습

function sum(x, y) {
  return x + y;
}

// 함수 여러 번 동작시키는 것 : 컴퓨터 자원 잡아 먹어서 안 좋음
// 반복해서 사용하는 경우, 변수에 담아서 사용하는 것이 좋다.

const a = sum(1, 3);
const b = sum(4, 12);

console.log(a);
console.log(b);
console.log(a + b);

// return

function returnSum(x, y) {
  if (x < 2) {
    return;
  }
  return x + y;
}

console.log(returnSum(1, 4)); // undefined
console.log(returnSum(10, 5)); // 15

// arguments
// parameters 지정하지 않고도 arguments 불러와서 적용 가능하다.
// 하지만, 매개변수 명시하는 것이 더 권장된다.

function arguments() {
  console.log(arguments);
  return arguments[0] + arguments[1];
}

console.log(arguments(1, 4)); // 매개변수 지정 안 해도, arguments 가져올 수 있다.
