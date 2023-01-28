import Path from '../../models/Path';
import UpdateWinObj from '../../interfaces/UpdateWinObj.type.';
import DataWinObject from '../../interfaces/DataWinObject';
import Constant from '../../models/Constant';
import Methods from '../../models/Methods';

const baseUrl = Constant.BASEURL;

export default async function updateWinner(id: number, body: UpdateWinObj): Promise<DataWinObject | null> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.WINNERS}/${id}`, {
      method: `${Methods.PUT}`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (resp.status === Constant.STATUSCODE200) {
      const car: DataWinObject = await resp.json();
      return car;
    }
    return null;
  } catch (error) {
    return null;
  }
}
