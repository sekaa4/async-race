import buildPage from '../buildPage';
import { getCars } from '../../api/api';
// import Data from '../../interfaces/Data.type';
// import persistentStorage from '../../utils/persistentStorage';

(async function indexPage(): Promise<void> {
  const isData: string | null = localStorage.getItem('data');
  if (isData) {
    window.addEventListener('DOMContentLoaded', buildPage);
  } else {
    await getCars();
    buildPage();
  }
})();
