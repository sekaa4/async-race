import DataObject from '../../../interfaces/DataObject';
import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import '../../../assets/icons/car.svg';
import '../../../assets/icons/flag.svg';

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
  const svgCar: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const useSvgCar = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useSvgCar.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#car`);
  const svgFinish: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const useSvgFinish = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  svgCar.setAttribute('width', '11rem');
  svgCar.setAttribute('height', '7.5rem');
  svgCar.setAttribute('class', 'car');
  svgCar.setAttribute('fill', `${car.color}`);
  svgCar.append(useSvgCar);
  carImgDiv.append(svgCar);
  useSvgFinish.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#flag`);
  svgFinish.setAttribute('width', '10rem');
  svgFinish.setAttribute('class', 'finish');
  svgFinish.append(useSvgFinish);

  carImgDiv.append(svgFinish);
  controlCar.append(buttonStart, buttonStop, carImgDiv);
  return controlCar;
}
