import Constant from '../../models/Constant';
import ConstantsDom from '../../models/Dom';
import pageButtonsHandler from '../controller/pageButtonsHandler';
import createElement from './createElement';
import CreateElementWrapper from './CreateElementWrapper';

export const countText: HTMLHeadElement = createElement(ConstantsDom.H3, HTMLHeadElement, {
  classes: [ConstantsDom.TITLE_TEXT, ConstantsDom.PAGINATION_TEXT],
});

export const wrapperCreateCar: CreateElementWrapper = new CreateElementWrapper(ConstantsDom.DIV, {
  classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
});

export function createPageButtons(count: number, page: number): HTMLDivElement {
  wrapperCreateCar.elem.innerText = '';
  const createPaginationDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: wrapperCreateCar.elem,
    classes: [ConstantsDom.MAIN_PAGE, ConstantsDom.PAGINATION],
  });

  const prevButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON_PREVIOUS, ConstantsDom.BUTTON_PAGE, ConstantsDom.BUTTON],
    text: `${Constant.PREVIOUS}`,
  });

  const nextButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON_NEXT, ConstantsDom.BUTTON_PAGE, ConstantsDom.BUTTON],
    text: `${Constant.NEXT}`,
  });

  countText.innerText = `${page}/${Math.ceil(count / Constant.SEVEN)}`;

  createPaginationDiv.addEventListener('click', (e: MouseEvent) => {
    pageButtonsHandler(e, countText);
  });

  createPaginationDiv.append(prevButton, countText, nextButton);
  return wrapperCreateCar.elem;
}
