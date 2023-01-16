// import Data from '../interfaces/Data.type';
// import persistentStorage from './persistentStorage';
import Path from '../../models/Path';
// import generateQueryString from './generateQueryString';
// import QueryObject from '../interfaces/QueryObject';
// import ReturnObj from '../interfaces/ReturnObj';
import DataObject from '../../interfaces/DataObject';

const baseUrl = 'http://127.0.0.1:3000';

export default async function deleteCar(id: number): Promise<DataObject> {
  const resp: Response = await fetch(`${baseUrl}${Path.WINNERS}/${id}`, {
    method: 'DELETE',
  });
  // status 200 , res {}
  // status 404, res {}
  // const count: number | null = Number(resp.headers.get('X-Total-Count'));
  const car: DataObject = await resp.json();

  // persistentStorage.setItem('data-cars', data);
  return car;
}
