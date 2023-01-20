import DataObject from '../../../interfaces/DataObject';
import Constant from '../../../models/Constant';
import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import createSVGElement from '../createSVGElement';

export default function createControlCar(car: DataObject): HTMLDivElement {
  const controlCar: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CONTROL_CAR],
  });
  const buttonStart: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON_ENGINE, ConstantsDom.BUTTON_ENGINE_A, ConstantsDom.BUTTON],
    text: `${Constant.START}`,
  });
  const buttonStop: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON_ENGINE, ConstantsDom.BUTTON_ENGINE_B, ConstantsDom.BUTTON],
    text: `${Constant.STOP}`,
  });

  const carImgDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CONTROL_CAR_IMG],
  });
  const svgCar: SVGSVGElement = createSVGElement(`${Constant.CAR}`, {
    fill: `${car.color}`,
    id: `${car.id}`,
  });
  const svgFinish: SVGSVGElement = createSVGElement(`${Constant.FLAG}`);

  carImgDiv.append(svgCar, svgFinish);
  controlCar.append(buttonStart, buttonStop, carImgDiv);
  return controlCar;
}
