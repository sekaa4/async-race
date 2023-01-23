import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import CreateElementWrapper from '../CreateElementWrapper';

export const racePage: HTMLHeadElement = createElement(ConstantsDom.H3, HTMLHeadElement, {
  classes: [ConstantsDom.RACE_TITLE, ConstantsDom.TITLE_TEXT],
});

export function createTableWinners(): HTMLDivElement {
  const wrapperWinnersTable: CreateElementWrapper = new CreateElementWrapper(ConstantsDom.DIV, {
    classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
  });
  return wrapperWinnersTable.elem;
}
