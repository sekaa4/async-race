import modelWinnersSection from '../../models/modelWinnersSection';
import ReturnObjWinners from '../../interfaces/ReturnObjWinners';
import ReturnObj from '../../interfaces/ReturnObj';

interface ControllerWinnerSection {
  getWinnersHandler(page: number, sort?: string, order?: string): Promise<ReturnObjWinners | null>;
  getCarsHandler(page: number): Promise<ReturnObj | null>;
}

class ControllerWinnersSection implements ControllerWinnerSection {
  async getWinnersHandler(page: number, sort?: string, order?: string): Promise<ReturnObjWinners | null> {
    try {
      if (sort && order) {
        const dataWinners: ReturnObjWinners | null = await modelWinnersSection.getWinnersModel(page, sort, order);
        return dataWinners;
      }
      const dataWinners: ReturnObjWinners | null = await modelWinnersSection.getWinnersModel(page);
      return dataWinners;
    } catch (error) {
      return null;
    }
  }

  async getCarsHandler(page: number): Promise<ReturnObj | null> {
    try {
      const dataCars: ReturnObj | null = await modelWinnersSection.getCarsModel(page);
      return dataCars;
    } catch (error) {
      return null;
    }
  }
}

const controllerWinnersSection: ControllerWinnersSection = new ControllerWinnersSection();
export default controllerWinnersSection;
