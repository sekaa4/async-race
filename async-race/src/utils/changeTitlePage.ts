import { raceTitle, racePage } from '../components/elements/garage/createTitlePage';

export default function changeTitlePage(count?: number, page?: number) {
  if (count && page) {
    raceTitle.innerText = `GARAGE(${count})`;
    racePage.innerText = `PAGE #${page}`;
  } else if (page) racePage.innerText = `PAGE #${page}`;
  else if (count) raceTitle.innerText = `GARAGE(${count})`;
}
