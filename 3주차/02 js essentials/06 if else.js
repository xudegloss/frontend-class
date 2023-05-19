import getRandom from "./getRandom.js";

// 조건문 (If Statement)

const a = getRandom();

// 순서는 첫 번째 블록 확인 > 맞으면 나머지 무시, 틀리면 다음 블록 확인 > 맞으면 나머지 무시, 틀리면 다음 블록 확인 ....
// 다 틀리면 else 구문 실행

if (a === 0) {
  console.log("a is 0");
} else if (a === 2) {
  console.log("a is 2");
} else if (a === 4) {
  console.log("a is 4");
} else {
  console.log("rest...");
}
