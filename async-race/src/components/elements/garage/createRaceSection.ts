import CreateElementWrapper from '../CreateElementWrapper';
import createElement from '../createElement';
import ConstantsDom from '../../../models/Dom';
import createListCars from './createListCars';
import { createTitlePage } from './createTitlePage';
import Data from '../../../interfaces/Data.type';

export default function createRaceSection(count: number, page: number, data: Data): HTMLElement {
  const raceSection: HTMLElement = createElement(ConstantsDom.SECTION, HTMLElement, {
    classes: [ConstantsDom.SECTION, ConstantsDom.MAIN_SECTION],
  });

  const wrapperRaceCar: CreateElementWrapper = new CreateElementWrapper(ConstantsDom.DIV, {
    parentElement: raceSection,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
  });

  const raceDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: wrapperRaceCar.elem,
    classes: [ConstantsDom.RACE, ConstantsDom.MAIN_RACE],
  });

  const titlePageElem: HTMLDivElement = createTitlePage(count, page);
  const raceCarsList: HTMLDivElement = createListCars(data, page);

  raceDiv.append(titlePageElem, raceCarsList);
  return raceSection;
}
