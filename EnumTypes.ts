// normal enums
enum Status {
    Success = 100,
    Pending = 300,
    Failed = 400
}

console.log(Status.Success)

// const enum's
const enum Car {
    name = "Audi",
    model = "R8"
}

console.log(Car.name)

// Discriminated Union
type Shape = {
    kind: 'circle',
    radius: number
} | {
    kind: 'rectangle',
    length: number,
    width: number
}

function area (params: Shape)  {
    return params.kind==="circle" ? Math.PI * params.radius * params.radius: 2 * params.length * params.width;
}

console.log(area({ kind: 'circle', radius: 6 }))