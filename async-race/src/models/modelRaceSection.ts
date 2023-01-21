import * as api from '../api/api';
import DataObject from '../interfaces/DataObject';
import ReturnObj from '../interfaces/ReturnObj';
// import UpdateData from '../interfaces/UpdateData';
import checkCar from '../utils/checkCar';
import Constant from './Constant';
import Engine from '../interfaces/Engine';
import animate from '../utils/animation/animate';
import globalState from '../utils/globalState';
import StatusEngine from '../interfaces/StatusEngine.type';
import StatusCar from '../interfaces/StatusCar';

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
        { key: `${Constant.LIMIT}`, value: `${Constant.SEVEN}` },
        { key: `${Constant.PAGE}`, value: `${page}` },
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

  async startStopButtonModel(id: number, action: StatusEngine): Promise<Engine | null> {
    // let requestId: number;
    try {
      const engineParams: Engine | null = await api.startStopEngine([
        { key: `${Constant.ID}`, value: `${id}` },
        { key: `${Constant.STATUS}`, value: `${action}` },
      ]);
      if (engineParams && action !== Constant.STOPPED) {
        const durationTime: number = engineParams.distance / engineParams.velocity;
        if (globalState.engineCarsStatus.has(id)) {
          const curCar: StatusCar = <StatusCar>globalState.engineCarsStatus.get(id);
          curCar.status = action;
          curCar.duration = durationTime;
        } else {
          const { engineCarsStatus } = globalState;
          engineCarsStatus.set(id, {
            status: action,
            duration: durationTime,
            progress: 0,
            requestId: 0,
            controller: null,
          });
        }

        return engineParams;
        // this.switchEngineModel(id, engineParams, elem);
      }
      if (engineParams && action === Constant.STOPPED) {
        const durationTime: number = engineParams.velocity;
        const curCar: StatusCar = <StatusCar>globalState.engineCarsStatus.get(id);
        curCar.status = action;
        curCar.duration = durationTime;
        return engineParams;
      }

      // if (engineParams && action !== 'stop') {
      //   this.switchEngineModel(id, engineParams, elem);
      // }
      return null;
    } catch (err) {
      // cancelAnimationFrame(requestId);
      return null;
    }
  }

  async switchEngineModel(id: number, action: StatusEngine) {
    try {
      // const svgElem = elem;
      // const { velocity, distance } = engineParams;
      // const duration = distance / velocity;
      const controller: AbortController = new AbortController();
      const { signal } = controller;
      const currentCar: StatusCar = <StatusCar>globalState.engineCarsStatus.get(id);
      if (currentCar) {
        currentCar.status = action;
        currentCar.controller = controller;
        // globalState.engineCarsStatus.set(id, { status: action, duration: durationTime });
        const result = await api.switchCarEngine(signal, [
          { key: `${Constant.ID}`, value: `${id}` },
          { key: `${Constant.STATUS}`, value: action },
        ]);

        return result;
      }

      // const requestId = await animate(duration, elem, id);

      // window.cancelAnimationFrame(requestId);
      // svgElem.style.animationPlayState = 'paused';
      return null;
    } catch (err) {
      // cancelAnimationFrame(requestId);
      return null;
    }
  }

  async changePageModel(page: number) {
    try {
      const mode = globalState.view;

      if (mode === Constant.GARAGE) {
        const dataObj = await api.getCars([
          { key: `${Constant.LIMIT}`, value: `${Constant.SEVEN}` },
          { key: `${Constant.PAGE}`, value: `${page}` },
        ]);
        const { count, data } = dataObj;
        if (count && data) {
          globalState.carsPage = page;
          globalState.carsData = data;
        }
        return data;
      }

      if (mode === Constant.WINNERS) {
        const dataObj = await api.getWinners([
          { key: `${Constant.LIMIT}`, value: `${Constant.SEVEN}` },
          { key: `${Constant.PAGE}`, value: `${page}` },
        ]);

        const { count, data } = dataObj;
        if (count && data) {
          globalState.carsWinners = data;
          globalState.winnersPage = page;
        }
        return data;
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  playAnimateModel(id: number, engineParams: Engine, elem: HTMLElement) {
    const svgElem = elem;
    const { velocity, distance } = engineParams;
    const duration = distance / velocity;
    animate(id, duration, svgElem);
  }

  stopAnimateModel(id: number) {
    const carCur = globalState.engineCarsStatus.get(id);
    if (carCur && carCur.controller) {
      const { requestId, controller } = carCur;
      window.cancelAnimationFrame(requestId);
      controller.abort();

      return true;
    }

    return false;
  }

  resetPositionModel(id: number, elem: HTMLElement) {
    const svgCarElem: HTMLElement = elem;
    svgCarElem.style.left = '';
    const carCur: StatusCar = <StatusCar>globalState.engineCarsStatus.get(id);
    const { requestId, controller } = carCur;
    if (requestId && controller) {
      window.cancelAnimationFrame(requestId);
      controller.abort();
      carCur.progress = 0;
      carCur.requestId = 0;
      carCur.controller = null;

      return true;
    }

    return false;
  }
}

const modelRaceSection = new ModelRaceSection();
export default modelRaceSection;
