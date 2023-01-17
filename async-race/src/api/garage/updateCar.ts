import Path from '../../models/Path';
import DataObject from '../../interfaces/DataObject';
import Constant from '../../models/Constant';
import UpdateData from '../../interfaces/UpdateData';

const baseUrl = 'http://127.0.0.1:3000';

export default async function updateCar(id: number, body: UpdateData): Promise<null | DataObject> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.GARAGE}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    let selectCar: DataObject;
    if (resp.status === Constant.STATUSCODE200) {
      selectCar = await resp.json();
      return selectCar;
    }
    return null;
  } catch (err) {
    return null;
  }
}
