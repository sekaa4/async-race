import CreateElementWrapper from '../CreateElementWrapper';
import createElement from '../createElement';
import ConstantsDom from '../../../models/Dom';
import createListCars from './createListCars';
import Data from '../../../interfaces/Data.type';

export default function createRaceSection(count: number, data: Data): HTMLElement {
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

  const raceTitle: HTMLHeadElement = createElement(ConstantsDom.H2, HTMLHeadElement, {
    classes: [ConstantsDom.RACE_TITLE, ConstantsDom.TITLE_TEXT],
    text: `GARAGE(${count})`,
  });

  const racePage: HTMLHeadElement = createElement(ConstantsDom.H3, HTMLHeadElement, {
    classes: [ConstantsDom.RACE_TITLE, ConstantsDom.TITLE_TEXT],
    text: `PAGE #${1}`,
  });

  const raceCarsList: HTMLDivElement = createListCars(data);

  raceDiv.append(raceTitle, racePage, raceCarsList);

  return raceSection;
}
