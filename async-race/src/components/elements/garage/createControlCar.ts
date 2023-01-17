import DataObject from '../../../interfaces/DataObject';
import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import createSVGElement from '../createSVGElement';

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
  const svgCar: SVGSVGElement = createSVGElement('car', {
    fill: `${car.color}`,
    id: `${car.id}`,
  });
  const svgFinish: SVGSVGElement = createSVGElement('flag');

  carImgDiv.append(svgCar, svgFinish);
  controlCar.append(buttonStart, buttonStop, carImgDiv);
  return controlCar;
}
