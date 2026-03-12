function morningGreet(person: string, date: Date) {
    return `Hello ${person} Today is ${date.toDateString()}`
}

morningGreet("Dev", new Date())