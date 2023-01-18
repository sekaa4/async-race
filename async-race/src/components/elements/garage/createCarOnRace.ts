import DataObject from '../../../interfaces/DataObject';
import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import createChooseButtons from './createChooseButtons';
import createControlCar from './createControlCar';
// eslint-disable-next-line import/no-cycle
import chooseButtonsHandler from '../../controller/chooseButtonsHandler';

export default function createCarOnRace(car: DataObject, page: number): HTMLDivElement {
  const carOnTrack: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CAR_ON_RACE],
    attributes: [['data-name', `${car.name}`]],
  });

  const chooseButtons: HTMLDivElement = createChooseButtons(car);
  const controlCar: HTMLDivElement = createControlCar(car);
  carOnTrack.append(chooseButtons, controlCar);
  carOnTrack.addEventListener('click', (e: MouseEvent) => chooseButtonsHandler(e, car, page));
  return carOnTrack;
}
