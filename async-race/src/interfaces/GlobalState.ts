// import Constant from '../models/Constant';
import Constant from '../models/Constant';
import Data from './Data.type';
import StatusCar from './StatusCar';

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
  buttonsStartA: { id: number; status: boolean }[];
  buttonsStartB: { id: number; status: boolean }[];
  carsOnTrack: { id: number; positionLeft: string }[];
  engineCarsStatus: Map<number, StatusCar>;
  isRace: boolean;
  isAllCarsReady: boolean;
  view: `${Constant.GARAGE}` | `${Constant.WINNERS}`;
  sortBy: null | `${Constant.SORT_BY_WINS}`;
  sortOrder: null | `${Constant.SORT_BY_ORDER}`;
  animation: [];
}

export default GlobalState;
