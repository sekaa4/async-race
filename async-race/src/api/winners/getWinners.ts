import Data from '../../interfaces/Data.type';
import persistentStorage from '../../utils/persistentStorage';
import Path from '../../models/Path';
import generateQueryString from '../../utils/generateQueryString';
import QueryObject from '../../interfaces/QueryObject';
import ReturnObj from '../../interfaces/ReturnObj';

const baseUrl = 'http://127.0.0.1:3000';

export default async function getWinners(queryParams: QueryObject[] = []): Promise<ReturnObj> {
  const resp: Response = await fetch(`${baseUrl}${Path.WINNERS}${generateQueryString(queryParams)}`);
  const count: number | null = Number(resp.headers.get('X-Total-Count'));
  const data: Data = await resp.json();
  const returnObj: ReturnObj = { data, count };

  // status 200 [arr Obj], headers x-count

  persistentStorage.setItem('data-cars', data);
  return returnObj;
}
