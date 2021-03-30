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

Park.prototype.findMostVisitors = function () {
    let maxVistors = 0;
    let visitedDinosaur;
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > maxVistors) {
            maxVistors = dinosaur.guestsAttractedPerDay;
            visitedDinosaur = dinosaur;
        };
    };
    return visitedDinosaur;
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

module.exports = Park;