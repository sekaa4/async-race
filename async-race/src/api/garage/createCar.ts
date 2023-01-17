// import Data from '../interfaces/Data.type';
// import persistentStorage from './persistentStorage';
import Path from '../../models/Path';
// import generateQueryString from './generateQueryString';
// import QueryObject from '../interfaces/QueryObject';
// import ReturnObj from '../interfaces/ReturnObj';
import DataObject from '../../interfaces/DataObject';

const baseUrl = 'http://127.0.0.1:3000';

export default async function createCar(body: DataObject): Promise<DataObject> {
  const resp: Response = await fetch(`${baseUrl}${Path.GARAGE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  // const count: number | null = Number(resp.headers.get('X-Total-Count'));
  // status 201;
  const car: DataObject = await resp.json();
  // console.log('🚀 ~ file: createCar.ts:19 ~ createCar ~ car', car);

  // persistentStorage.setItem('data-cars', data);
  return car;
}