import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import DataObject from '../../../interfaces/DataObject';
import globalState from '../../../utils/globalState';
import Constant from '../../../models/Constant';

export default function createChooseButtons(car: DataObject): HTMLDivElement {
  const chooseButtons: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CHOOSE_BUTTON, ConstantsDom.RACE_LIST_CHOOSE_BUTTON],
  });

  const buttonSelect: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.CHOOSE_BUTTON_SELECT, ConstantsDom.BUTTON],
    text: `${Constant.SELECT}`,
  });
  if (globalState.idSelectedCar && car.id === globalState.idSelectedCar) {
    buttonSelect.disabled = true;
  }

  const buttonRemove: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.CHOOSE_BUTTON_REMOVE, ConstantsDom.BUTTON],
    text: `${Constant.REMOVE}`,
  });

  const nameCar: HTMLSpanElement = createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    classes: [ConstantsDom.NAME_CAR],
    attributes: [['data-name', `${car.name}`]],
    text: `${car.name}`,
  });

  chooseButtons.append(buttonSelect, buttonRemove, nameCar);

  return chooseButtons;
}
