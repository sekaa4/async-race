import * as api from '../api/api';
import DataObject from '../interfaces/DataObject';
import ReturnObj from '../interfaces/ReturnObj';
// import UpdateData from '../interfaces/UpdateData';
import checkCar from '../utils/checkCar';
import Constant from './Constant';
import Engine from '../interfaces/Engine';
import animate from '../utils/animation/animate';

interface RaceSection {
  selectButtonModel(id: number): Promise<DataObject | null>;
  removeButtonModel(id: number, page: number): Promise<ReturnObj | null>;
  // updateCar(name: string, color: string);
}

class ModelRaceSection implements RaceSection {
  async selectButtonModel(id: number): Promise<DataObject | null> {
    try {
      const selectCar: DataObject | null = await api.getCar(id);
      return selectCar;
    } catch (error) {
      return null;
    }
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

  async startStopButtonModel(id: number, action: string, elem: HTMLElement): Promise<void> {
    // let requestId: number;
    try {
      const engineParams: Engine | null = await api.startStopEngine([
        { key: 'id', value: `${id}` },
        { key: 'status', value: `${action}` },
      ]);
      if (engineParams && action !== 'stop') {
        this.switchEngineModel(id, engineParams, elem);
      }
    } catch (err) {
      // cancelAnimationFrame(requestId);
    }
  }

  async switchEngineModel(id: number, engineParams: Engine, elem: HTMLElement) {
    try {
      const svgElem = elem;
      const { velocity, distance } = engineParams;
      const duration = distance / velocity;
      const requestId = await animate(duration, elem, id);
      // const result = await api.switchCarEngine([
      //   { key: 'id', value: `${id}` },
      //   { key: 'status', value: `drive` },
      // ]);
      // console.log('id', requestId);
      // window.cancelAnimationFrame(requestId);
      // svgElem.style.animationPlayState = 'paused';
    } catch (err) {
      console.log(err);

      // cancelAnimationFrame(requestId);
      // return null;
    }
  }
}

const modelRaceSection = new ModelRaceSection();
export default modelRaceSection;
