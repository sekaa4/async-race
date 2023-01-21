import createElement from '../elements/createElement';
import ConstantsDom from '../../models/Dom';
import createCarSection from '../elements/garage/createCarSection';
import createRaceSection from '../elements/garage/createRaceSection';
import Data from '../../interfaces/Data.type';
import globalState from '../../utils/globalState';
import Constant from '../../models/Constant';
import { createPageButtons } from '../elements/createPageButtons';
import checkPageButtons from '../../utils/checkPageButtons';

export const main: HTMLElement = createElement(ConstantsDom.MAIN, HTMLElement, {
  classes: [ConstantsDom.MAIN],
  attributes: [['id', 'app']],
});

export function renderMain(count: number, data: Data, page: number): HTMLElement {
  if (globalState.view === Constant.GARAGE) {
    const raceSection: HTMLElement = createElement(ConstantsDom.SECTION, HTMLElement, {
      classes: [ConstantsDom.SECTION, ConstantsDom.MAIN_SECTION],
    });
    const carSection: HTMLElement = createCarSection(page);
    const wrapperSectionDiv: HTMLElement = createRaceSection(data);
    const wrapperPageButtons: HTMLDivElement = createPageButtons(count, page);
    checkPageButtons(wrapperPageButtons);
    raceSection.append(wrapperSectionDiv, wrapperPageButtons);
    main.append(carSection, raceSection);
  }
  if (globalState.view === Constant.WINNERS) {
    // const carSection: HTMLElement = createCarSection(page);
    // const raceSectionDiv: HTMLElement = createRaceSection(count, page, data);
    // main.append(carSection, raceSectionDiv);
  }

  return main;
}
