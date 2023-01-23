import buildPage from '../buildPage';
import { getCars } from '../../api/api';
import Constant from '../../models/Constant';
import ReturnObj from '../../interfaces/ReturnObj';
import globalState from '../../utils/globalState';

(async function indexPage(): Promise<void> {
  try {
    const dataCars: ReturnObj = await getCars([
      { key: `${Constant.LIMIT}`, value: `${Constant.SEVEN}` },
      { key: `${Constant.PAGE}`, value: `${globalState.carsPage}` },
    ]);

    const { data: carsData, count: carsCount } = dataCars;
    if (carsCount || carsCount === Constant.ZERO) {
      globalState.carsData = carsData;
      globalState.carsCount = carsCount;
      buildPage(carsCount, carsData, globalState.carsPage);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Cannot get data, mb server shot down');
  }
})();
