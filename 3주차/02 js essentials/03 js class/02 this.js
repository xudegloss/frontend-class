// this
// 일반 함수는 호출 위치에 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의

const james = {
  name: "James",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

james.normal(); // James
james.arrow(); // undefined

const anne = {
  name: "Anne",
  // 아래의 코드는 함수 자체를 가져온 코드를 의미한다.
  normal: james.normal,
  arrow: james.arrow,
};

anne.normal(); // Anne
anne.arrow(); // undefined

// class + this

// User는 생성자 함수이다.

function User(name) {
  this.name = name;
}

User.prototype.normal = function () {
  console.log(this.name);
};

User.prototype.arrow = () => {
  console.log(this.name);
};

const jason = new User("Jason");

jason.normal(); // Jason
jason.arrow(); // undefined

// setTimeout + this !!!

const timer = {
  name: "timerName",
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};

timer.timeout();
