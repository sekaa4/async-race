import Data from '../../interfaces/Data.type';
import ReturnObjWinners from '../../interfaces/ReturnObjWinners';
import Constant from '../../models/Constant';
import globalState from '../../utils/globalState';
import createRaceSection from '../elements/garage/createRaceSection';
import controllerCarSection from './ControllerRaceSection';

export default async function pageButtonsHandler(event: MouseEvent, countTextFieldElem: HTMLElement) {
  const { target, currentTarget } = event;
  const newPageElem = countTextFieldElem;
  const count = globalState.carsCount;
  try {
    if (target instanceof HTMLButtonElement && currentTarget instanceof HTMLElement) {
      const wrapperPageElem: HTMLDivElement = <HTMLDivElement>currentTarget.parentElement;
      const wrapperCarSection: HTMLDivElement = <HTMLDivElement>wrapperPageElem.previousElementSibling;
      // const wrapperSectionDiv: HTMLElement = createRaceSection(count, page, data);
      switch (target.innerText) {
        case Constant.PREVIOUS: {
          const data: Data | ReturnObjWinners | null = await controllerCarSection.changePageHandler(Constant.PREVIOUS);
          const nextButton: HTMLButtonElement = <HTMLButtonElement>currentTarget.lastElementChild;
          const pageCount: number = Math.ceil(count / Constant.SEVEN);
          if (data && !(count in data)) {
            const dataCars = <Data>data;
            const newWrapperSectionDiv: HTMLElement = createRaceSection(dataCars);
            const curPage: number = globalState.carsPage;
            if (curPage === Constant.ONE) target.disabled = true;
            if (curPage <= pageCount) nextButton.disabled = false;
            wrapperCarSection.remove();
            wrapperPageElem.before(newWrapperSectionDiv);

            newPageElem.innerText = `${curPage}/${pageCount}`;
          }
          break;
        }
        case Constant.NEXT: {
          const data: Data | ReturnObjWinners | null = await controllerCarSection.changePageHandler(Constant.NEXT);
          const prevButton: HTMLButtonElement = <HTMLButtonElement>currentTarget.firstElementChild;
          const pageCount: number = Math.ceil(count / Constant.SEVEN);
          if (data && !(count in data)) {
            const dataCars: Data = <Data>data;
            const newWrapperSectionDiv: HTMLElement = createRaceSection(dataCars);
            const curPage: number = globalState.carsPage;
            if (curPage > Constant.ONE) prevButton.disabled = false;
            if (curPage === pageCount) target.disabled = true;
            wrapperCarSection.remove();
            wrapperPageElem.before(newWrapperSectionDiv);

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
