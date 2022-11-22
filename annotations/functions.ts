const add = (a: number, b: number): number => {
  return a + b;
};

const sub = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const loginsfg = (name: string, email: string, is: boolean = false): void => {};

function getres(val: string): boolean | number {
  if (val == "fg") {
    return 43;
  } else {
    return true;
  }
}

loginsfg("sdf", "sdf");

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);



// return object

function retObj(): {name: string, price: number}{
    return {name: 'sdf', price: 3} 
}