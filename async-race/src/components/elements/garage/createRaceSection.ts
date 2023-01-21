import CreateElementWrapper from '../CreateElementWrapper';
import createElement from '../createElement';
import ConstantsDom from '../../../models/Dom';
import createListCars from './createListCars';
import { createTitlePage } from './createTitlePage';
import Data from '../../../interfaces/Data.type';

export default function createRaceSection(data: Data): HTMLElement {
  const wrapperRaceCar: CreateElementWrapper = new CreateElementWrapper(ConstantsDom.DIV, {
    classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
  });

  const raceDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: wrapperRaceCar.elem,
    classes: [ConstantsDom.RACE, ConstantsDom.MAIN_RACE],
  });

  const titlePageElem: HTMLDivElement = createTitlePage();
  const raceCarsList: HTMLDivElement = createListCars(data);

  raceDiv.append(titlePageElem, raceCarsList);
  return wrapperRaceCar.elem;
}
