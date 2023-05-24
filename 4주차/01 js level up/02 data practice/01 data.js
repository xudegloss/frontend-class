import _ from "lodash"; // From node_modules

// 이름을 변경해도 문제 없다.

import checkType from "./getType"; // getType.js
// import { random, user as userChange } from "./getRandom"; // getRandom.js
// import { user } from "./getRandom";
import * as R from "./getRandom"; // 한 번에 가져오는 방법

console.log(_.camelCase("the hello world"));
console.log(checkType([1, 2, 3]));

// console.log(random(), random());
// console.log(userChange);

console.log(R.random(), R.random());
console.log(R.user);
console.log(R.default); // default로 가져오기.
