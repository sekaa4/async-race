import createElement from '../elements/createElement';
import ConstantsDom from '../../models/Dom';
import createCarSection from '../elements/garage/createCarSection';
import createRaceSection from '../elements/garage/createRaceSection';

export default function renderMain(): HTMLElement {
  const main: HTMLElement = createElement(ConstantsDom.MAIN, HTMLElement, {
    classes: [ConstantsDom.MAIN],
    attributes: [['id', 'app']],
  });

  const carSection: HTMLElement = createCarSection();
  const raceSection: HTMLElement = createRaceSection();
  main.append(carSection, raceSection);

  return main;
}
