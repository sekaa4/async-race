import GlobalState from '../interfaces/GlobalState';
import Constant from '../models/Constant';

const globalState: GlobalState = {
  carsPage: 1,
  winnersPage: 1,
  carsData: null,
  carsWinners: null,
  carsCount: 0,
  winnersCount: 0,
  idSelectedCar: null,
  inputUpdate: { name: '', color: '' },
  inputCreate: { name: '', color: '' },
  buttonsStartA: [],
  buttonsStartB: [],
  carsOnTrack: [],
  engineCarsStatus: new Map(),
  isRace: false,
  isAllCarsReady: false,
  view: `${Constant.GARAGE}`,
  sortBy: null,
  sortOrder: null,
  animation: [],
  baseUrl: `${Constant.BASEURL}`,
};

export default globalState;
