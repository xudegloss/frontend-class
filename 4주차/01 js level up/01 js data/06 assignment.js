// 구조 분해 할당 = 비구조화 할당

const user = {
  name: "Anne",
  age: 26,
  email: "xudegloss@gmail.com",
};

// 필요한 부분만 가져와도 된다.

const { name: anne, age, email, address = "Korea" } = user; // user의 내용을 구조 분해하여 원하는 속성들만 꺼내서 사용하기.

console.log(`사용자의 이름은 ${anne}입니다.`);
console.log(`${anne}의 나이는 ${age}세입니다.`);
console.log(`${anne}의 이메일 주소는 ${email}입니다.`);
console.log(address); // Korea : 기본값을 지정하여 사용할 수 있다.
// 만약에 위에 address가 USA 라면, 무시 되고 Korea로 지정된다.

// (객체) 인덱싱 방법으로 꺼내올 수도 있다.

console.log(user.name, user.age, user.email);
console.log(user["name"], user["age"], user["email"]);

// (배열) 구조 분해 할당 가능하다.

const fruits = ["Apple", "Banana", "Cherry"];
// const [a, b, c, d = "Grape"] = fruits; // 데이터 종류에 맞게 기호 이용하기.
// console.log(a, b, c, d);

const [, b] = fruits; // 순서대로 출력되기 때문에, 쉼표로 순서를 꼭 표기해야 한다.
console.log(b);
