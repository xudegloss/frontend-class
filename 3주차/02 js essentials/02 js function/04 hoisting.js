// 호이스팅 hoisting
// 함수 선언부가 유효 범위 최상단으로 끌어올려지는 현상

const a = 7;

const double = () => {
  console.log(a * 2);
};

double();

// 함수 선언부 hoisting이 유효 범위 최상단으로 끌어올려지는 현상 = 호이스팅

hoisting();

function hoisting() {
  console.log(a * 2);
}
