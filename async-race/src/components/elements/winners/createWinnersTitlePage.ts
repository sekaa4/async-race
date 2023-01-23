import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import globalState from '../../../utils/globalState';
import Constant from '../../../models/Constant';

export const title: HTMLHeadElement = createElement(ConstantsDom.H2, HTMLHeadElement, {
  classes: [ConstantsDom.RACE_TITLE, ConstantsDom.TITLE_TEXT],
});

export const pageElem: HTMLHeadElement = createElement(ConstantsDom.H3, HTMLHeadElement, {
  classes: [ConstantsDom.RACE_TITLE, ConstantsDom.TITLE_TEXT],
});

const titlePage: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
  classes: [ConstantsDom.RACE_TITLE_PAGE, ConstantsDom.TITLE_PAGE],
});

export function createWinnersTitlePage(count: number, page: number): HTMLDivElement {
  const { view } = globalState;
  titlePage.innerText = '';
  title.innerText = `${view}(${count})`;
  pageElem.innerText = `${Constant.MAINPAGE} #${page}`;

  titlePage.append(title, pageElem);

  return titlePage;
}
