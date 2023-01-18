import DataObject from '../../interfaces/DataObject';
import ReturnObj from '../../interfaces/ReturnObj';
import modelCarSection from '../../models/modelCreateSection';

interface ControllerCarSection {
  createHandler(e: MouseEvent, inputText: HTMLInputElement, inputColor: HTMLInputElement): Promise<ReturnObj | null>;

  updateHandler(e: MouseEvent, inputText: HTMLInputElement, inputColor: HTMLInputElement): Promise<DataObject | null>;

  // raceHandler();

  // resetHandler();

  // generateHandler();
}

class ControllerCarSection implements ControllerCarSection {
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

  async updateHandler(e: MouseEvent, inputText: HTMLInputElement, inputColor: HTMLInputElement) {
    const target: HTMLButtonElement = <HTMLButtonElement>e.target;
    try {
      if (target.innerText === 'UPDATE') {
        target.disabled = true;
        const valueText = inputText.value;
        const valueColor = inputColor.value;
        const selectCar: DataObject | null = await modelCarSection.updateCarModel(valueText, valueColor);
        target.disabled = false;
        return selectCar;
      }
      target.disabled = false;
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
