import { CarBuilder } from "./car/builder";
import { CarDirector } from "./car/director";
import { CarManualBuilder } from "./car/manual-builder";

const main = () => {
  const director = new CarDirector();
  const carManualBuilder = new CarManualBuilder();
  const carBuilder = new CarBuilder();

  director.makeSuv(carManualBuilder);
  carManualBuilder.setSeats(2);
  carManualBuilder.setGPS();

  const carManual = carManualBuilder.build();

  director.makeSportsCar(carBuilder);
  carBuilder.setSeats(2);
  carBuilder.setGPS();

  const car = carBuilder.build();

  console.log(car, carManual);
};

main();
