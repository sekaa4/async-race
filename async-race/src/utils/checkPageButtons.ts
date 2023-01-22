import Constant from '../models/Constant';
import globalState from './globalState';

export default function checkPageButtons(wrapperElem: HTMLElement) {
  const count: number = globalState.carsCount;
  const curPage: number = globalState.carsPage;
  const pageCount: number = Math.ceil(count / Constant.SEVEN);
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
}
