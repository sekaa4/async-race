import * as api from '../api/api';
import DataObject from '../interfaces/DataObject';
import ReturnObj from '../interfaces/ReturnObj';
import checkCar from '../utils/checkCar';
import Constant from './Constant';
import Engine from '../interfaces/Engine';
import animate from '../utils/animation/animate';
import globalState from '../utils/globalState';
import StatusEngine from '../interfaces/StatusEngine.type';
import StatusCar from '../interfaces/StatusCar';
import CarEngine from '../interfaces/CarEngine.type';
import DataWinObject from '../interfaces/DataWinObject';
import UpdateWinObj from '../interfaces/UpdateWinObj.type.';
import Data from '../interfaces/Data.type';
import RaceSection from '../interfaces/RaceSection';
import View from '../interfaces/View.type';
import modelWinnersSection from './modelWinnersSection';
import ReturnObjWinners from '../interfaces/ReturnObjWinners';

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

      const winnersObj: ReturnObjWinners | null = await api.getWinners([
        { key: `${Constant.LIMIT}`, value: `${Constant.TEN}` },
        { key: `${Constant.PAGE}`, value: `${page}` },
      ]);
      if (winnersObj) {
        const { data } = winnersObj;
        const isExist = data.find((winner: DataWinObject) => winner.id === id);
        if (isExist) {
          await api.deleteWinner(id);
        }
      }

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
    try {
      const engineParams: Engine | null = await api.startStopEngine([
        { key: `${Constant.ID}`, value: `${id}` },
        { key: `${Constant.STATUS}`, value: `${action}` },
      ]);
      const curCarName: DataObject = await api.getCar(id);
      if (engineParams && action !== Constant.STOPPED) {
        const durationTime: number = engineParams.distance / engineParams.velocity;
        if (globalState.engineCarsStatus.has(id)) {
          const curCar: StatusCar = <StatusCar>globalState.engineCarsStatus.get(id);
          curCar.name = curCarName.name;
          curCar.status = action;
          curCar.duration = durationTime;
        } else {
          const { engineCarsStatus } = globalState;

          engineCarsStatus.set(id, {
            name: curCarName.name,
            status: action,
            duration: durationTime,
            progress: 0,
            requestId: 0,
            controller: null,
          });
        }

        return engineParams;
      }
      if (engineParams && action === Constant.STOPPED) {
        const durationTime: number = engineParams.velocity;
        const curCar: StatusCar = <StatusCar>globalState.engineCarsStatus.get(id);
        curCar.status = action;
        curCar.duration = durationTime;
        return engineParams;
      }
      return null;
    } catch (err) {
      return null;
    }
  }

  async switchEngineModel(id: number, action: StatusEngine): Promise<boolean | null> {
    try {
      const controller: AbortController = new AbortController();
      const { signal } = controller;
      const currentCar: StatusCar = <StatusCar>globalState.engineCarsStatus.get(id);
      if (currentCar) {
        currentCar.status = action;
        currentCar.controller = controller;
        const result = await api.switchCarEngine(signal, [
          { key: `${Constant.ID}`, value: `${id}` },
          { key: `${Constant.STATUS}`, value: action },
        ]);

        return result;
      }
      return null;
    } catch (err) {
      return null;
    }
  }

  async changePageModel(page: number): Promise<Data | ReturnObjWinners | null> {
    try {
      const mode: View = globalState.view;

      if (mode === Constant.GARAGE) {
        const dataObj: ReturnObj = await api.getCars([
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
        const dataObjWinners = await modelWinnersSection.getWinnersModel(page);

        if (dataObjWinners) {
          const { data } = dataObjWinners;
          globalState.carsWinners = data;
          globalState.winnersPage = page;

          return dataObjWinners;
        }
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  async carWinnerModel(carEngine: CarEngine, duration: number): Promise<DataWinObject | null> {
    try {
      const newId: number = carEngine[Constant.ZERO];
      const winnerExists: DataWinObject | null = await api.getWinner(newId);
      if (winnerExists) {
        const { id, time, wins } = winnerExists;
        if (time > duration) {
          const countWins: number = wins + Constant.ONE;
          const updateWinObj: UpdateWinObj = { time: duration, wins: countWins };
          return await api.updateWinner(id, updateWinObj);
        }
        const countWins: number = wins + Constant.ONE;
        const updateWinObj: UpdateWinObj = { time, wins: countWins };
        const isUpdate: DataWinObject | null = await api.updateWinner(id, updateWinObj);
        if (isUpdate) {
          const returnWinObj: DataWinObject = { id, time: duration, wins: countWins };
          return returnWinObj;
        }
      }

      const wins: number = Constant.ONE;
      const newWinObj: DataWinObject = { time: duration, wins, id: newId };
      return await api.createWinner(newWinObj);
    } catch (error) {
      return null;
    }
  }

  async playAnimateModel(id: number, engineParams: Engine, elem: HTMLElement): Promise<void> {
    const svgElem = elem;
    const { velocity, distance } = engineParams;
    const duration = distance / velocity;
    animate(id, duration, svgElem);
  }

  async stopAnimateModel(id: number): Promise<boolean> {
    const carCur = globalState.engineCarsStatus.get(id);
    if (carCur && carCur.controller) {
      const { requestId, controller } = carCur;
      window.cancelAnimationFrame(requestId);
      controller.abort();

      return true;
    }

    return false;
  }

  async resetPositionModel(id: number, elem: HTMLElement): Promise<boolean> {
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
