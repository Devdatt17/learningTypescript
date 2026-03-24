// Partial <T> :- Makes all properties optional
/* Just like this
type User = {
    id?: string;
    name?: string;
    email?: string;
}
*/
function getUserDetails(user) {
    return "Name: ".concat(user.name, " | Email: ").concat(user.email);
}
console.log(getUserDetails({ name: "Dev", email: "devdattpandit99@gmail.com" }));
function getName(name) {
    return name;
}
console.log(getName({ name: "Dev" }));
function getCar(productionCar) {
    return "".concat(productionCar.company, " ").concat(productionCar.model);
}
console.log(getCar({ model: 'R8', company: 'Audi' }));
var previewPick = {
    pickName: 'Man',
};
console.log(previewPick);
var permissions = {
    Admin: "ALLOWED",
    User: "ALLOWED",
    Guest: "NOTALLOWED"
};
console.log(permissions.Admin);
var networkUser = "Jio";
var checkStatus = "success";
var displayCar = {
    vehicleType: "car",
};
console.log(displayCar);
// ReturnType, extracts the returntype of a function
function getDeviceDetails(modelName, deviceCompany, availableRam, headphoneJack) {
    return {
        mobileName: "".concat(deviceCompany, " ").concat(modelName),
        specification: "".concat(availableRam, " | Headphone Jack: ").concat(headphoneJack ? "Yes" : "No")
    };
}
var args = ["11r", "OnePlus", 12, true];
console.log(getDeviceDetails.apply(void 0, args));
var mobileDevice = {
    mobileName: "Apple Iphone 17 pro",
    specification: "12 | Headphone Jack: Yes"
};
console.log(mobileDevice);
