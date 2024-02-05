import { NoneEngine } from "../engine/none";
import { EngineInterface } from "../engine/types";
import { CarBuilderInterface, CarManualInterface } from "./types";

const defaultCarManual = {
  seats: 0,
  engine: new NoneEngine(),
  tripComputer: false,
  gps: false,
};

export class CarManualBuilder implements CarBuilderInterface {
  private carManual: CarManualInterface = defaultCarManual;

  constructor() {
    this.reset();
  }

  reset() {
    this.carManual = { ...defaultCarManual };
  }

  setSeats(value: number) {
    this.carManual.seats = value;
  }

  setEngine(engine: EngineInterface) {
    this.carManual.engine = engine;
  }

  setTripComputer() {
    this.carManual.tripComputer = true;
  }

  setGPS() {
    this.carManual.gps = true;
  }

  build() {
    const builtCarManual = this.carManual;
    this.reset();
    return builtCarManual;
  }
}
