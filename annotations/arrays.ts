const carMakers: string[    ] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f23"], ["sdfsdf", "sdfdf"]];


// Help with inference when extracting values

const MyCar = carMakers.pop();


// Prevent incompatible values
carMakers.push(100); 

carMakers.map((car: string): string => {
    return car.toUpperCase();
})

const impDates: (Date | string)[] = [new Date(), 'sfg'];

impDates.push('dfsgfdsg')
impDates.push(1000) // incompatible

type User = {
    name: string,
    isActie: boolean
}

const allUsers: User[] = []
allUsers.push({name:'', isActie: false})
export {}