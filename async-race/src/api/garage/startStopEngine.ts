import Path from '../../models/Path';
import generateQueryString from '../../utils/generateQueryString';
import QueryObject from '../../interfaces/QueryObject';
import Constant from '../../models/Constant';
import Engine from '../../interfaces/Engine';
import Methods from '../../models/Methods';

const baseUrl = Constant.BASEURL;
export default async function startStopEngine(queryParams: QueryObject[] = []): Promise<Engine | null> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.ENGINE}${generateQueryString(queryParams)}`, {
      method: `${Methods.PATCH}`,
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
