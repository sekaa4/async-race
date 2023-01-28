import Path from '../../models/Path';
import Constant from '../../models/Constant';
import DataWinObject from '../../interfaces/DataWinObject';

const baseUrl = Constant.BASEURL;

export default async function getWinner(id: number): Promise<DataWinObject | null> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.WINNERS}/${id}`);

    if (resp.status === Constant.STATUSCODE200) {
      const car: DataWinObject = await resp.json();
      return car;
    }

    return null;
  } catch (error) {
    return null;
  }
}
