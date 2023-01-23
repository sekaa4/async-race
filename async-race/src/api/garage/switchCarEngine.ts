import Path from '../../models/Path';
import generateQueryString from '../../utils/generateQueryString';
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
}
