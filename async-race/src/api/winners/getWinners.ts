import Path from '../../models/Path';
import generateQueryString from '../../utils/generateQueryString';
import QueryObject from '../../interfaces/QueryObject';
import ReturnObjWinners from '../../interfaces/ReturnObjWinners';
import DataWinObject from '../../interfaces/DataWinObject';
import Constant from '../../models/Constant';

const baseUrl = 'http://127.0.0.1:3000';

export default async function getWinners(queryParams: QueryObject[] = []): Promise<ReturnObjWinners | null> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.WINNERS}${generateQueryString(queryParams)}`);
    if (resp.status === Constant.STATUSCODE200) {
      const data: DataWinObject[] = await resp.json();
      const count = Number(resp.headers.get('X-Total-Count'));

      const returnObj: ReturnObjWinners = { data, count };
      return returnObj;
    }
    return null;
  } catch (error) {
    return null;
  }
}
