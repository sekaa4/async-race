import Path from '../../models/Path';
import DataObject from '../../interfaces/DataObject';
import Constant from '../../models/Constant';
import UpdateData from '../../interfaces/UpdateData';
import Methods from '../../models/Methods';

const baseUrl = Constant.BASEURL;

export default async function createCar(body: UpdateData): Promise<DataObject | null> {
  let newCar: DataObject;
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.GARAGE}`, {
      method: `${Methods.POST}`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (resp.status === Constant.STATUSCODE201) {
      newCar = await resp.json();
      return newCar;
    }
    throw new Error('Car does not created, try one more time');
  } catch (err) {
    return null;
  }
}
