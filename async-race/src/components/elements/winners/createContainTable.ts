import TableWinnerDataObj from '../../../interfaces/TableWinnerObj';
import Constant from '../../../models/Constant';
import ConstantsDom from '../../../models/Dom';
import globalState from '../../../utils/globalState';
import createElement from '../createElement';
import createLineWinner from './createLineWinner';

export const winnerTableDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
  classes: [ConstantsDom.TABLE_LIST],
});

export function createContainTable(data: TableWinnerDataObj[]) {
  winnerTableDiv.innerText = '';

  data.forEach((lineCar: TableWinnerDataObj, inx: number) => {
    const number = inx + Constant.ONE;
    const page = globalState.winnersPage;
    const curNumber: number = page === Constant.ONE ? number : number + page * Constant.TEN;

    const lineWinner: HTMLDivElement = createLineWinner(lineCar, curNumber);
    winnerTableDiv.append(lineWinner);
  });

  return winnerTableDiv;
}
