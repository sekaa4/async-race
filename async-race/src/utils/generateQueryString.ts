import QueryObject from '../interfaces/QueryObject';

export default function generateQueryString(queryString: QueryObject[]) {
  if (!queryString.length) {
    const paramsArr: string[] = queryString.map((objParam: QueryObject): string => `${objParam.key}=${objParam.value}`);
    return `?${paramsArr.join('&')}`;
  }
  return '';
}
