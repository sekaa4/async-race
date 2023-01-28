import DataObject from '../interfaces/DataObject';
import ReturnObj from '../interfaces/ReturnObj';
import Constant from '../models/Constant';
import * as api from '../api/api';

export default async function checkCar(id: number, page: number): Promise<DataObject | null> {
  try {
    const carsObj: ReturnObj | null = await api.getCars([
      { key: `${Constant.LIMIT}`, value: `${Constant.SEVEN}` },
      { key: `${Constant.PAGE}`, value: `${page + Constant.ONE}` },
    ]);
    if (carsObj && carsObj.count && carsObj.count > Constant.SEVEN) {
      const { data } = carsObj;
      const nextCar = data[Constant.ZERO];
      return nextCar;
    }
    return null;
  } catch (error) {
    return null;
  }
}
