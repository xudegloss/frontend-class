const objects = [{ A: 1 }, { B: 2 }];

const shallowCopy = Object.assign([], objects);

console.log(shallowCopy === objects); // false

// 데이터 안에 있는 참조 데이터까지 모두 복사된 것이 아니기 때문에
console.log(shallowCopy[0] === objects[0]); // true

import _ from "lodash"; // 깊은 복사

const deepCopy = _.cloneDeep(objects); // 깊은 복제

console.log(deepCopy === objects); // false
console.log(deepCopy[0] === objects[0]); // false
