import DataObject from '../../../interfaces/DataObject';
import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import createChooseButtons from './createChooseButtons';
import createControlCar from './createControlCar';
import chooseButtonsHandler from '../../controller/raceButtonsHandler';
import checkControlButtons from '../../../utils/checkControlButtons';
import Attrs from '../../../models/Attrs';

export default function createCarOnRace(car: DataObject): HTMLDivElement {
  const carOnTrack: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CAR_ON_RACE],
    attributes: [[`${Attrs.DATA_ID}`, `${car.id}`]],
  });

  const chooseButtons: HTMLDivElement = createChooseButtons(car);
  const controlCar: HTMLDivElement = createControlCar(car);
  checkControlButtons(controlCar, car.id);

  carOnTrack.append(chooseButtons, controlCar);
  carOnTrack.addEventListener('click', (e: MouseEvent) => chooseButtonsHandler(e, car));
  return carOnTrack;
}
