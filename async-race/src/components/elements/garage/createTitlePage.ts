import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';

export const raceTitle: HTMLHeadElement = createElement(ConstantsDom.H2, HTMLHeadElement, {
  classes: [ConstantsDom.RACE_TITLE, ConstantsDom.TITLE_TEXT],
});

export const racePage: HTMLHeadElement = createElement(ConstantsDom.H3, HTMLHeadElement, {
  classes: [ConstantsDom.RACE_TITLE, ConstantsDom.TITLE_TEXT],
});

export function createTitlePage(count: number, page: number): HTMLDivElement {
  const raceTitlePage: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.RACE_TITLE_PAGE, ConstantsDom.TITLE_PAGE],
  });

  raceTitle.innerText = `GARAGE(${count})`;
  racePage.innerText = `PAGE #${page}`;

  raceTitlePage.append(raceTitle, racePage);

  return raceTitlePage;
}
