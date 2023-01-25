import { raceTitle, racePage } from '../components/elements/garage/createTitlePage';
import { countText } from '../components/elements/createPageButtons';
import Constant from '../models/Constant';

export default function changeTitlePage(count?: number, page?: number) {
  if (page && count) {
    raceTitle.innerText = `GARAGE(${count})`;
    racePage.innerText = `PAGE #${page}`;
    countText.innerText = `${page}/${Math.ceil(count / Constant.SEVEN)}`;
    return;
  }
  if (page) racePage.innerText = `PAGE #${page}`;
  if (count || count === Constant.ZERO) raceTitle.innerText = `GARAGE(${count})`;
}
