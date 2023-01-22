import Path from '../../models/Path';
import UpdateWinObj from '../../interfaces/UpdateWinObj.type.';
import DataWinObject from '../../interfaces/DataWinObject';
import Constant from '../../models/Constant';

const baseUrl = 'http://127.0.0.1:3000';

export default async function updateWinner(id: number, body: UpdateWinObj): Promise<DataWinObject | null> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.WINNERS}/${id}`, {
      method: 'PUT',
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
