import * as api from '../api/api';
import DataObject from '../interfaces/DataObject';
import ReturnObj from '../interfaces/ReturnObj';
import Data from '../interfaces/Data.type';
import RandomData from '../interfaces/RandomData';
import UpdateData from '../interfaces/UpdateData';
import Constant from './Constant';
import randomDataCars from '../utils/randomDataCars';
import globalState from '../utils/globalState';

interface CreateSection {
  createCarModel(name: string, color: string): Promise<ReturnObj | null>;
  generateCarModel(name: string, color: string): Promise<RandomData | null>;
  updateCarModel(name: string, color: string, oldName: string): Promise<DataObject | null>;
}

class ModelCreateSection implements CreateSection {
  async createCarModel(name: string, color: string): Promise<ReturnObj | null> {
    try {
      const body: UpdateData = {
        name,
        color,
      };

      const newCar: DataObject | null = await api.createCar(body);
      const dataCars: null | ReturnObj = await api.getCars([{ key: `${Constant.LIMIT}`, value: `${Constant.SEVEN}` }]);

      if (dataCars && (dataCars.count || dataCars.count === 0)) {
        const { count, data } = dataCars;
        return { newCar, count, data };
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  async updateCarModel(name: string, color: string, oldName?: string): Promise<DataObject | null> {
    const body: UpdateData = {
      name,
      color,
    };
    try {
      const dataCars: null | ReturnObj = await api.getCars();
      if (dataCars) {
        const carsArr: Data = dataCars.data;
        const car: DataObject | undefined = carsArr.find((carObj: DataObject) =>
          oldName ? carObj.name === oldName : carObj.name === name
        );
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

  async generateCarModel(): Promise<RandomData | null> {
    try {
      const randomData: UpdateData[] = randomDataCars();

      const randomCarsArray: (DataObject | null)[] = await Promise.all(
        randomData.map(async (dataCar: UpdateData) => {
          return api.createCar(dataCar);
        })
      );
      const randomCarsData: Data = randomCarsArray.filter((dataCar) => dataCar || false) as Data;

      const dataCars: null | ReturnObj = await api.getCars([{ key: `${Constant.LIMIT}`, value: `${Constant.SEVEN}` }]);

      if (dataCars && (dataCars.count || dataCars.count === 0)) {
        const { count } = dataCars;
        globalState.carsCount = count;
        return { randomCarsData, count };
      }

      return null;
    } catch (err) {
      return null;
    }
  }
}

const modelCarSection = new ModelCreateSection();
export default modelCarSection;
