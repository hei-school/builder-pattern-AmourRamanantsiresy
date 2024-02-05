import * as assert from "assert";
import { CarBuilder } from "./car/builder";
import { CarInterface, CarManualInterface } from "./car/types";
import { SportEngine } from "./engine/sport";
import { NoneEngine } from "./engine/none";
import { CarManualBuilder } from "./car/manual-builder";
import { SuvEngine } from "./engine/suv";
import { CarDirector } from "./car/director";

describe("Test builder pattern with creation car and car manual", () => {
  test("Test car builder", () => {
    const builder = new CarBuilder();
    const sportEngine = new SportEngine();

    builder.setEngine(sportEngine);
    builder.setSeats(2);
    builder.setGPS();

    const car = builder.build();

    const expectedCar: CarInterface = {
      engine: new SportEngine(),
      gps: true,
      seats: 2,
      tripComputer: false,
    };

    assert.deepEqual(car, expectedCar);
    builder.reset();

    const carVoid = builder.build();
    const expectedCarVoid: CarInterface = {
      seats: 0,
      engine: new NoneEngine(),
      tripComputer: false,
      gps: false,
    };

    assert.deepEqual(carVoid, expectedCarVoid);
  });

  test("Test car manual builder", () => {
    const carManual = new CarManualBuilder();
    const suvEngine = new SuvEngine();

    carManual.setEngine(suvEngine);
    carManual.setSeats(2);
    carManual.setGPS();

    const car = carManual.build();

    const expectedCarManual: CarManualInterface = {
      engine: new SuvEngine(),
      gps: true,
      seats: 2,
      tripComputer: false,
    };

    assert.deepEqual(car, expectedCarManual);
    carManual.reset();

    const carManualVoid = carManual.build();
    const expectedCarVoid: CarManualInterface = {
      seats: 0,
      engine: new NoneEngine(),
      tripComputer: false,
      gps: false,
    };

    assert.deepEqual(carManualVoid, expectedCarVoid);
  });

  test("Test car director", () => {
    const director = new CarDirector();
    const carManualBuilder = new CarManualBuilder();
    const carBuilder = new CarBuilder();

    director.makeSuv(carManualBuilder);
    carManualBuilder.setSeats(2);
    carManualBuilder.setGPS();

    const carManual = carManualBuilder.build();

    const expectedCarManual: CarManualInterface = {
      engine: new SuvEngine(),
      gps: true,
      seats: 2,
      tripComputer: false,
    };

    assert.deepEqual(carManual, expectedCarManual);

    director.makeSportsCar(carBuilder);
    carBuilder.setSeats(2);
    carBuilder.setGPS();

    const car = carBuilder.build();

    const expectedCar: CarInterface = {
      engine: new SportEngine(),
      gps: true,
      seats: 2,
      tripComputer: false,
    };

    assert.deepEqual(car, expectedCar);
  });
});
