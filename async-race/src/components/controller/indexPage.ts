import buildPage from '../buildPage';
import { getCars } from '../../api/api';
import Constant from '../../models/Constant';
import ReturnObj from '../../interfaces/ReturnObj';

(async function indexPage(): Promise<void> {
  try {
    const dataCars: ReturnObj | null = await getCars([
      { key: '_limit', value: `${Constant.SEVEN}` },
      { key: '_page', value: `${Constant.ONE}` },
    ]);
    if (dataCars && (dataCars.count || dataCars.count === 0)) {
      const { count, data } = dataCars;
      buildPage(count, data, Constant.ONE);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Cannot get data, mb server shot down');
  }
})();
