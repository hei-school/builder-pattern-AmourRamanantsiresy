import { SportEngine } from "../engine/sport";
import { SuvEngine } from "../engine/suv";
import { CarBuilderInterface } from "./types";

export class CarDirector {
  public makeSuv(builder: CarBuilderInterface) {
    builder.setEngine(new SuvEngine());
  }
  public makeSportsCar(builder: CarBuilderInterface) {
    builder.setEngine(new SportEngine());
  }
  constructor() {}
}
