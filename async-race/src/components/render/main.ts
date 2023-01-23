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
import createHeaderTable from '../elements/winners/createHeaderTable';

export const main: HTMLElement = createElement(ConstantsDom.MAIN, HTMLElement, {
  classes: [ConstantsDom.MAIN],
  attributes: [['id', 'app']],
});

export async function renderMain(count: number, data: Data | DataWinObject[], page: number): Promise<HTMLElement> {
  main.innerText = '';
  if (globalState.view === Constant.GARAGE) {
    const dataCar: Data = <Data>data;
    const raceSection: HTMLElement = createElement(ConstantsDom.SECTION, HTMLElement, {
      classes: [ConstantsDom.SECTION, ConstantsDom.MAIN_SECTION],
    });
    const carSection: HTMLElement = createCarSection(page);
    const wrapperSectionDiv: HTMLElement = createRaceSection(dataCar);
    const wrapperPageButtons: HTMLDivElement = createPageButtons(count, page, Constant.SEVEN);
    checkPageButtons(wrapperPageButtons, Constant.SEVEN);
    raceSection.append(wrapperSectionDiv, wrapperPageButtons);
    main.append(carSection, raceSection);
  }
  if (globalState.view === Constant.WINNERS) {
    const tableSection: HTMLElement = createElement(ConstantsDom.SECTION, HTMLElement, {
      classes: [ConstantsDom.SECTION, ConstantsDom.WINNERS, ConstantsDom.WRAPPER],
    });
    const dataWinners: DataWinObject[] = <DataWinObject[]>data;

    const titleWinnersPageElem: HTMLDivElement = createWinnersTitlePage(count, page);
    const headerTable: HTMLDivElement = createHeaderTable();
    const tableWinnersPageElem: HTMLDivElement = await createTableWinners(dataWinners);
    const wrapperPageButtons: HTMLDivElement = createPageButtons(count, page, Constant.TWO);
    checkPageButtons(wrapperPageButtons, Constant.TWO);
    tableSection.append(titleWinnersPageElem, headerTable, tableWinnersPageElem, wrapperPageButtons);
    main.append(tableSection);
  }

  return main;
}
