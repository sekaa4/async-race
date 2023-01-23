import Constant from '../models/Constant';
import Data from './Data.type';
import DataWinObject from './DataWinObject';
import StatusCar from './StatusCar';
import View from './View.type';

interface GlobalState {
  carsPage: number;
  winnersPage: number;
  carsData: null | Data;
  carsWinners: null | DataWinObject[];
  carsCount: number;
  winnersCount: number;
  idSelectedCar: null | number;
  inputUpdate: { name: string; color: string };
  inputCreate: { name: string; color: string };
  buttonsStartA: { id: number; status: boolean }[];
  buttonsStartB: { id: number; status: boolean }[];
  carsOnTrack: { id: number; positionLeft: string }[];
  engineCarsStatus: Map<number, StatusCar>;
  isRace: boolean;
  isAllCarsReady: boolean;
  view: View;
  sortBy: null | `${Constant.SORT_BY_WINS}`;
  sortOrder: null | `${Constant.SORT_BY_ORDER}`;
  animation: [];
}

export default GlobalState;
