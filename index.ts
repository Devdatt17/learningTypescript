function morningGreet(person: string, date: Date) {
    return `Hello ${person} Today is ${date.toDateString()}`
}

// return type anotations
function getAnyNumber() : number {
    return 14
}

// optional properties -> use ?:
function printName(firstName: string, lastName: string, middleName?: string) {
    if(middleName) {
        return `Welcome, ${firstName} ${middleName} ${lastName}`
    } else {
    return `Hello, ${firstName} ${lastName}`
    }
}

// function that accepts only certain set of known values
function printText(s: string, name: "Dev" | "Pan" | "GST") {
    return `${s} for ${name}`
}

morningGreet("Dev", new Date())
getAnyNumber();
console.log(printName("Devdatt", "Pandit", "Ganesh"))
printText("Pancake", "Dev")