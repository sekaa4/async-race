// import Constant from '../models/Constant';
import Data from './Data.type';

interface GlobalState {
  carsPage: number;
  winnersPage: number;
  carsData: null | Data;
  carsWinners: null | Data;
  carsCount: number;
  winnersCount: number;
  idSelectedCar: null | number;
  inputUpdate: { name: string; color: string };
  inputCreate: { name: string; color: string };
  buttonsStartA: [];
  buttonsStartB: [];
  buttonSelected: [];
  carsOnTrack: [];
  engineCarsStatus: Map<number, string>;
  isRace: boolean;
  isAllCarsReady: boolean;
  view: 'garage' | 'winners';
  sortBy: null | 'sortByWins';
  sortOrder: null | 'sortByOrder';
  animation: [];
}

export default GlobalState;
