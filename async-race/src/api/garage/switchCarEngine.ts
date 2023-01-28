import Path from '../../models/Path';
import generateQueryString from '../../utils/generateQueryString';
import QueryObject from '../../interfaces/QueryObject';
import Constant from '../../models/Constant';
import Methods from '../../models/Methods';

const baseUrl = Constant.BASEURL;

export default async function switchCarEngine(signal: AbortSignal, queryParams: QueryObject[] = []) {
  const resp = await fetch(`${baseUrl}${Path.ENGINE}${generateQueryString(queryParams)}`, {
    method: `${Methods.PATCH}`,
    signal,
  });
  if (resp.status === Constant.STATUSCODE200) {
    return true;
  }
  if (resp.status === Constant.ERRORCODE500) {
    return false;
  }
  return null;
}
