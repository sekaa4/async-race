import Data from '../../interfaces/Data.type';
import Path from '../../models/Path';
import generateQueryString from '../../utils/generateQueryString';
import QueryObject from '../../interfaces/QueryObject';
import ReturnObj from '../../interfaces/ReturnObj';
import Constant from '../../models/Constant';

const baseUrl = 'http://127.0.0.1:3000';

export default async function getCars(queryParams: QueryObject[] = []): Promise<ReturnObj | null> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.GARAGE}${generateQueryString(queryParams)}`);
    if (resp.status === Constant.STATUSCODE200) {
      const count: number | undefined = Number(resp.headers.get('X-Total-Count'));
      const data: Data = await resp.json();
      const returnObj: ReturnObj = { data, count };

      return returnObj;
    }
    return null;
  } catch (err) {
    return null;
  }
}
