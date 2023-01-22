import Path from '../../models/Path';
import DataObject from '../../interfaces/DataObject';

const baseUrl = 'http://127.0.0.1:3000';

export default async function getCar(id: number): Promise<DataObject> {
  const resp: Response = await fetch(`${baseUrl}${Path.GARAGE}/${id}`);
  const car: DataObject = await resp.json();

  return car;
}
