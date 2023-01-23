import controllerRaceSection from '../components/controller/ControllerRaceSection';
import DataObject from '../interfaces/DataObject';
import DataWinObject from '../interfaces/DataWinObject';
import TableWinnerDataObj from '../interfaces/TableWinnerObj';

export default async function createWinnersData(data: DataWinObject[]): Promise<TableWinnerDataObj[]> {
  const winnersData: TableWinnerDataObj[] = await data.reduce(
    async (acc: Promise<TableWinnerDataObj[]>, cur: DataWinObject) => {
      const { id, wins, time } = cur;
      const selectCar: DataObject | null = await controllerRaceSection.selectHandler(id);
      if (selectCar) {
        const { name, color } = selectCar;
        const winnerDataObj: TableWinnerDataObj = { id, wins, time, name, color };
        (await acc).push(winnerDataObj);
        return acc;
      }
      return acc;
    },
    Promise.resolve([])
  );

  return winnersData;
}
