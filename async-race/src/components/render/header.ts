import createElement from '../elements/createElement';
import ConstantsDom from '../../models/Dom';

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
    classes: [ConstantsDom.HEADER_BUTTON_GARAGE, ConstantsDom.BUTTON],
    text: 'TO GARAGE',
  });

  const buttonWinners: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.HEADER_BUTTON_WINNERS, ConstantsDom.BUTTON],
    text: 'TO WINNERS',
  });

  headerButtonDiv.append(buttonGarage, buttonWinners);

  return header;
}
