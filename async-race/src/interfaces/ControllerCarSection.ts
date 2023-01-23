import DataObject from './DataObject';
import RandomData from './RandomData';
import ReturnObj from './ReturnObj';

interface ControllerCarsSection {
  createHandler(e: MouseEvent, inputText: HTMLInputElement, inputColor: HTMLInputElement): Promise<ReturnObj | null>;

  updateHandler(
    e: MouseEvent,
    inputText: HTMLInputElement,
    inputColor: HTMLInputElement,
    oldName?: string
  ): Promise<DataObject | null>;
  generateHandler(): Promise<RandomData | null>;
}

export default ControllerCarsSection;
