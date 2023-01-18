import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import buttonLineHandler from '../../controller/carButtonsHandler';

export default function createButtonLine(page: number): HTMLDivElement {
  const carButtonLineDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CAR_BUTTON_LINE, ConstantsDom.BUTTON_LINE],
  });

  const buttonRace: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON_LINE_RACE, ConstantsDom.BUTTON],
    text: 'RACE',
  });

  const buttonReset: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON_LINE_RESET, ConstantsDom.BUTTON],
    text: 'RESET',
  });

  const buttonGenerate: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON_LINE_GENERATE, ConstantsDom.BUTTON],
    text: 'GENERATE',
  });

  carButtonLineDiv.append(buttonRace, buttonReset, buttonGenerate);
  carButtonLineDiv.addEventListener('click', (e: MouseEvent) => buttonLineHandler(e, page));
  return carButtonLineDiv;
}
