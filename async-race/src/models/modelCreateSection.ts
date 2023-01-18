import * as api from '../api/api';
import DataObject from '../interfaces/DataObject';
import ReturnObj from '../interfaces/ReturnObj';
import Data from '../interfaces/Data.type';
import UpdateData from '../interfaces/UpdateData';
import Constant from './Constant';

interface CreateSection {
  createCarModel(name: string, color: string): Promise<ReturnObj | null>;

  // updateCar(name: string, color: string);
}

class ModelCreateSection implements CreateSection {
  async createCarModel(name: string, color: string): Promise<ReturnObj | null> {
    try {
      const body: UpdateData = {
        name,
        color,
      };

      const newCar: DataObject | null = await api.createCar(body);
      const dataCars: null | ReturnObj = await api.getCars([{ key: '_limit', value: `${Constant.SEVEN}` }]);

      if (dataCars && dataCars.count) {
        const { count, data } = dataCars;
        return { newCar, count, data };
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  async updateCarModel(name: string, color: string): Promise<DataObject | null> {
    const body: UpdateData = {
      name,
      color,
    };
    try {
      const dataCars: null | ReturnObj = await api.getCars();
      if (dataCars) {
        const carsArr: Data = dataCars.data;
        const car: DataObject | undefined = carsArr.find((carObj: DataObject) => carObj.name === name);
        if (car && car.id) {
          const selectCar: null | DataObject = await api.updateCar(car.id, body);
          return selectCar || null;
        }
        return null;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}

const modelCarSection = new ModelCreateSection();
export default modelCarSection;
