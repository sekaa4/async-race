import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import controllerCarSection from '../../controller/ControllerCarSection';
import DataObject from '../../../interfaces/DataObject';
import createCarOnRace from './createCarOnRace';
import { raceListDiv } from './createListCars';
import Constant from '../../../models/Constant';

export default function createCarLine(): HTMLDivElement {
  const carLineDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CAR_CREATE_LINE, ConstantsDom.CREATE_LINE],
  });

  const inputText: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
    classes: [ConstantsDom.INPUT_TEXT, ConstantsDom.CREATE_LINE_INPUT, ConstantsDom.INPUT],
    attributes: [['type', 'text']],
  });

  const inputColor: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
    classes: [ConstantsDom.INPUT_COLOR],
    attributes: [['type', 'color']],
  });

  const createButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.CREATE_LINE_BUTTON, ConstantsDom.BUTTON],
    text: 'CREATE',
  });

  createButton.addEventListener('click', async (e: MouseEvent) => {
    const newCar: DataObject | null = await controllerCarSection.createHandler(e, inputText, inputColor);
    if (newCar) {
      const length: number = raceListDiv.childElementCount;
      if (length < Constant.SEVEN) {
        const carOnRace: HTMLDivElement = createCarOnRace(newCar);
        raceListDiv.append(carOnRace);
      }
    }
  });

  carLineDiv.append(inputText, inputColor, createButton);

  return carLineDiv;
}
