class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle("운송수단", 2);
console.log(myVehicle);

// 확장 (상속)
// super는 Vehicle 의미한다.

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}

const myBicycle = new Bicycle("삼천리 자전거", 2);
const daughterBicycle = new Bicycle("세발 자전거", 3);

console.log(myBicycle);
console.log(daughterBicycle);

// 확장 (상속)
// super는 Vehicle 의미한다.

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);

    // 추가적인 부분은 추가해서 이용하기.
    this.license = license;
  }
}

const myCar = new Car("벤츠", 4, true);
const daughterCar = new Car("포르쉐", 4, false);

console.log(myCar);
console.log(daughterCar);
