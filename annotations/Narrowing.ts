function detectType(val: number | string) {
    if (typeof val === 'string') {
       return val.toLowerCase()
    }

    return val + 3
}


function provideId(id: string | null) {
    if (id) {
        console.log('give id');
        return
    }

    id?.to LowerCase()
}
