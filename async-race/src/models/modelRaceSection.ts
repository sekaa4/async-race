import * as api from '../api/api';
import DataObject from '../interfaces/DataObject';
import ReturnObj from '../interfaces/ReturnObj';
import UpdateData from '../interfaces/UpdateData';
import checkCar from '../utils/checkCar';
import Constant from './Constant';

interface RaceSection {
  selectButtonModel(name: string, color: string): void;

  // updateCar(name: string, color: string);
}

class ModelRaceSection implements RaceSection {
  async selectButtonModel(name: string, color: string) {
    const body: UpdateData = {
      name,
      color,
    };

    const newCar: DataObject | null = await api.createCar(body);
    return newCar;
  }

  async removeButtonModel(id: number, page: number): Promise<ReturnObj | null> {
    try {
      const nextCar: DataObject | null = await checkCar(id, page);
      const isRemove: boolean = await api.deleteCar(id);
      const carsObj: ReturnObj | null = await api.getCars([
        { key: '_limit', value: `${Constant.SEVEN}` },
        { key: '_page', value: `${page}` },
      ]);
      if (isRemove && carsObj) {
        const { data, count } = carsObj;
        return { data, count, nextCar };
      }

      return null;
    } catch (err) {
      return null;
    }
  }
}

const modelRaceSection = new ModelRaceSection();
export default modelRaceSection;
