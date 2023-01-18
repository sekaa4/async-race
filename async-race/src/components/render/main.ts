import createElement from '../elements/createElement';
import ConstantsDom from '../../models/Dom';
import createCarSection from '../elements/garage/createCarSection';
import createRaceSection from '../elements/garage/createRaceSection';
import Data from '../../interfaces/Data.type';
import createButtonLine from '../elements/garage/createButtonLine';
import createCarLine from '../elements/garage/createCarLine';
import { createUpdateLine } from '../elements/garage/createUpdateLine';
import createListCars from '../elements/garage/createListCars';
import { createTitlePage } from '../elements/garage/createTitlePage';

export const main: HTMLElement = createElement(ConstantsDom.MAIN, HTMLElement, {
  classes: [ConstantsDom.MAIN],
  attributes: [['id', 'app']],
});

export function renderMain(count: number, data: Data, page: number): HTMLElement {
  const carSection: HTMLElement = createCarSection();
  const raceSectionDiv: HTMLElement = createRaceSection();
  const carLine: HTMLDivElement = createCarLine(page);
  const updateLine: HTMLDivElement = createUpdateLine();
  const buttonLine: HTMLDivElement = createButtonLine();
  const titlePageElem: HTMLDivElement = createTitlePage(count, page);
  const raceCarsList: HTMLDivElement = createListCars(data, page);

  carSection.append(carLine, updateLine, buttonLine);
  raceSectionDiv.append(titlePageElem, raceCarsList);
  main.append(carSection, raceSectionDiv);

  return main;
}
