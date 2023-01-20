// import Data from '../interfaces/Data.type';
// import persistentStorage from './persistentStorage';
import Path from '../../models/Path';
import generateQueryString from '../../utils/generateQueryString';
// import ReturnObj from '../interfaces/ReturnObj';
// import DataObject from '../../interfaces/DataObject';
import QueryObject from '../../interfaces/QueryObject';
import Constant from '../../models/Constant';

const baseUrl = 'http://127.0.0.1:3000';

export default async function switchCarEngine(signal: AbortSignal, queryParams: QueryObject[] = []) {
  const resp = await fetch(`${baseUrl}${Path.ENGINE}${generateQueryString(queryParams)}`, {
    method: `${Constant.PATCH}`,
    signal,
  });
  if (resp.status === 200) {
    return true;
  }
  if (resp.status === 500) {
    return false;
  }
  return null;
  // const count: number | null = Number(resp.headers.get('X-Total-Count'));
  // status 200; ====> {"success": true}

  // status 400 ===> {
  // Wrong parameters: "id" should be any positive number, "status" should be "started", "stopped" or "drive"
  // }

  // status 404 ===> {
  // Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?
  // }

  // status 429 ===> {
  // Drive already in progress. You can't run drive for the same car twice while it's not stopped.
  // }

  // status 500 ===> {
  // Car has been stopped suddenly. It's engine was broken down.
  // }
  // const car: DataObject = await resp.json();

  // persistentStorage.setItem('data-cars', data);
  // return car;
}
