import Path from '../../models/Path';
import DataObject from '../../interfaces/DataObject';
import Constant from '../../models/Constant';

const baseUrl = Constant.BASEURL;

export default async function getCar(id: number): Promise<DataObject> {
  const resp: Response = await fetch(`${baseUrl}${Path.GARAGE}/${id}`);
  const car: DataObject = await resp.json();

  return car;
}
