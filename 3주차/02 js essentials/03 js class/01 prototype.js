// 생성자 함수 Prototype
// 동일한 메소드와 속성을 계속 선언하는 것 자체가 메모리 낭비이다. -> class 이용하면 된다.

const amy = {
  firstName: "Amy",
  lastName: "Kim",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
    // this는 personObj를 지칭한다.
    // 변수 이름이 언제든지 바뀔 수 있으니까, this 이용하는 것이 좋다.
  },
};

const neo = {
  firstName: "Neo",
  lastName: "Park",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
    // this는 personObj를 지칭한다.
    // 변수 이름이 언제든지 바뀔 수 있으니까, this 이용하는 것이 좋다.
  },
};

const jason = {
  firstName: "Jason",
  lastName: "Lee",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
    // this는 personObj를 지칭한다.
    // 변수 이름이 언제든지 바뀔 수 있으니까, this 이용하는 것이 좋다.
  },
};

console.log(amy.getFullName()); // firstName과 lastName 가져올 수 있다.
console.log(neo.getFullName());
console.log(jason.getFullName());

// class 제작하는 방법

// 생성자 함수 : 하나의 객체 데이터 생성하기.

function User(first, last) {
  // 다른 데이터가 들어오기 때문에 이런 식으로 접근하기.
  this.firstName = first;
  this.lastName = last;
}

// getFullName은 동일하게 들어오기 때문에, prototype 이용하기.

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// {}로 객체 만드는 방식을 리터럴 방식이라고 한다.
// new 통하여 생성자 함수 실행하기.
// 반환된 변수들은 인스턴스이다.

const james = new User("James", "Park");
const anne = new User("Anne", "Lee");
const sally = new User("Sally", "Kim");

console.log(james);
console.log(anne);
console.log(sally);

// 한 번만 만들어진 함수를 참조하는 방식이다.

console.log(james.getFullName());
console.log(anne.getFullName());
console.log(sally.getFullName());
