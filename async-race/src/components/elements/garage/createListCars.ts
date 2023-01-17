import Data from '../../../interfaces/Data.type';
import DataObject from '../../../interfaces/DataObject';
import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import createCarOnRace from './createCarOnRace';

export const raceListDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
  classes: [ConstantsDom.RACE_LIST],
});

export default function createListCars(data: Data): HTMLDivElement {
  data.forEach((car: DataObject) => {
    const carOnList: HTMLDivElement = createCarOnRace(car);
    raceListDiv.append(carOnList);
  });

  return raceListDiv;
}
