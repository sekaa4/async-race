import Data from '../../interfaces/Data.type';
import ReturnObjWinners from '../../interfaces/ReturnObjWinners';
import TableWinnerDataObj from '../../interfaces/TableWinnerObj';
import Constant from '../../models/Constant';
// import checkPageButtons from '../../utils/checkPageButtons';
import createWinnersData from '../../utils/createWinnersData';
import globalState from '../../utils/globalState';
import createRaceSection from '../elements/garage/createRaceSection';
import { createContainTable } from '../elements/winners/createContainTable';
import controllerCarSection from './ControllerRaceSection';
import { pageElem } from '../elements/winners/createWinnersTitlePage';

export default async function pageButtonsHandler(event: MouseEvent, countTextFieldElem: HTMLElement) {
  const { target, currentTarget } = event;
  const newPageElem = countTextFieldElem;
  try {
    if (target instanceof HTMLButtonElement && currentTarget instanceof HTMLElement) {
      const wrapperPageElem: HTMLDivElement = <HTMLDivElement>currentTarget.parentElement;
      const wrapperCarSection: HTMLDivElement = <HTMLDivElement>wrapperPageElem.previousElementSibling;
      console.dir(wrapperPageElem);
      switch (target.innerText) {
        case Constant.PREVIOUS: {
          const getData: Data | ReturnObjWinners | null = await controllerCarSection.changePageHandler(
            Constant.PREVIOUS
          );
          const nextButton: HTMLButtonElement = <HTMLButtonElement>currentTarget.lastElementChild;
          if (getData && !(Constant.COUNT in getData)) {
            const count = globalState.carsCount;
            const pageCount: number = Math.ceil(count / Constant.SEVEN);
            const dataCars = <Data>getData;
            const newWrapperSectionDiv: HTMLElement = createRaceSection(dataCars);
            const curPage: number = globalState.carsPage;
            if (curPage === Constant.ONE) target.disabled = true;
            if (curPage <= pageCount) nextButton.disabled = false;
            wrapperCarSection.remove();
            wrapperPageElem.before(newWrapperSectionDiv);

            newPageElem.innerText = `${curPage}/${pageCount}`;
          } else if (getData && Constant.COUNT in getData) {
            const { count, data } = getData;
            const pageCount: number = Math.ceil(count / Constant.TWO);
            const winnersData: TableWinnerDataObj[] = await createWinnersData(data);
            const newWinnerTableDiv: HTMLElement = createContainTable(winnersData);
            const curPage: number = globalState.winnersPage;
            if (curPage === Constant.ONE) target.disabled = true;
            if (curPage <= pageCount) nextButton.disabled = false;
            wrapperCarSection.remove();
            wrapperPageElem.before(newWinnerTableDiv);

            pageElem.innerText = `${Constant.MAINPAGE} #${curPage}`;
            newPageElem.innerText = `${curPage}/${pageCount}`;
          }
          break;
        }
        case Constant.NEXT: {
          const getData: Data | ReturnObjWinners | null = await controllerCarSection.changePageHandler(Constant.NEXT);
          const prevButton: HTMLButtonElement = <HTMLButtonElement>currentTarget.firstElementChild;
          if (getData && !(Constant.COUNT in getData)) {
            const count = globalState.carsCount;
            const pageCount: number = Math.ceil(count / Constant.SEVEN);
            const dataCars: Data = <Data>getData;
            const newWrapperSectionDiv: HTMLElement = createRaceSection(dataCars);
            const curPage: number = globalState.carsPage;
            if (curPage > Constant.ONE) prevButton.disabled = false;
            if (curPage === pageCount) target.disabled = true;
            wrapperCarSection.remove();
            wrapperPageElem.before(newWrapperSectionDiv);

            newPageElem.innerText = `${curPage}/${pageCount}`;
          } else if (getData && Constant.COUNT in getData) {
            const { count, data } = getData;
            const pageCount: number = Math.ceil(count / Constant.TWO);
            const winnersData: TableWinnerDataObj[] = await createWinnersData(data);
            const newWinnerTableDiv: HTMLElement = createContainTable(winnersData);
            const curPage: number = globalState.winnersPage;
            if (curPage > Constant.ONE) prevButton.disabled = false;
            if (curPage === pageCount) target.disabled = true;
            wrapperCarSection.remove();
            wrapperPageElem.before(newWinnerTableDiv);

            pageElem.innerText = `${Constant.MAINPAGE} #${curPage}`;
            newPageElem.innerText = `${curPage}/${pageCount}`;
          }
          break;
        }
        default:
          break;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}
