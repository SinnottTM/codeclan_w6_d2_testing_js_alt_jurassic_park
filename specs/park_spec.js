
const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50);
    dinosaur = new Dinosaur("T-rex", "carnivore", 100);
    dinosaur2 = new Dinosaur("Triceratops", "omnivore", 80);
    dinosaur3 = new Dinosaur("Allosaurus", "carnivore", 20);
    dinosaur4 = new Dinosaur("Ultrasauros", "omnivore", 50);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection, first attempt', function () {
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur])
  });

  it('should be able to add a dinosaur to its collection, alternative', function () {
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurs[0].species;
    assert.deepStrictEqual(actual, "T-rex")
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur);
    const actual = park.dinosaurs[0].species;
    assert.deepStrictEqual(actual, "Triceratops")
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.findMostVisitedDino();
    assert.strictEqual(actual, dinosaur);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    dinosaur5 = new Dinosaur("Allosaurus", "carnivore", 20);
    park.addDinosaur(dinosaur5);
    const actual = park.findAllSpecies("Allosaurus");
    assert.deepStrictEqual(actual, [dinosaur3, dinosaur5]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 250)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 91250)
  });


  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 4562500)
  });

});