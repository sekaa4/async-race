import ReturnObjWinners from '../../interfaces/ReturnObjWinners';
import TableWinnerDataObj from '../../interfaces/TableWinnerObj';
import Constant from '../../models/Constant';
import createWinnersData from '../../utils/createWinnersData';
import globalState from '../../utils/globalState';
import { createContainTable } from '../elements/winners/createContainTable';
import { wrapperWinnersTable } from '../elements/winners/createTableWinners';
import controllerWinnersSection from './ControllerWinnersSection';

export default async function handlerHeaderTableLine(e: MouseEvent) {
  const { target, currentTarget } = e;
  const curPage: number = globalState.winnersPage;
  let getData: ReturnObjWinners | null = null;
  if (target instanceof HTMLSpanElement && currentTarget instanceof HTMLDivElement) {
    switch (target.innerText) {
      case Constant.WINS_TEXT: {
        target.nextElementSibling?.classList.remove(Constant.ASC, Constant.DESC);
        if (target.classList.contains(Constant.ASC)) {
          target.classList.remove(Constant.ASC);
          target.classList.add(Constant.DESC);
        } else if (target.classList.contains(Constant.DESC)) {
          target.classList.remove(Constant.DESC);
          target.classList.add(Constant.ASC);
        } else target.classList.add(Constant.ASC);

        if (target.classList.contains(Constant.ASC)) {
          getData = await controllerWinnersSection.getWinnersHandler(curPage, Constant.WINS, Constant.ASC);
        } else if (target.classList.contains(Constant.DESC)) {
          getData = await controllerWinnersSection.getWinnersHandler(curPage, Constant.WINS, Constant.DESC);
        }
        break;
      }
      case Constant.BEST_TIME: {
        target.previousElementSibling?.classList.remove(Constant.ASC, Constant.DESC);
        if (target.classList.contains(Constant.ASC)) {
          target.classList.remove(Constant.ASC);
          target.classList.add(Constant.DESC);
        } else if (target.classList.contains(Constant.DESC)) {
          target.classList.remove(Constant.DESC);
          target.classList.add(Constant.ASC);
        } else target.classList.add(Constant.ASC);

        if (target.classList.contains(Constant.ASC)) {
          getData = await controllerWinnersSection.getWinnersHandler(curPage, Constant.TIME, Constant.ASC);
        } else if (target.classList.contains(Constant.DESC)) {
          getData = await controllerWinnersSection.getWinnersHandler(curPage, Constant.TIME, Constant.DESC);
        }
        break;
      }
      default:
        break;
    }
    if (getData) {
      const { data } = getData;
      const winnersData: TableWinnerDataObj[] = await createWinnersData(data);
      const newWinnerTableDiv: HTMLElement = createContainTable(winnersData);
      wrapperWinnersTable.elem.append(newWinnerTableDiv);
    }
  }
}
