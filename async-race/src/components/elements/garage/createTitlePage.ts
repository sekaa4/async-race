import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import globalState from '../../../utils/store';

export const raceTitle: HTMLHeadElement = createElement(ConstantsDom.H2, HTMLHeadElement, {
  classes: [ConstantsDom.RACE_TITLE, ConstantsDom.TITLE_TEXT],
});

export const racePage: HTMLHeadElement = createElement(ConstantsDom.H3, HTMLHeadElement, {
  classes: [ConstantsDom.RACE_TITLE, ConstantsDom.TITLE_TEXT],
});

export function createTitlePage(): HTMLDivElement {
  const raceTitlePage: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.RACE_TITLE_PAGE, ConstantsDom.TITLE_PAGE],
  });

  raceTitle.innerText = `GARAGE(${globalState.carsCount})`;
  racePage.innerText = `PAGE #${globalState.carsPage}`;

  raceTitlePage.append(raceTitle, racePage);

  return raceTitlePage;
}
