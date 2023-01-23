import modelRaceSection from '../../models/modelRaceSection';
import ReturnObj from '../../interfaces/ReturnObj';
import DataObject from '../../interfaces/DataObject';
import StatusEngine from '../../interfaces/StatusEngine.type';
import Engine from '../../interfaces/Engine';
import Constant from '../../models/Constant';
import globalState from '../../utils/globalState';
import Data from '../../interfaces/Data.type';
import CarEngine from '../../interfaces/CarEngine.type';
import DataWinObject from '../../interfaces/DataWinObject';
import ControllerRace from '../../interfaces/ControllerRace';
import DataWinObjectName from '../../interfaces/DataWinObjectName';
import ReturnObjWinners from '../../interfaces/ReturnObjWinners';

class ControllerRaceSection implements ControllerRace {
  async removeHandler(id: number, page: number): Promise<ReturnObj | null> {
    try {
      const isRemove: ReturnObj | null = await modelRaceSection.removeButtonModel(id, page);
      if (isRemove) {
        return isRemove;
      }
      return null;
    } catch (err) {
      return null;
    }
  }

  async selectHandler(id: number): Promise<DataObject | null> {
    try {
      const selectCar: DataObject | null = await modelRaceSection.selectButtonModel(id);
      if (selectCar) {
        return selectCar;
      }
      return null;
    } catch (err) {
      return null;
    }
  }

  async startStopHandler(id: number, action: StatusEngine): Promise<Engine | null> {
    try {
      const statusObj: Engine | null = await modelRaceSection.startStopButtonModel(id, action);

      if (statusObj) {
        return statusObj;
      }
      return null;
    } catch (err) {
      return null;
    }
  }

  async switchEngineHandler(
    id: number,
    action: StatusEngine,
    engineParams: Engine,
    elem: HTMLElement
  ): Promise<Engine> {
    modelRaceSection.playAnimateModel(id, engineParams, elem);
    const result: boolean | null = await modelRaceSection.switchEngineModel(id, action);
    if (result) {
      return engineParams;
    }
    await modelRaceSection.stopAnimateModel(id);
    throw new Error();
  }

  async stopAnimationHandler(id: number, elem: HTMLElement): Promise<boolean | null> {
    try {
      const result: boolean = await modelRaceSection.stopAnimateModel(id);
      if (result) {
        const resetPosition: boolean = await modelRaceSection.resetPositionModel(id, elem);
        return resetPosition || false;
      }

      return result;
    } catch (err) {
      return null;
    }
  }

  async changePageHandler(option: string): Promise<Data | ReturnObjWinners | null> {
    try {
      const mode = globalState.view;

      if (mode === Constant.GARAGE) {
        const curPageCars: number = globalState.carsPage;
        if (option === Constant.NEXT) {
          const nextPageCars = curPageCars + Constant.ONE;
          return await modelRaceSection.changePageModel(nextPageCars);
        }
        if (option === Constant.PREVIOUS) {
          const prevPageCars = curPageCars - Constant.ONE;
          return await modelRaceSection.changePageModel(prevPageCars);
        }
      }
      if (mode === Constant.WINNERS) {
        const pageWinners: number = globalState.winnersPage;
        if (option === Constant.NEXT) {
          const nextPageWinners = pageWinners + Constant.ONE;
          return await modelRaceSection.changePageModel(nextPageWinners);
        }
        if (option === Constant.PREVIOUS) {
          const prevPageWinners = pageWinners - Constant.ONE;
          return await modelRaceSection.changePageModel(prevPageWinners);
        }
      }
      return null;
    } catch (err) {
      return null;
    }
  }

  async winnerHandler(engine: Engine): Promise<DataWinObjectName | null> {
    try {
      const carsEngine: CarEngine[] = Array.from(globalState.engineCarsStatus);
      const duration: number = engine.distance / engine.velocity;
      const car: CarEngine = <CarEngine>(
        carsEngine.find((carEngine: CarEngine) => carEngine[Constant.ONE].duration === duration)
      );
      const result: DataWinObject | null = await modelRaceSection.carWinnerModel(car, duration);
      if (result) {
        const carName: string = car[Constant.ONE].name;
        return { ...result, carName };
      }

      return null;
    } catch (err) {
      return null;
    }
  }
}

const controllerRaceSection: ControllerRaceSection = new ControllerRaceSection();
export default controllerRaceSection;
