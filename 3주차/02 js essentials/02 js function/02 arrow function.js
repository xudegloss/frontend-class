// 화살표 함수
// () => {} vs function () {}

const double = function (x) {
  return x * 2;
};

console.log("double: ", double(7));

const doubleArrow = (x) => {
  return x * 2;
};

console.log("doubleArrow: ", doubleArrow(7));

// 객체를 반환하는 방법 : 소괄호 이용하기.
// 화살표 함수는 축약형이 가능하다.

// const objectArrow = (x) => ({ name: "FastCampus" });

const objectArrow = (x) => ({
  name: "FastCampus",
});

console.log("objectArrow: ", objectArrow());
