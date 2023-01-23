import RandomData from '../../interfaces/RandomData';
import DataObject from '../../interfaces/DataObject';
import ReturnObj from '../../interfaces/ReturnObj';
import modelCarSection from '../../models/modelCreateSection';
import ControllerCarsSection from '../../interfaces/ControllerCarSection';

class ControllerCarSection implements ControllerCarsSection {
  async createHandler(
    e: MouseEvent,
    inputText: HTMLInputElement,
    inputColor: HTMLInputElement
  ): Promise<ReturnObj | null> {
    const target: HTMLButtonElement = <HTMLButtonElement>e.target;
    if (target.innerText === 'CREATE') {
      target.disabled = true;
      const valueText = inputText.value;
      const valueColor = inputColor.value;
      const newCar: ReturnObj | null = await modelCarSection.createCarModel(valueText, valueColor);
      target.disabled = false;
      return newCar;
    }
    target.disabled = false;
    return null;
  }

  async updateHandler(e: MouseEvent, inputText: HTMLInputElement, inputColor: HTMLInputElement, oldName?: string) {
    const target: HTMLButtonElement = <HTMLButtonElement>e.target;
    try {
      if (target.innerText === 'UPDATE') {
        target.disabled = true;
        const valueText = inputText.value;
        const valueColor = inputColor.value;
        const selectCar: DataObject | null = await modelCarSection.updateCarModel(valueText, valueColor, oldName);
        target.disabled = false;
        return selectCar;
      }
      target.disabled = false;
      return null;
    } catch (err) {
      return null;
    }
  }

  async generateHandler(): Promise<RandomData | null> {
    try {
      const generateCars: RandomData | null = await modelCarSection.generateCarModel();
      return generateCars;
    } catch (error) {
      return null;
    }
  }
}

const controllerCarSection: ControllerCarSection = new ControllerCarSection();
export default controllerCarSection;
