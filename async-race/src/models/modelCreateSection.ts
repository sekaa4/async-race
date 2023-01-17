import * as api from '../api/api';
// import ControllerCarSection from '../components/controller/ControllerCarSection';
import DataObject from '../interfaces/DataObject';
import ReturnObj from '../interfaces/ReturnObj';
import Data from '../interfaces/Data.type';
import UpdateData from '../interfaces/UpdateData';

interface CreateSection {
  createCarModel(name: string, color: string): void;

  // updateCar(name: string, color: string);
}

class ModelCreateSection implements CreateSection {
  async createCarModel(name: string, color: string) {
    const body: UpdateData = {
      name,
      color,
    };

    const newCar: DataObject | null = await api.createCar(body);
    return newCar;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
