// Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method added to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar Constructor
function SportsCar(make, model, topSpeed) {
  // Call Car constructor
  Car.call(this, make, model);

  this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Reset constructor
SportsCar.prototype.constructor = SportsCar;

// Method added to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Make constructors global
window.Car = Car;
window.SportsCar = SportsCar;

// Example Usage
const car = new SportsCar("Ferrari", "Testarossa", 200);

console.log(car.getMakeModel()); // Ferrari Testarossa
console.log(car.getTopSpeed());  // 200