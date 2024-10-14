"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary: function () {
        return "".concat(this.name, " : ").concat(this.year, " : ").concat(this.broken);
    },
};
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
