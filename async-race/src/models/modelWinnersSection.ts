import * as api from '../api/api';
// import Data from '../interfaces/Data.type';
// import DataObject from '../interfaces/DataObject';
import QueryObject from '../interfaces/QueryObject';
import ReturnObj from '../interfaces/ReturnObj';
// import RandomData from '../interfaces/RandomData';
// import ReturnObj from '../interfaces/ReturnObj';
import ReturnObjWinners from '../interfaces/ReturnObjWinners';
// import UpdateData from '../interfaces/UpdateData';
import globalState from '../utils/globalState';
// import randomDataCars from '../utils/randomDataCars';
import Constant from './Constant';

interface WinnersSection {
  getWinnersModel(page: number, sort?: string, order?: string): Promise<ReturnObjWinners | null>;
  // createCarModel(name: string, color: string): Promise<ReturnObj | null>;
  // generateCarModel(name: string, color: string): Promise<RandomData | null>;
  // updateCarModel(name: string, color: string, oldName: string): Promise<DataObject | null>;
}

class ModelWinnersSection implements WinnersSection {
  async getWinnersModel(page: number, sort?: string, order?: string): Promise<ReturnObjWinners | null> {
    try {
      globalState.view = Constant.WINNERS;
      let body: QueryObject[];
      if (sort && order) {
        body = [
          { key: `${Constant.PAGE}`, value: `${page}` },
          { key: `${Constant.LIMIT}`, value: `${Constant.TEN}` },
          { key: `${Constant.SORT}`, value: `${sort}` },
          { key: `${Constant.ORDER}`, value: `${order}` },
        ];
      } else {
        body = [
          { key: `${Constant.PAGE}`, value: `${page}` },
          { key: `${Constant.LIMIT}`, value: `${Constant.TEN}` },
        ];
      }
      const dataWinners: ReturnObjWinners | null = await api.getWinners(body);

      return dataWinners;
    } catch (error) {
      return null;
    }
  }

  async getCarsModel(page: number): Promise<ReturnObj | null> {
    try {
      globalState.view = Constant.GARAGE;
      const body = [
        { key: `${Constant.PAGE}`, value: `${page}` },
        { key: `${Constant.LIMIT}`, value: `${Constant.SEVEN}` },
      ];
      const dataCars: ReturnObj = await api.getCars(body);
      return dataCars;
    } catch (error) {
      return null;
    }
  }

  // async updateCarModel(name: string, color: string, oldName?: string): Promise<DataObject | null> {
  //   const body: UpdateData = {
  //     name,
  //     color,
  //   };
  //   try {
  //     const dataCars: null | ReturnObj = await api.getCars();
  //     if (dataCars) {
  //       const carsArr: Data = dataCars.data;
  //       const car: DataObject | undefined = carsArr.find((carObj: DataObject) =>
  //         oldName ? carObj.name === oldName : carObj.name === name
  //       );
  //       if (car && car.id) {
  //         const selectCar: null | DataObject = await api.updateCar(car.id, body);
  //         return selectCar || null;
  //       }
  //       return null;
  //     }
  //     return null;
  //   } catch (err) {
  //     return null;
  //   }
  // }

  // async generateCarModel(): Promise<RandomData | null> {
  //   try {
  //     const randomData: UpdateData[] = randomDataCars();

  //     const randomCarsArray: (DataObject | null)[] = await Promise.all(
  //       randomData.map(async (dataCar: UpdateData) => {
  //         return api.createCar(dataCar);
  //       })
  //     );
  //     const randomCarsData: Data = randomCarsArray.filter((dataCar) => dataCar || false) as Data;

  //     const dataCars: null | ReturnObj = await api.getCars([{ key: '_limit', value: `${Constant.SEVEN}` }]);

  //     if (dataCars && (dataCars.count || dataCars.count === 0)) {
  //       const { count } = dataCars;
  //       globalState.carsCount = count;
  //       return { randomCarsData, count };
  //     }

  //     return null;
  //   } catch (err) {
  //     return null;
  //   }
  // }
}

const modelWinnersSection = new ModelWinnersSection();
export default modelWinnersSection;
