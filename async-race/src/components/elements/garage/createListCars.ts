import Data from '../../../interfaces/Data.type';
import DataObject from '../../../interfaces/DataObject';
import persistentStorage from '../../../utils/persistentStorage';
import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import createCarOnRace from './createCarOnRace';

export default function createListCars(): HTMLDivElement {
  const raceListDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.RACE_LIST],
  });

  const data: Data = <Data>persistentStorage.getItem('data-cars');
  data.forEach((car: DataObject) => {
    const carOnList: HTMLDivElement = createCarOnRace(car);
    raceListDiv.append(carOnList);
  });

  return raceListDiv;
}
