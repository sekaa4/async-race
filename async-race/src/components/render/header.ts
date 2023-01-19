import createElement from '../elements/createElement';
import ConstantsDom from '../../models/Dom';
import globalState from '../../utils/store';

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
    text: 'TO GARAGE',
  });

  const buttonWinners: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.HEADER__BUTTON, ConstantsDom.BUTTON],
    text: 'TO WINNERS',
  });

  if (globalState.view === 'garage') {
    buttonGarage.disabled = true;
  } else buttonWinners.disabled = true;

  buttonGarage.addEventListener('click', () => {
    buttonGarage.disabled = true;
    buttonWinners.disabled = false;
  });

  buttonWinners.addEventListener('click', () => {
    buttonWinners.disabled = true;
    buttonGarage.disabled = false;
  });

  headerButtonDiv.append(buttonGarage, buttonWinners);
  return header;
}
