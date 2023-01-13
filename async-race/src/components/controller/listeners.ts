import buildPage from '../buildPage';
import getData from '../../utils/getData';
import Data from '../../interfaces/Data.type';
import persistentStorage from '../../utils/persistentStorage';

async function indexPage(): Promise<void> {
  const isData: string | null = localStorage.getItem('data');
  if (isData) {
    document.addEventListener('DOMContentLoaded', buildPage);
  } else {
    const data: Data = await getData();
    persistentStorage.setItem('data', data);
    document.addEventListener('DOMContentLoaded', buildPage);
  }
}

indexPage();
