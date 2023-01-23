import createElement from '../elements/createElement';
import ConstantsDom from '../../models/Dom';
import Constant from '../../models/Constant';
import headerButtonsHandler from '../controller/headerButtonsHandler';

export default function renderHeader(): HTMLElement {
  const header: HTMLElement = createElement(ConstantsDom.HEADER, HTMLElement, {
    classes: [ConstantsDom.HEADER],
  });

  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: header,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.HEADER_WRAPPER],
  });

  const headerButtonDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.HEADER_BUTTON],
  });

  const buttonGarage: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.HEADER__BUTTON, ConstantsDom.BUTTON],
    text: `${Constant.TO_GARAGE}`,
  });

  const buttonWinners: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.HEADER__BUTTON, ConstantsDom.BUTTON],
    text: `${Constant.TO_WINNERS}`,
  });

  buttonGarage.disabled = true;

  // buttonGarage.addEventListener('click', () => {
  //   buttonGarage.disabled = true;
  //   buttonWinners.disabled = false;
  // });

  // buttonWinners.addEventListener('click', () => {

  // });

  headerButtonDiv.addEventListener('click', (e: MouseEvent) => {
    headerButtonsHandler(e);
  });

  headerButtonDiv.append(buttonGarage, buttonWinners);
  return header;
}
