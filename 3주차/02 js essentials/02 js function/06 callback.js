// callback
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
// setTimeout 인수인 함수를 콜백이라고 부른다.

function timeout(callback) {
  setTimeout(() => {
    console.log("3초 후에 실행됩니다.");
    callback();
  }, 3000);
}

// callback 함수 이용하여 3초 후에 실행되는 Done을 출력하는 로직 구성하기.

timeout(() => {
  console.log("Done!");
}); // 3초 후에 실행된다.
// console.log("Done!"); // 바로 실행된다.
