import createElement from '../elements/createElement';
import ConstantsDom from '../../models/Dom';
import createCarSection from '../elements/garage/createCarSection';
import createRaceSection from '../elements/garage/createRaceSection';
import Data from '../../interfaces/Data.type';

export default function renderMain(count: number, data: Data): HTMLElement {
  const main: HTMLElement = createElement(ConstantsDom.MAIN, HTMLElement, {
    classes: [ConstantsDom.MAIN],
    attributes: [['id', 'app']],
  });

  const carSection: HTMLElement = createCarSection();
  const raceSection: HTMLElement = createRaceSection(count, data);
  main.append(carSection, raceSection);

  return main;
}
