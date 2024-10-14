"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log("beep");
    };
    return Vehicle;
}());
var vehicle = new Vehicle("orange");
console.log(vehicle.color);
