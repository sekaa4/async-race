import modelRaceSection from '../../models/modelRaceSection';
import ReturnObj from '../../interfaces/ReturnObj';
import DataObject from '../../interfaces/DataObject';
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

  // async generateHandler() {}
}

const controllerRaceSection = new ControllerRaceSection();
export default controllerRaceSection;
