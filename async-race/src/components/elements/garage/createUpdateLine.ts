import DataObject from '../../../interfaces/DataObject';
import ConstantsDom from '../../../models/Dom';
import controllerCarSection from '../../controller/ControllerCarSection';
import createElement from '../createElement';
// import createCarOnRace from './createCarOnRace';
// import { raceListDiv } from './createListCars';

export default function createUpdateLine(): HTMLDivElement {
  const carUpdateLineDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CAR_UPDATE_LINE, ConstantsDom.UPDATE_LINE],
  });

  const inputText: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
    classes: [ConstantsDom.INPUT_TEXT, ConstantsDom.UPDATE_LINE_INPUT, ConstantsDom.INPUT],
    attributes: [['type', 'text']],
  });

  const inputColor: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
    classes: [ConstantsDom.INPUT_COLOR],
    attributes: [['type', 'color']],
  });

  const createButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON, ConstantsDom.UPDATE_LINE_BUTTON],
    text: 'UPDATE',
  });

  createButton.addEventListener('click', async (e: MouseEvent) => {
    const selectCar: null | DataObject = await controllerCarSection.updateHandler(e, inputText, inputColor);
    if (selectCar) {
      const carElem: HTMLElement = <HTMLElement>document.getElementById(selectCar.id.toString());
      carElem.setAttribute('fill', selectCar.color.toString());
    }
  });

  carUpdateLineDiv.append(inputText, inputColor, createButton);

  return carUpdateLineDiv;
}
