class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("peep");
  }
}

const vehicle = new Vehicle("orange");
// console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string){
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }

  startDriving(): void {
    this.drive();
  }

  startHonking(): void {
    this.honk();
  }
}

const car = new Car(4,'black');
car.startDriving();
car.startHonking();
console.log(car.color);

export {};
