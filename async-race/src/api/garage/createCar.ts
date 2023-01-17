import Path from '../../models/Path';
import DataObject from '../../interfaces/DataObject';
import Constant from '../../models/Constant';
import UpdateData from '../../interfaces/UpdateData';

const baseUrl = 'http://127.0.0.1:3000';

export default async function createCar(body: UpdateData): Promise<DataObject | null> {
  let newCar: DataObject;
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.GARAGE}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (resp.status === Constant.STATUSCODE201) {
      newCar = await resp.json();
      return newCar;
    }
    throw new Error('Something wrong status');
  } catch (err) {
    return null;
  }
}
