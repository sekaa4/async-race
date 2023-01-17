import DataObject from '../../../interfaces/DataObject';
import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';

export default function createControlCar(car: DataObject): HTMLDivElement {
  const controlCar: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CONTROL_CAR],
  });
  const buttonStart: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON_ENGINE, ConstantsDom.BUTTON],
    text: 'A',
  });
  const buttonStop: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON_ENGINE, ConstantsDom.BUTTON],
    text: 'B',
  });
  const carImgDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CONTROL_CAR_IMG],
  });
  carImg.style.color = car.color;

  const finishImg: HTMLImageElement = createElement(ConstantsDom.IMG, HTMLImageElement, {
    classes: [ConstantsDom.FINISH_IMAGE, ConstantsDom.IMG],
    attributes: [['alt', 'finish']],
  });

  controlCar.append(buttonStart, buttonStop, carImg, finishImg);

  return controlCar;
}
