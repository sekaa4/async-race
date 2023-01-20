// import Data from '../interfaces/Data.type';
// import persistentStorage from './persistentStorage';
import Path from '../../models/Path';
// import generateQueryString from './generateQueryString';
// import QueryObject from '../interfaces/QueryObject';
// import ReturnObj from '../interfaces/ReturnObj';
import DataObject from '../../interfaces/DataObject';

const baseUrl = 'http://127.0.0.1:3000';

export default async function updateWinner(id: number, body: DataObject): Promise<DataObject> {
  const resp: Response = await fetch(`${baseUrl}${Path.GARAGE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  resp.headers.get('X-Total-Count');

  // status 200; ====> {wins, time, id}
  // status 404; ====> {}
  const car: DataObject = await resp.json();

  // persistentStorage.setItem('data-cars', data);
  return car;
}
