// 이름을 없애도 실행 가능하다.

export default function (/*getType*/ data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
