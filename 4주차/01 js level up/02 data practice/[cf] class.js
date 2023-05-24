// class로 객체 생성자 만들기.

class User {
  constructor(userId, name) {
    (this.userId = userId), (this.name = name);
  }
}

class UserDouble extends User {
  constructor(userId, name) {
    super(userId, name);
    super(userId, name);
  }
}

// FROM 객체 To 배열

const user1 = Object.assign([], new UserDouble("10", "J"));
const user2 = Object.assign([], new UserDouble("11", "M"));

console.log(user1);
console.log(user2);
