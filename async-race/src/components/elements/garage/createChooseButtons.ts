import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';

export default function createChooseButtons(): HTMLDivElement {
  const chooseButtons: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CHOOSE_BUTTON, ConstantsDom.RACE_LIST_CHOOSE_BUTTON],
  });

  const buttonSelect: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.CHOOSE_BUTTON_SELECT, ConstantsDom.BUTTON],
    text: 'SELECT',
  });

  const buttonRemove: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.CHOOSE_BUTTON_REMOVE, ConstantsDom.BUTTON],
    text: 'REMOVE',
  });

  const nameCar: HTMLSpanElement = createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    classes: [ConstantsDom.NAME_CAR],
    text: `nameCAR${0}`,
  });

  chooseButtons.append(buttonSelect, buttonRemove, nameCar);

  return chooseButtons;
}
