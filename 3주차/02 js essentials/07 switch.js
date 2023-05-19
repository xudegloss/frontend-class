import getRandom from "./getRandom.js";

// 조건문 (Switch Statement)

const a = getRandom();

// 하나의 케이스 끝나면 반드시 break 걸어주기.
// 조건의 내용이 어떤 값으로 딱 떨어지는 조건인 경우에 Switch 문 유리하다.

switch (a) {
  case 0:
    console.log("a is 0");
    break;
  case 2:
    console.log("a is 2");
    break;
  case 4:
    console.log("a is 4");
    break;
  default:
    console.log("rest...");
}
