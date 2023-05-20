// 타이머 함수
// setTimeout
// setInterval
// clearTimeout
// clearInterval

// 특정한 타이머 값을 반환할 수 있다.

const timer = setTimeout(() => {
  console.log("3초 후에 실행됩니다.");
}, 3000);

// 버튼을 클릭하면 함수 종료하는 로직 제작하기.
// clearTimeout으로 타이머를 제어할 수 있다.

const clearBtn = document.querySelector(".clear__timer");

clearBtn.addEventListener("click", () => {
  clearTimeout(timer);
  console.log("3초 후에 실행하는 타이머를 종료합니다.");
});

// setInterval

const timerRepeat = setInterval(() => {
  console.log("3초 마다 실행됩니다.");
}, 3000);

const clearBtnRepeat = document.querySelector(".clear__timer__repeat");

clearBtnRepeat.addEventListener("click", () => {
  clearInterval(timerRepeat);
  console.log("3초 마다 실행하는 타이머를 종료합니다.");
});
