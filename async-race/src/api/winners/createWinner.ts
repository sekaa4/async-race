import Path from '../../models/Path';
import DataWinObject from '../../interfaces/DataWinObject';
import Constant from '../../models/Constant';

const baseUrl = 'http://127.0.0.1:3000';

export default async function createWinner(body: DataWinObject): Promise<DataWinObject | null> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.WINNERS}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (resp.status === Constant.STATUSCODE201) {
      const car: DataWinObject = await resp.json();
      return car;
    }

    return null;
  } catch (error) {
    return null;
  }
}
