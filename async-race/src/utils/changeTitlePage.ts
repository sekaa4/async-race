import { raceTitle, racePage } from '../components/elements/garage/createTitlePage';
import { countText } from '../components/elements/createPageButtons';
import Constant from '../models/Constant';

export default function changeTitlePage(count?: number, page?: number) {
  if (page && count) {
    raceTitle.innerText = `${Constant.GARAGE}(${count})`;
    racePage.innerText = `${Constant.MAINPAGE} #${page}`;
    countText.innerText = `${page}/${Math.ceil(count / Constant.SEVEN)}`;
    return;
  }
  if (page) racePage.innerText = `${Constant.MAINPAGE} #${page}`;
  if (count || count === Constant.ZERO) raceTitle.innerText = `${Constant.GARAGE}(${count})`;
}
