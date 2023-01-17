import DataObject from '../../../interfaces/DataObject';
import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import createChooseButtons from './createChooseButtons';
import createControlCar from './createControlCar';

export default function createCarOnRace(car: DataObject): HTMLDivElement {
  const carOnTrack: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CAR_ON_RACE],
  });

  const chooseButtons: HTMLDivElement = createChooseButtons(car);
  const controlCar: HTMLDivElement = createControlCar(car);

  carOnTrack.append(chooseButtons, controlCar);

  return carOnTrack;
}
