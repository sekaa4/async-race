import Path from '../../models/Path';
import generateQueryString from '../../utils/generateQueryString';
import QueryObject from '../../interfaces/QueryObject';
import Constant from '../../models/Constant';
import Engine from '../../interfaces/Engine';

const baseUrl = 'http://127.0.0.1:3000';
export default async function startStopEngine(queryParams: QueryObject[] = []): Promise<Engine | null> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.ENGINE}${generateQueryString(queryParams)}`, {
      method: `${Constant.PATCH}`,
    });
    if (resp.status === Constant.STATUSCODE200) {
      const engineObj: Engine = await resp.json();
      return engineObj;
    }
    return null;
  } catch (err) {
    return null;
  }
}
