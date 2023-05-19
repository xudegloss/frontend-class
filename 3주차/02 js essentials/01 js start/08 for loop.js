// 반복문 (For Statement)
// for (시작 조건; 종료 조건; 변화 조건) {}

const ulEl = document.querySelector("ul");

// 반복문을 통하여 ul 태그 안에 li 태그 추가하는 방법

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");

  // textContent : setter
  li.textContent = `list-${i + 1}`;

  // Zero Based가 아니기 때문에, + 1로 지정해야 짝수인 경우만 출력된다.
  if ((i + 1) % 2 === 0) {
    li.addEventListener("click", function () {
      // textContent : getter
      console.log(li.textContent);
    });
  }

  // ul 태그 안에 li 태그 삽입하기.
  ulEl.appendChild(li);
}
