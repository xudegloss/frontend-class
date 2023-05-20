// 즉시 실행 함수
// Immediately Invoked Function Expression

const a = 7;
function double() {
  console.log(a * 2);
}

double();

// 전제 : 만들고 한 번 실행 후 쓸 일이 없는 경우
// 굳이 함수의 이름을 만들어서 호출할 이유가 없다.

(function () {
  console.log(a * 2);
})();
