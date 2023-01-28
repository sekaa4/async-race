import Path from '../../models/Path';
import DataObject from '../../interfaces/DataObject';
import Constant from '../../models/Constant';
import UpdateData from '../../interfaces/UpdateData';
import Methods from '../../models/Methods';

const baseUrl = Constant.BASEURL;

export default async function updateCar(id: number, body: UpdateData): Promise<null | DataObject> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.GARAGE}/${id}`, {
      method: `${Methods.PUT}`,
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
