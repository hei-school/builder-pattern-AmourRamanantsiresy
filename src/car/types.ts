import { EngineInterface } from "../engine/types";

export interface CarBuilderInterface {
  reset: () => void;
  setSeats: (value: number) => void;
  setEngine: (engin: EngineInterface) => void;
  setTripComputer: () => void;
  setGPS: () => void;
  build: () => CarInterface | CarManualInterface;
}

export interface CarInterface {
  seats: number;
  engine: EngineInterface;
  tripComputer: boolean;
  gps: boolean;
}

export interface CarManualInterface extends CarInterface {}
