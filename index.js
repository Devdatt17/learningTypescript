function morningGreet(person, date) {
    return "Hello ".concat(person, " Today is ").concat(date.toDateString());
}
morningGreet("Dev", new Date());
