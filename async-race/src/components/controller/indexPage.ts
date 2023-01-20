import buildPage from '../buildPage';
import { getCars, getWinners } from '../../api/api';
import Constant from '../../models/Constant';
import ReturnObj from '../../interfaces/ReturnObj';
import globalState from '../../utils/globalState';

(async function indexPage(): Promise<void> {
  try {
    const dataCars: ReturnObj = await getCars([
      { key: `${Constant.LIMIT}`, value: `${Constant.SEVEN}` },
      { key: `${Constant.PAGE}`, value: `${globalState.carsPage}` },
    ]);

    const dataWinners: ReturnObj = await getWinners([
      { key: `${Constant.LIMIT}`, value: `${Constant.SEVEN}` },
      { key: `${Constant.PAGE}`, value: `${globalState.winnersPage}` },
    ]);

    const { data: carsData, count: carsCount } = dataCars;
    const { data: carsWinners, count: winnersCount } = dataWinners;

    if (globalState.view === Constant.GARAGE && (carsCount || carsCount === 0)) {
      globalState.carsData = carsData;
      globalState.carsCount = carsCount;
      buildPage(carsCount, carsData, globalState.carsPage);
      return;
    }

    if (globalState.view === Constant.WINNERS && (winnersCount || winnersCount === 0)) {
      globalState.carsWinners = carsWinners;
      globalState.winnersCount = winnersCount;
      buildPage(winnersCount, carsWinners, globalState.carsPage);
      return;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Cannot get data, mb server shot down');
  }
})();
