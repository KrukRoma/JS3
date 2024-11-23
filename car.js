const car = {
    brand: "Audi",
    model: "RS6",
    year: 2024,
    averageSpeed: 100, 

    displayInfo() {
        document.write(`Brand: ${this.brand}<br>`);
        document.write(`Model: ${this.model}<br>`);
        document.write(`Year: ${this.year}<br>`);
        document.write(`Average Speed: ${this.averageSpeed} km/h<br>`);
    },

    calculateTravelTime(distance) {
        const travelTimeWithoutBreaks = distance / this.averageSpeed; 
        const breaks = Math.floor(travelTimeWithoutBreaks / 4); 
        const totalTime = travelTimeWithoutBreaks + breaks; 

        return totalTime;
    }
};

car.displayInfo();

const distance = 500;
const time = car.calculateTravelTime(distance);
document.write(`Time to cover ${distance} km: ${time.toFixed(2)} hours (including breaks)<br>`);
