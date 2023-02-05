/* eslint-disable no-console */
import Data from '../../interfaces/Data.type';
import Path from '../../models/Path';
import generateQueryString from '../../utils/generateQueryString';
import QueryObject from '../../interfaces/QueryObject';
import ReturnObj from '../../interfaces/ReturnObj';
import Constant from '../../models/Constant';

const baseUrl = Constant.BASEURL;

export default async function getCars(queryParams: QueryObject[] = []): Promise<ReturnObj> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.GARAGE}${generateQueryString(queryParams)}`);
    const count: number | undefined = Number(resp.headers.get('X-Total-Count'));
    const data: Data = await resp.json();
    const returnObj: ReturnObj = { data, count };

    return returnObj;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    throw err;
  }
}
