

type User = {
    readonly id: string
    name: string
    email: string
    isActive: boolean
    cred?: number // optional
}

let myuser: User = {
    id: 'wr324',
    name: 'sdf',
    email: 'sdf',
    isActive: true
}
 
myuser.id = 'sd' // not possible



// compine

type cardNumber = {
    cardnumber: number
}

type cardDate = {
    cardDate?: string
}

type cardDetails = cardDate & cardNumber & {
    cvv: number
}

let card: cardDetails = {
    // cardDate: '3-gfhg',
    cardnumber: 345354,
    cvv: 34
}