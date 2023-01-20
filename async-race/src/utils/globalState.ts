// import * as api from '../api/api';
// import buildPage from '../components/buildPage';
// import ReturnObj from '../interfaces/ReturnObj';
// import Constant from '../models/Constant';
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
};

export default globalState;

// try {
//   const dataCars: ReturnObj | null =
//   if (dataCars && (dataCars.count || dataCars.count === 0)) {
//     const { count, data } = dataCars;
//   }
// } catch (err) {
