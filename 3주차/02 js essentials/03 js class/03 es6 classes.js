// ES6 Classes

const amy = {
  name: "Amy",
  // function 생략 가능하다.
  normal() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

amy.normal(); // this가 amy
amy.arrow();

// 생성자 함수 -> ES6 Classes 변경하기.

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

class User {
  // constructor 내부 함수
  // normal function

  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  // prototype 없이 prototype으로 만들어지는 메소드 만들 수 있다.

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const neo = new User("Neo", "Park");

console.log(neo);
console.log(neo.getFullName());
