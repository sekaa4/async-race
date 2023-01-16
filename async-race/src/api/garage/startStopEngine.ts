import Data from '../../interfaces/Data.type';
// import persistentStorage from './persistentStorage';
import Path from '../../models/Path';
import generateQueryString from '../../utils/generateQueryString';
import QueryObject from '../../interfaces/QueryObject';
// import ReturnObj from '../interfaces/ReturnObj';

const baseUrl = 'http://127.0.0.1:3000';
// id, status=['started | stopped];
export default async function updateEngine(queryParams: QueryObject[] = []): Promise<Data> {
  const resp: Response = await fetch(`${baseUrl}${Path.ENGINE}${generateQueryString(queryParams)}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
  });
  // const count: number | null = Number(resp.headers.get('X-Total-Count'));
  const data: Data = await resp.json();
  // status 200 ====>{
  //   "velocity": 64,
  //   "distance": 500000
  // }

  // status 400 ===> {
  // Wrong parameters: "id" should be any positive number, "status" should be "started", "stopped" or "drive"
  // }

  // status 404 ===> {
  // Car with such id was not found in the garage.
  // }

  // const returnObj: ReturnObj = { data, count };

  // persistentStorage.setItem('data-cars', data);
  return data;
}
