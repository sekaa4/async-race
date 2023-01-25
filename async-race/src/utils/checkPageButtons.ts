import Constant from '../models/Constant';
import globalState from './globalState';

export default function checkPageButtons(wrapperElem: HTMLElement, limit: number) {
  let count: number;
  let curPage: number;

  if (globalState.view === Constant.GARAGE) {
    count = globalState.carsCount;
    curPage = globalState.carsPage;
  } else {
    count = globalState.winnersCount;
    curPage = globalState.winnersPage;
  }

  const pageCount: number = Math.ceil(count / limit);
  const parentButtonElem: HTMLDivElement = <HTMLDivElement>wrapperElem.firstChild;

  const prevButton: HTMLButtonElement = <HTMLButtonElement>parentButtonElem.firstChild;
  const nextButton: HTMLButtonElement = <HTMLButtonElement>parentButtonElem.lastChild;
  prevButton.disabled = true;

  if (curPage === pageCount && curPage === Constant.ONE) {
    prevButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  if (curPage === pageCount && curPage !== Constant.ONE) {
    prevButton.disabled = false;
    nextButton.disabled = true;
    return;
  }

  if (curPage > Constant.ONE) prevButton.disabled = false;
  if (curPage < pageCount) nextButton.disabled = false;
  if (curPage > pageCount) nextButton.disabled = true;
}
