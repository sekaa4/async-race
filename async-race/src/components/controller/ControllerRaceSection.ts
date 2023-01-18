import modelRaceSection from '../../models/modelRaceSection';
import ReturnObj from '../../interfaces/ReturnObj';

interface ControllerCarSection {
  removeHandler(id: number, page: number): Promise<ReturnObj | null>;

  // startHandler();

  // stopHandler();
}

class ControllerCarSection implements ControllerCarSection {
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

  // raceHandler() {}

  // resetHandler() {}

  // generateHandler() {}
}

const controllerCarSection = new ControllerCarSection();
export default controllerCarSection;
