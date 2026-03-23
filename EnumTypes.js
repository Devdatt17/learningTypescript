// normal enums
var Status;
(function (Status) {
    Status[Status["Success"] = 100] = "Success";
    Status[Status["Pending"] = 300] = "Pending";
    Status[Status["Failed"] = 400] = "Failed";
})(Status || (Status = {}));
console.log(Status.Success);
console.log("Audi" /* Car.name */);
function area(params) {
    return params.kind === "circle" ? Math.PI * params.radius * params.radius : 2 * params.length * params.width;
}
console.log(area({ kind: 'circle', radius: 6 }));
