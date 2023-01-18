import createElement from '../elements/createElement';
import ConstantsDom from '../../models/Dom';
import createCarSection from '../elements/garage/createCarSection';
import createRaceSection from '../elements/garage/createRaceSection';
import Data from '../../interfaces/Data.type';

export const main: HTMLElement = createElement(ConstantsDom.MAIN, HTMLElement, {
  classes: [ConstantsDom.MAIN],
  attributes: [['id', 'app']],
});

export function renderMain(count: number, data: Data, page: number): HTMLElement {
  const carSection: HTMLElement = createCarSection(page);
  const raceSectionDiv: HTMLElement = createRaceSection(count, page, data);
  main.append(carSection, raceSectionDiv);

  return main;
}
