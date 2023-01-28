import globalState from './globalState';
import Constant from '../models/Constant';

export default function checkCarOnTrack(controlCar: HTMLDivElement, id: number) {
  const svgElement: SVGSVGElement = <SVGSVGElement>controlCar.querySelector(`.${Constant.CAR_SVG}`);

  if (globalState.carsOnTrack.length !== Constant.ZERO) {
    const arrSvgCar = globalState.carsOnTrack;
    arrSvgCar.forEach((svgCar) => {
      if (svgCar.id === id) {
        svgElement.style.left = svgCar.positionLeft;
      }
    });
  } else svgElement.style.left = '';
}
