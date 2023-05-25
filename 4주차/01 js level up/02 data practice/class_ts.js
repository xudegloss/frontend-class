res = [];

class UserDouble {
  constructor(userId, name) {
    this.userId = userId;
    this.name = name;
  }

  // 원하는 객체를 추가하는 코드

  addUser() {
    res.push({ userId: this.userId, name: this.name });
  }
}

const user1 = new UserDouble("10", "J");
const user2 = new UserDouble("11", "S");

user1.addUser();
user2.addUser();

console.log(res);

// 결과값 : [{userId: '10', name: 'J'}, {userId: '11', name: 'S'}]
