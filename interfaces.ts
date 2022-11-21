interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000 ,
  broken: true,
  summary(): string {
    return `name is ${this.name}`
  }
};

const drinK = {
    color: 'borwn',
    sugar: 30,
    summary(): string {
        return `my drink has ${this.sugar} amount of sugar `
    }
}

const printvehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
};

printvehicle(oldCivic);
