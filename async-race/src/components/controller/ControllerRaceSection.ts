import modelRaceSection from '../../models/modelRaceSection';
import ReturnObj from '../../interfaces/ReturnObj';
import DataObject from '../../interfaces/DataObject';
import StatusEngine from '../../interfaces/StatusEngine.type';
import Engine from '../../interfaces/Engine';
import Constant from '../../models/Constant';
import globalState from '../../utils/globalState';
import Data from '../../interfaces/Data.type';
// import ControllerCarSection from './ControllerCarSection';

interface ControllerRaceSection {
  removeHandler(id: number, page: number): Promise<ReturnObj | null>;
  selectHandler(id: number): Promise<DataObject | null>;

  // startHandler();

  // stopHandler();
}

class ControllerRaceSection implements ControllerRaceSection {
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

  // raceHandler() {}

  // resetHandler() {}

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

  async switchEngineHandler(id: number, action: StatusEngine, engineParams: Engine, elem: HTMLElement) {
    modelRaceSection.playAnimateModel(id, engineParams, elem);
    const result: boolean | null = await modelRaceSection.switchEngineModel(id, action);
    if (result) {
      return engineParams;
    }
    modelRaceSection.stopAnimateModel(id);
    throw new Error();
  }

  async stopAnimationHandler(id: number, elem: HTMLElement): Promise<boolean | null> {
    try {
      const result: boolean = modelRaceSection.stopAnimateModel(id);
      if (result) {
        const resetPosition: boolean = modelRaceSection.resetPositionModel(id, elem);
        return resetPosition || false;
      }

      return result;
    } catch (err) {
      return null;
    }
  }

  async changePageHandler(option: string): Promise<Data | null> {
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
}

const controllerRaceSection: ControllerRaceSection = new ControllerRaceSection();
export default controllerRaceSection;
