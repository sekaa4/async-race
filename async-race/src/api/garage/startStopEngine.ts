// mport Data from '../../interfaces/Data.type';
// import persistentStorage from './persistentStorage';
import Path from '../../models/Path';
import generateQueryString from '../../utils/generateQueryString';
import QueryObject from '../../interfaces/QueryObject';
import Constant from '../../models/Constant';
// import ReturnObj from '../../interfaces/ReturnObj';
import Engine from '../../interfaces/Engine';
// import ReturnObj from '../interfaces/ReturnObj';

const baseUrl = 'http://127.0.0.1:3000';
// id, status=['started | stopped];
export default async function startStopEngine(queryParams: QueryObject[] = []): Promise<Engine | null> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.ENGINE}${generateQueryString(queryParams)}`, {
      method: 'PATCH',
    });
    console.dir(resp);
    if (resp.status === Constant.STATUSCODE200) {
      const engineObj: Engine = await resp.json();
      return engineObj;
    }
    return null;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }

    return null;
  }

  // const count: number | null = Number(resp.headers.get('X-Total-Count'));
  // status 200 ====>{
  //   "velocity": 64,
  //   "distance": 500000
  // }

  // status 400 ===> {
  // Wrong parameters: "id" should be any positive number, "status" should be "started", "stopped" or "drive"
  // }

  // status 404 ===> {
  // Car with such id was not found in the garage.
  // }

  // const returnObj: ReturnObj = { data, count };

  // persistentStorage.setItem('data-cars', data);
}
