/* eslint-disable no-console */
import Path from '../../models/Path';
import Constant from '../../models/Constant';
import Methods from '../../models/Methods';

const baseUrl = Constant.BASEURL;

export default async function deleteCar(id: number): Promise<boolean> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.GARAGE}/${id}`, {
      method: `${Methods.DELETE}`,
    });
    if (resp.status === Constant.STATUSCODE200) {
      return true;
    }
    throw new Error('Car does not deleted, try one more time');
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    throw err;
  }
}
