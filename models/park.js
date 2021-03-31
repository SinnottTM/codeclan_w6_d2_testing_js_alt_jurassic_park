const Park = function (name, ticket_price) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
    let index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.findMostVisitedDino = function () {
    let totalVisitors = 0;
    let mostVisitedDinosaur;
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > totalVisitors) {
            totalVisitors = dinosaur.guestsAttractedPerDay;
            mostVisitedDinosaur = dinosaur;
        };
    };
    return mostVisitedDinosaur;
};

Park.prototype.findAllSpecies = function (species) {
    foundDinosaurs = []
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            foundDinosaurs.push(dinosaur);
        };
    };
    return foundDinosaurs;

};

Park.prototype.totalVisitorsPerDay = function () {
    let totalVisitors = 0;
    for (let dinosaur of this.dinosaurs) {
        totalVisitors += dinosaur.guestsAttractedPerDay
    }
    return totalVisitors
}

Park.prototype.totalVisitorsPerYear = function () {
    let totalVisitors = this.totalVisitorsPerDay();
    totalVisitors = totalVisitors * 365;
    return totalVisitors;
}

Park.prototype.totalRevenuePerYear = function () {
    let totalRevenue = this.totalVisitorsPerYear() * this.ticket_price
    return totalRevenue
}

Park.prototype.removeBySpecies = function (species) {
    const newDinosaurs = [];
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species !== species) {
            newDinosaurs.push(dinosaur);
        }
    }
    this.dinosaurs = newDinosaurs;
}

Park.prototype.numberOfDinosaursByDiet = function () {
    const numberOfDinosaursByDiet = {};
}

Park.prototype.numberOfDinosaursByDiet = function () {
    const numberOfDinosaursByDiet = {};

    for (const dinosaur of this.dinosaurs) {
        if (numberOfDinosaursByDiet[dinosaur.diet]) {
            numberOfDinosaursByDiet[dinosaur.diet] += 1;
        }
        else {
            numberOfDinosaursByDiet[dinosaur.diet] = 1;
        }
    }

    return numberOfDinosaursByDiet;
}

module.exports = Park;