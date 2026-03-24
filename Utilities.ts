// Partial <T> :- Makes all properties optional
/* Just like this
type User = {
    id?: string;
    name?: string;
    email?: string;
}
*/

type User = {
    id: string;
    name: string;
    email: string;
}

function getUserDetails(user: Partial<User>) {
    return `Name: ${user.name} | Email: ${user.email}`
}

console.log(getUserDetails({ name: "Dev", email: "devdattpandit99@gmail.com" }))

// Required makes all properties mandatory
type name = {
    name: string
}

function getName(name: Required<name>): string | object {
    return name;
}

console.log(getName({name: "Dev"}))

// Readonly makes properties immutable, so they cannot be assigned any value
type car = {
    model: string;
    company: string;
}

function getCar(productionCar: Readonly<car>) {
    return `${productionCar.company} ${productionCar.model}`
}

console.log(getCar({ model: 'R8', company: 'Audi' }))

// Pick is used for selecting specific properties from the type
type pickUser = {
    pickName: string;
    pickId: string;
}

type pickPerson = Pick<pickUser, "pickName">

const previewPick: pickPerson = {
    pickName: 'Man',
}

console.log(previewPick)

// Omit ignores the pickUser
// type pickSecondPerson = Omit<pickUser, "pickId">

// const showPick: pickSecondPerson = {
//     pickId: 'new'
// }

// console.log(showPick)

// Record is used to create a new type out of existing type
type userRole = "Admin" | "User" | "Guest"

type newUser = Record<userRole, string>

const permissions: newUser = {
    Admin: "ALLOWED",
    User: "ALLOWED",
    Guest: "NOTALLOWED"
}

console.log(permissions.Admin)

// Exclude removes the type from the type union

type networks = "Airtel" | "VI" | "Jio"

type excludeNetwork = Exclude<networks, "VI">

const networkUser: excludeNetwork = "Jio"
// const networkUser1: excludeNetwork = "VI" -> this will give you error

// Extract, gives only matching type
type status = "success" | "pending" | "failure"

type newStatus = Extract<status, "success" | "failure">

const checkStatus: newStatus = "success"
// const anotherCheckStatus: newStatus = "pending" -> this gives us error

// NonNullable, removes null and undefined

type vehicle = {
    vehicleType: string,
    fuelType?: string | null,
    pucCheck?: boolean | undefined
}

// here it will pickup fuelType as string and remove null
// same goes for pucCheck
type showroomVehicle = NonNullable<vehicle>

const displayCar: showroomVehicle = {
    vehicleType: "car",
}

console.log(displayCar)

// ReturnType, extracts the returntype of a function

function getDeviceDetails (modelName: string, deviceCompany: string, availableRam: number, headphoneJack: boolean) {
    return {
        mobileName: `${deviceCompany} ${modelName}`,
        specification: `${availableRam} | Headphone Jack: ${headphoneJack? "Yes": "No"}`
    }
}

type showroomDevice = ReturnType<typeof getDeviceDetails>

// Parameters, extracts the parameters of a function

type getModelName = Parameters<typeof getDeviceDetails>
let args: getModelName = ["11r", "OnePlus", 12, true]
console.log(getDeviceDetails(...args))

const mobileDevice: showroomDevice = {
    mobileName: "Apple Iphone 17 pro",
    specification: "12 | Headphone Jack: Yes"
};

console.log(mobileDevice)

