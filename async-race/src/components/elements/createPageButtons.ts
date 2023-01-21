import Constant from '../../models/Constant';
import ConstantsDom from '../../models/Dom';
import createElement from './createElement';
import CreateElementWrapper from './CreateElementWrapper';

export default function createPageButtons(count: number, page: number): HTMLDivElement {
  const wrapperCreateCar: CreateElementWrapper = new CreateElementWrapper(ConstantsDom.DIV, {
    classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
  });

  const createPaginationDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: wrapperCreateCar.elem,
    classes: [ConstantsDom.MAIN_PAGE, ConstantsDom.PAGINATION],
  });

  const prevButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON_PREVIOUS, ConstantsDom.BUTTON_PAGE, ConstantsDom.BUTTON],
    text: `${Constant.PREVIOUS}`,
  });

  const countText: HTMLHeadElement = createElement(ConstantsDom.H3, HTMLHeadElement, {
    classes: [ConstantsDom.TITLE_TEXT, ConstantsDom.PAGINATION_TEXT],
    text: `${page}/${Math.ceil(count / Constant.SEVEN)}`,
  });

  const nextButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON_NEXT, ConstantsDom.BUTTON_PAGE, ConstantsDom.BUTTON],
    text: `${Constant.NEXT}`,
  });

  createPaginationDiv.append(prevButton, countText, nextButton);
  return wrapperCreateCar.elem;
}
