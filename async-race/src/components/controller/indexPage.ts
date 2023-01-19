import buildPage from '../buildPage';
import { getCars, getWinners } from '../../api/api';
import Constant from '../../models/Constant';
import ReturnObj from '../../interfaces/ReturnObj';
import globalState from '../../utils/store';

(async function indexPage(): Promise<void> {
  try {
    const dataCars: ReturnObj = await getCars([
      { key: '_limit', value: `${Constant.SEVEN}` },
      { key: '_page', value: `${globalState.carsPage}` },
    ]);

    const dataWinners: ReturnObj = await getWinners([
      { key: '_limit', value: `${Constant.SEVEN}` },
      { key: '_page', value: `${globalState.winnersPage}` },
    ]);

    const { data: carsData, count: carsCount } = dataCars;
    const { data: carsWinners, count: winnersCount } = dataWinners;

    if (globalState.view === 'garage' && (carsCount || carsCount === 0)) {
      globalState.carsData = carsData;
      globalState.carsCount = carsCount;
      buildPage(carsCount, carsData, globalState.carsPage);
      return;
    }

    if (globalState.view === 'winners' && (winnersCount || winnersCount === 0)) {
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
