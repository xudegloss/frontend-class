// 변수 유효 범위
// var, let, const

function scope() {
  console.log(a); // undefined
  if (true) {
    console.log(a); // undefined
    var a = 123;
    console.log(a);
  }
  console.log(a);
}

scope();
