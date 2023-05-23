// 데이터 불변성 Immutability

// 원시 데이터 : 불변성 > 데이터의 생김새가 같으면 같은 데이터라고 생각하면 된다.

let a = 2;
let b = 4;
console.log(a, b, a === b);

b = a;
console.log(a, b, a === b);

a = 7;
console.log(a, b, a === b);

let c = 1;
console.log(b, c, b === c);

// 참조형 데이터

let d = { k: 1 };
let e = { k: 1 };
console.log(d, e, d === e);

d.k = 7;
e = d;
console.log(d, e, d === e);

d.k = 2;
console.log(d, e, d === e);

let f = e;
console.log(d, e, f, d === f); // true

d.k = 9;
console.log(d, e, f, d === f);
