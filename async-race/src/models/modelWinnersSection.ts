import * as api from '../api/api';
import QueryObject from '../interfaces/QueryObject';
import ReturnObj from '../interfaces/ReturnObj';
import ReturnObjWinners from '../interfaces/ReturnObjWinners';
import globalState from '../utils/globalState';
import Constant from './Constant';

interface WinnersSection {
  getWinnersModel(page: number, sort?: string, order?: string): Promise<ReturnObjWinners | null>;
}

class ModelWinnersSection implements WinnersSection {
  async getWinnersModel(page: number, sort?: string | null, order?: string | null): Promise<ReturnObjWinners | null> {
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
}

const modelWinnersSection = new ModelWinnersSection();
export default modelWinnersSection;
