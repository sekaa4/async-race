import DataWinObject from '../../../interfaces/DataWinObject';
import TableWinnerDataObj from '../../../interfaces/TableWinnerObj';
import ConstantsDom from '../../../models/Dom';
import createWinnersData from '../../../utils/createWinnersData';
import CreateElementWrapper from '../CreateElementWrapper';
import { createContainTable } from './createContainTable';
import createHeaderTable from './createHeaderTable';

export const wrapperWinnersTable: CreateElementWrapper = new CreateElementWrapper(ConstantsDom.DIV, {
  classes: [ConstantsDom.TABLE, ConstantsDom.MAIN_TABLE],
});
const headerTable: HTMLDivElement = createHeaderTable();
wrapperWinnersTable.elem.append(headerTable);

export async function createTableWinners(data: DataWinObject[]): Promise<HTMLDivElement> {
  const winnersData: TableWinnerDataObj[] = await createWinnersData(data);
  const containTable: HTMLDivElement = createContainTable(winnersData);

  wrapperWinnersTable.elem.append(headerTable, containTable);
  return wrapperWinnersTable.elem;
}
