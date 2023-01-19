// import * as api from '../api/api';
// import buildPage from '../components/buildPage';
// import ReturnObj from '../interfaces/ReturnObj';
// import Constant from '../models/Constant';
import GlobalState from '../interfaces/GlobalState';

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
  buttonSelected: [],
  carsOnTrack: [],
  engineCarsStatus: new Map(),
  isRace: false,
  isAllCarsReady: false,
  view: 'garage',
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
//   // eslint-disable-next-line no-console
//   console.log('Cannot get data, mb server shot down');
// }
