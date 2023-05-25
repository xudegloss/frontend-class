// class로 객체 생성자 만들기.

class User {
  constructor(userId, name) {
    (this.userId = userId), (this.name = name);
  }
}

class UserDouble extends User {
  constructor(newUserId, newInfo) {
    super(newUserId);
    // 새로운 정보 추가
    this.newInfo = newInfo;
  }
}

// FROM 객체 To 배열

const user1 = new UserDouble("1", "새로운 정보 1");
const user2 = new UserDouble("2", "새로운 정보 2");

console.log(user1);
console.log(user2);
