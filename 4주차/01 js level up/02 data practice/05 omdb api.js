import axios from "axios";

function fetchMovies() {
  // 메소드 체이닝
  // get : 데이터 요청하기.
  // then : 콜백 함수에서 처리할 수 있도록 만들어준다. (내부 로직)

  axios.get("https://www.omdbapi.com/?apikey=7035c60c&s=frozen").then((res) => {
    const h1El = document.querySelector("h1");
    const imgEl = document.querySelector("img");

    h1El.textContent = res.data.Search[0].Title;
    imgEl.src = res.data.Search[0].Poster;
  });
}

fetchMovies();
