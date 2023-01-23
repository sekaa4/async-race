import createElement from '../elements/createElement';
import ConstantsDom from '../../models/Dom';
import createCarSection from '../elements/garage/createCarSection';
import createRaceSection from '../elements/garage/createRaceSection';
import Data from '../../interfaces/Data.type';
import globalState from '../../utils/globalState';
import Constant from '../../models/Constant';
import { createPageButtons } from '../elements/createPageButtons';
import checkPageButtons from '../../utils/checkPageButtons';
import DataWinObject from '../../interfaces/DataWinObject';
import { createTableWinners } from '../elements/winners/createTableWinners';
import { createWinnersTitlePage } from '../elements/winners/createWinnersTitlePage';

export const main: HTMLElement = createElement(ConstantsDom.MAIN, HTMLElement, {
  classes: [ConstantsDom.MAIN],
  attributes: [['id', 'app']],
});

export function renderMain(count: number, data: Data | DataWinObject[], page: number): HTMLElement {
  main.innerText = '';
  if (globalState.view === Constant.GARAGE) {
    const dataCar: Data = <Data>data;
    const raceSection: HTMLElement = createElement(ConstantsDom.SECTION, HTMLElement, {
      classes: [ConstantsDom.SECTION, ConstantsDom.MAIN_SECTION],
    });
    const carSection: HTMLElement = createCarSection(page);
    const wrapperSectionDiv: HTMLElement = createRaceSection(dataCar);
    const wrapperPageButtons: HTMLDivElement = createPageButtons(count, page);
    checkPageButtons(wrapperPageButtons);
    raceSection.append(wrapperSectionDiv, wrapperPageButtons);
    main.append(carSection, raceSection);
  }
  if (globalState.view === Constant.WINNERS) {
    const tableSection: HTMLElement = createElement(ConstantsDom.SECTION, HTMLElement, {
      classes: [ConstantsDom.SECTION, ConstantsDom.MAIN_SECTION, ConstantsDom.WRAPPER],
    });
    const dataWinners: DataWinObject[] = <DataWinObject[]>data;
    // main.innerHTML = 'Tut winners object';
    // console.log(dataWinners);
    const titleWinnersPageElem: HTMLDivElement = createWinnersTitlePage(count, page);
    const tableWinnersPageElem: HTMLDivElement = createTableWinners();
    const wrapperPageButtons: HTMLDivElement = createPageButtons(count, page);
    checkPageButtons(wrapperPageButtons);
    tableSection.append(titleWinnersPageElem, tableWinnersPageElem, wrapperPageButtons);
    main.append(tableSection);
    // const carSection: HTMLElement = createCarSection(page);
    // const raceSectionDiv: HTMLElement = createRaceSection(count, page, data);
    // main.append(carSection, raceSectionDiv);
  }

  return main;
}
