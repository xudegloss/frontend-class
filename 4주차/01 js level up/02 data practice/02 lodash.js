import _ from "lodash";

const userA = [
  { userId: "1", name: "Anne" },
  { userId: "2", name: "James" },
];

const userB = [
  { userId: "1", name: "Anne" },
  { userId: "3", name: "Neo" },
];

const usersC = userA.concat(userB);
console.log("concat", usersC);

// 이미 중복이 발생한 데이터에서 중복 제거하는 방법 : uniqBy

console.log("uniqBy", _.uniqBy(usersC, "userId")); // userId 기준으로 고유한 값만 반환하기.

// 중복이 발생할 가능성이 있는 데이터에서 중복 제거하는 방법 : unionBy

const usersD = _.unionBy(userA, userB, "userId"); // userId 기준으로 합집합 반환하기.
console.log("unionBy", usersD);

/*

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

*/

const users = [
  { userId: "1", name: "Anne" }, // 0
  { userId: "2", name: "Neo" }, // 1
  { userId: "3", name: "Amy" }, // 2
  { userId: "4", name: "James" }, // 3
  { userId: "5", name: "J" }, // 4
];

// find, findIndex

const foundUser = _.find(users, { name: "Amy" });
const foundUserIndex = _.findIndex(users, { name: "Amy" });

console.log(foundUser);
console.log(foundUserIndex);

// remove

_.remove(users, { name: "J" });
console.log(users);
