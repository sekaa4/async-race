import DataObject from '../../interfaces/DataObject';
import modelCarSection from '../../models/modelCreateSection';

interface ControllerCarSection {
  selectHandler(e: MouseEvent, inpputText: HTMLInputElement, inputColor: HTMLInputElement): Promise<DataObject | null>;

  removeHandler(e: MouseEvent, inputText: HTMLInputElement, inputColor: HTMLInputElement): Promise<DataObject | null>;

  // startHandler();

  // stopHandler();
}

class ControllerCarSection implements ControllerCarSection {
  async selectHandler(
    e: MouseEvent,
    inputText: HTMLInputElement,
    inputColor: HTMLInputElement
  ): Promise<DataObject | null> {
    const target: HTMLButtonElement = <HTMLButtonElement>e.target;
    if (target.innerText === 'CREATE') {
      target.disabled = true;
      const valueText = inputText.value;
      const valueColor = inputColor.value;
      const newCar: DataObject | null = await modelCarSection.createCarModel(valueText, valueColor);
      target.disabled = false;
      return newCar;
    }
    target.disabled = false;
    return null;
  }

  async removeHandler(e: MouseEvent, inputText: HTMLInputElement, inputColor: HTMLInputElement) {
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