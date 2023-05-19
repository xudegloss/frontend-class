export default function getType(data) {
  // 메소드 체이닝
  return Object.prototype.toString.call(data).slice(8, -1);
}
