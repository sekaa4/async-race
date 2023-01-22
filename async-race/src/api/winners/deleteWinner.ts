import Path from '../../models/Path';
import Constant from '../../models/Constant';

const baseUrl = 'http://127.0.0.1:3000';

export default async function deleteCar(id: number): Promise<boolean> {
  try {
    const resp: Response = await fetch(`${baseUrl}${Path.WINNERS}/${id}`, {
      method: 'DELETE',
    });

    if (resp.status === Constant.STATUSCODE200) {
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
}
