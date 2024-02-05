import { NoneEngine } from "../engine/none";
import { EngineInterface } from "../engine/types";
import { CarBuilderInterface, CarInterface } from "./types";

const defaultCar = {
  seats: 0,
  engine: new NoneEngine(),
  tripComputer: false,
  gps: false,
};

export class CarBuilder implements CarBuilderInterface {
  private car: CarInterface = defaultCar;

  constructor() {
    this.reset();
  }

  reset() {
    this.car = { ...defaultCar };
  }

  setSeats(value: number) {
    this.car.seats = value;
  }

  setEngine(engine: EngineInterface) {
    this.car.engine = engine;
  }

  setTripComputer() {
    this.car.tripComputer = true;
  }

  setGPS() {
    this.car.gps = true;
  }

  build() {
    const builtCar = this.car;
    this.reset();
    return builtCar;
  }
}
