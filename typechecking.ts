// Unkown basically says I don't trust it. Prove it.
let newvalue: unknown = "Hello"
// newvalue.toUpperCase -> shows error
// newvalue.length -> still shows error

// never is used when value is not possible
// let x:never = 10 -> Hence this will show error as never means no value possible

// Interface
interface User {
    id: number;
    name: string;
}

// extending interfaces
interface Admin extends User {
    role: "Admin" | "Superadmin"
}


// generics
function printValue<T extends { length: number }> (value: T): T {
    return value
}

printValue("Dev")
printValue([12,56])

