function morningGreet(person, date) {
    return "Hello ".concat(person, " Today is ").concat(date.toDateString());
}
// return type anotations
function getAnyNumber() {
    return 14;
}
// optional properties -> use ?:
function printName(firstName, lastName, middleName) {
    if (middleName) {
        return "Welcome, ".concat(firstName, " ").concat(middleName, " ").concat(lastName);
    }
    else {
        return "Hello, ".concat(firstName, " ").concat(lastName);
    }
}
// function that accepts only certain set of known values
function printText(s, name) {
    return "".concat(s, " for ").concat(name);
}
morningGreet("Dev", new Date());
getAnyNumber();
console.log(printName("Devdatt", "Pandit", "Ganesh"));
printText("Pancake", "Dev");
